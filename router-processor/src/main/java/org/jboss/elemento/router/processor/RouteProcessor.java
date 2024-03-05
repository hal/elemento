/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.router.processor;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.tools.JavaFileObject;

import org.jboss.elemento.router.Route;

import com.google.auto.common.BasicAnnotationProcessor;
import com.google.auto.service.AutoService;
import com.google.common.collect.ImmutableSetMultimap;

import static com.google.auto.common.MoreElements.asType;
import static com.google.common.base.Strings.emptyToNull;
import static java.util.Collections.emptySet;

@SuppressWarnings("unused")
@AutoService(Processor.class)
@SupportedSourceVersion(SourceVersion.RELEASE_11)
@SupportedAnnotationTypes({ "org.jboss.elemento.router.Route" })
public class RouteProcessor extends BasicAnnotationProcessor {

    @Override
    public SourceVersion getSupportedSourceVersion() {
        return SourceVersion.RELEASE_11;
    }

    @Override
    protected Iterable<? extends Step> steps() {
        return List.of(new RoutesStep(processingEnv));
    }

    static class RoutesStep implements Step {

        private static final String TEMPLATE = "Routes.ftl";
        private static final String PACKAGE = "org.jboss.elemento.router";
        private static final String CLASS = "RoutesImpl";
        private static final String FQN = PACKAGE + "." + CLASS;

        private final ProcessingEnvironment processingEnv;
        private final CodeGenerator generator;

        RoutesStep(ProcessingEnvironment processingEnv) {
            this.processingEnv = processingEnv;
            this.generator = new CodeGenerator(RoutesStep.class, "templates");
        }

        @Override
        public Set<String> annotations() {
            return Set.of(Route.class.getName());
        }

        @Override
        public Set<? extends Element> process(ImmutableSetMultimap<String, Element> elementsByAnnotation) {
            List<RouteInfo> routes = new ArrayList<>();
            for (Map.Entry<String, Element> entry : elementsByAnnotation.entries()) {
                Element element = entry.getValue();
                Route route = element.getAnnotation(Route.class);
                // noinspection UnstableApiUsage
                routes.add(new RouteInfo(emptyToNull(route.value()),
                        emptyToNull(route.title()),
                        emptyToNull(route.selector()),
                        asType(element).getQualifiedName().toString()));
            }

            if (!routes.isEmpty()) {
                try {
                    JavaFileObject jfo = processingEnv.getFiler().createSourceFile(FQN);
                    Writer w = jfo.openWriter();
                    BufferedWriter bw = new BufferedWriter(w);
                    bw.append(generator.generate(TEMPLATE, Map.of(
                            "generatedWith", RouteProcessor.class.getName(),
                            "packageName", PACKAGE,
                            "className", CLASS,
                            "routes", routes)));
                    bw.close();
                    w.close();
                } catch (IOException e) {
                    throw new ProcessingException("Error writing code for " + FQN + ": " + e.getMessage());
                }
            }
            return emptySet();
        }
    }
}
