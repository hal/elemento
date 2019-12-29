/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.elemento.testsuite.processor;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.annotation.processing.Processor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.lang.model.element.Element;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.util.ElementFilter;

import com.google.auto.common.MoreElements;
import com.google.auto.service.AutoService;
import com.google.common.collect.Iterables;
import org.jboss.auto.AbstractProcessor;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

@SuppressWarnings("UnstableApiUsage")
@AutoService(Processor.class)
@SupportedAnnotationTypes("org.junit.jupiter.api.Test")
public class TestProcessor extends AbstractProcessor {

    private static final String TEST_TEMPLATE = "Test.ftl";
    private static final String SUITE_TEMPLATE = "Suite.ftl";
    private static final String SUITE_CLASSNAME = "TestSuite";

    public TestProcessor() {
        super(TestProcessor.class, "templates");
    }

    @Override
    protected boolean onProcess(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        Map<String, TestClass> tests = new HashMap<>();
        for (TypeElement annotation : annotations) {
            Set<? extends Element> annotatedElements = roundEnv.getElementsAnnotatedWith(annotation);
            for (Element testMethod : annotatedElements) {
                TypeElement type = (TypeElement) testMethod.getEnclosingElement();
                String fqn = type.getQualifiedName().toString();
                String packageName = TypeSimplifier.packageNameOf(type);

                // TODO Verify @Test, @BeforeEach and @AfterEach methods: not static, return void, no parameters
                TestClass test;
                if (tests.containsKey(fqn)) {
                    test = tests.get(fqn);
                } else {
                    test = new TestClass(packageName, type.getSimpleName().toString());
                    for (ExecutableElement method : ElementFilter.methodsIn(type.getEnclosedElements())) {
                        if (MoreElements.isAnnotationPresent(method, BeforeEach.class)) {
                            test.addBefore(method.getSimpleName().toString());
                        }
                        if (MoreElements.isAnnotationPresent(method, AfterEach.class)) {
                            test.addAfter(method.getSimpleName().toString());
                        }
                    }
                    tests.put(fqn, test);
                }
                test.addTest(testMethod.getSimpleName().toString());
            }
        }

        for (TestClass test : tests.values()) {
            writeTest(test);
        }
        if (onLastRound(roundEnv) && !tests.isEmpty()) {
            writeSuite(tests.values());
        }
        return false;
    }

    private void writeTest(TestClass test) {
        code(TEST_TEMPLATE, test.getPackageName(), test.getTestCaseName(), () -> {
            Map<String, Object> context = new HashMap<>();
            context.put(TemplateNames.GENERATED_WITH, TestProcessor.class.getName());
            context.put(TemplateNames.PACKAGE_NAME, test.getPackageName());
            context.put(TemplateNames.CLASS_NAME, test.getTestCaseName());
            context.put("test", test);
            return context;
        });
    }

    private void writeSuite(Collection<TestClass> tests) {
        TestClass first = Iterables.getFirst(tests, null);
        if (first != null) {
            code(SUITE_TEMPLATE, first.getPackageName(), SUITE_CLASSNAME, () -> {
                Map<String, Object> context = new HashMap<>();
                context.put(TemplateNames.GENERATED_WITH, TestProcessor.class.getName());
                context.put(TemplateNames.PACKAGE_NAME, first.getPackageName());
                context.put(TemplateNames.CLASS_NAME, SUITE_CLASSNAME);
                context.put("tests", tests);
                return context;
            });
        }
    }
}