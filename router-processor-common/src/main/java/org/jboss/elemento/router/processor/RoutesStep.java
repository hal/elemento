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

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.processing.ProcessingEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;

import org.jboss.elemento.router.Route;

import com.google.auto.common.BasicAnnotationProcessor;
import com.google.common.collect.ImmutableSetMultimap;

import static com.google.auto.common.MoreElements.asType;
import static com.google.common.base.Strings.emptyToNull;
import static java.util.Collections.emptySet;

class RoutesStep implements BasicAnnotationProcessor.Step {

    private final ProcessingEnvironment processingEnv;
    private final CodeGenerator codeGenerator;

    RoutesStep(ProcessingEnvironment processingEnv, CodeGenerator codeGenerator) {
        this.processingEnv = processingEnv;
        this.codeGenerator = codeGenerator;
    }

    @Override
    public Set<String> annotations() {
        return Set.of(Route.class.getName());
    }

    @Override
    @SuppressWarnings("UnstableApiUsage")
    public Set<? extends Element> process(ImmutableSetMultimap<String, Element> elementsByAnnotation) {
        List<RouteInfo> routes = new ArrayList<>();
        String packageName = processingEnv.getOptions().getOrDefault("places.package", Names.PLACES_PACKAGE);
        String className = processingEnv.getOptions().getOrDefault("places.class", Names.PLACES_CLASS);
        for (Map.Entry<String, Element> entry : elementsByAnnotation.entries()) {
            Element element = entry.getValue();
            TypeElement pageType = asType(element);

            Route route = element.getAnnotation(Route.class);
            routes.add(new RouteInfo(emptyToNull(route.value()),
                    emptyToNull(route.title()),
                    emptyToNull(route.selector()),
                    pageType.getQualifiedName().toString()));
        }

        if (!routes.isEmpty()) {
            try {
                codeGenerator.generateCode(processingEnv.getFiler(), packageName, className, routes);
            } catch (IOException e) {
                throw new ProcessingException(
                        "Error writing code for " + packageName + "." + Names.PLACES_CLASS + ": " + e.getMessage());
            }
        }
        return emptySet();
    }

    private boolean isValid(TypeElement pageType) {

        return true;
    }
}
