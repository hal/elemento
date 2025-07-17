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

import com.google.auto.common.BasicAnnotationProcessor;
import com.google.auto.common.MoreTypes;
import com.google.common.collect.ImmutableSetMultimap;
import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.Route;
import javax.annotation.processing.ProcessingEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.TypeMirror;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static com.google.auto.common.MoreElements.asType;
import static com.google.common.base.Strings.emptyToNull;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
import static javax.lang.model.element.ElementKind.METHOD;
import static javax.lang.model.element.Modifier.PUBLIC;
import static javax.lang.model.element.Modifier.STATIC;
import static javax.tools.Diagnostic.Kind.ERROR;
import static javax.tools.Diagnostic.Kind.WARNING;

class RouteStep implements BasicAnnotationProcessor.Step {

    private final ProcessingEnvironment processingEnv;
    private final CodeGenerator codeGenerator;
    private final List<RouteInfo> routes;

    RouteStep(ProcessingEnvironment processingEnv, CodeGenerator codeGenerator) {
        this.processingEnv = processingEnv;
        this.codeGenerator = codeGenerator;
        this.routes = new ArrayList<>();
    }

    @Override
    public Set<String> annotations() {
        return Set.of(Route.class.getName());
    }

    @Override
    @SuppressWarnings("UnstableApiUsage")
    public Set<? extends Element> process(ImmutableSetMultimap<String, Element> elementsByAnnotation) {
        Set<Element> notReady = new HashSet<>();
        String packageName = processingEnv.getOptions().getOrDefault("places.package", Names.PLACES_PACKAGE);
        String className = processingEnv.getOptions().getOrDefault("places.class", Names.PLACES_CLASS);

        for (Map.Entry<String, Element> entry : elementsByAnnotation.entries()) {
            Element element = entry.getValue();
            Route route = element.getAnnotation(Route.class);

            // create route info
            TypeElement pageType = asType(element);
            RouteInfo routeInfo = new RouteInfo(emptyToNull(route.value()),
                    emptyToNull(route.title()),
                    emptyToNull(route.selector()),
                    pageType.getQualifiedName().toString());

            processLoader(pageType, route, routeInfo, notReady);
            routes.add(routeInfo);
        }

        if (notReady.isEmpty() && !routes.isEmpty()) {
            try {
                codeGenerator.generateCode(processingEnv.getFiler(), packageName, className, routes);
            } catch (IOException e) {
                String error = String.format("Error writing code for %s.%s: %s", packageName, Names.PLACES_CLASS,
                        e.getMessage());
                processingEnv.getMessager().printMessage(ERROR, error);
            }
        }
        return notReady;
    }

    private void processLoader(TypeElement pageType, Route route, RouteInfo routeInfo, Set<Element> notReady) {
        // #1 Look for loader methods in the page class
        List<ExecutableElement> exactMatches = new ArrayList<>();
        List<ExecutableElement> possibleMatches = new ArrayList<>();
        for (ExecutableElement method : possibleLoadersMethods(pageType)) {
            if (method.getParameters().isEmpty() && method.getModifiers().contains(PUBLIC)) {
                exactMatches.add(method);
            } else {
                possibleMatches.add(method);
            }
        }
        if (exactMatches.size() == 1) {
            routeInfo.loaderInfo = new LoaderInfo(pageType.getQualifiedName().toString(),
                    exactMatches.get(0).getSimpleName().toString());
        } else if (exactMatches.size() > 1) {
            String methods = exactMatches.stream()
                    .map(method -> method.getSimpleName().toString() + "()")
                    .collect(joining(", ", "'", "'"));
            String error = String.format("Page %s has defined more than one public static loader method: %s",
                    routeInfo.pageClass, methods);
            processingEnv.getMessager().printMessage(ERROR, error);
        }

        if (!possibleMatches.isEmpty()) {
            for (ExecutableElement possibleMatch : possibleMatches) {
                String parameters = possibleMatch.getParameters()
                        .stream()
                        .map(parameterType -> parameterType.asType().toString() + " " + parameterType.getSimpleName()
                                .toString())
                        .collect(joining(", "));
                String warning = String.format(
                        "Should the method '%s(%s)' in page %s act as a loader method? Loader methods must not have parameters.",
                        possibleMatch.getSimpleName().toString(), parameters, routeInfo.pageClass);
                processingEnv.getMessager().printMessage(WARNING, warning, possibleMatch);
            }
        }

        // #2 Look for loader references
        if (emptyToNull(route.loader()) != null) {
            if (routeInfo.loaderInfo == null) {
                LoaderInfo loaderInfo = LoaderStep.loaderInfos.get(route.loader());
                if (loaderInfo != null) {
                    routeInfo.loaderInfo = loaderInfo;
                } else {
                    notReady.add(pageType);
                }
            } else {
                String error = String.format(
                        "Page %s has defined the public static loader method '%s()' and a reference to a named loader '%s'. Only one loader per page is allowed!",
                        routeInfo.pageClass, routeInfo.loaderInfo.loaderMethod, route.loader());
                processingEnv.getMessager().printMessage(ERROR, error);
            }
        }
    }

    private List<ExecutableElement> possibleLoadersMethods(TypeElement pageType) {
        return pageType.getEnclosedElements().stream()
                .filter(element -> element.getKind() == METHOD && element.getModifiers().contains(STATIC))
                .map(element -> ((ExecutableElement) element))
                .filter(method -> {
                    TypeMirror returnType = method.getReturnType();
                    return MoreTypes.isType(returnType) && MoreTypes.isTypeOf(LoadData.class, returnType);
                })
                .collect(toList());
    }
}
