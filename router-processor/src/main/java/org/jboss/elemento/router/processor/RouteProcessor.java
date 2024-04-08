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
import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedOptions;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;

import org.jboss.elemento.router.Route;

import com.google.auto.common.BasicAnnotationProcessor;
import com.google.auto.service.AutoService;
import com.google.common.collect.ImmutableSetMultimap;
import com.squareup.javapoet.ClassName;
import com.squareup.javapoet.FieldSpec;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.ParameterizedTypeName;
import com.squareup.javapoet.TypeSpec;

import static com.google.auto.common.MoreElements.asType;
import static com.google.common.base.Strings.emptyToNull;
import static java.util.Arrays.asList;
import static java.util.Collections.emptySet;
import static javax.lang.model.element.Modifier.FINAL;
import static javax.lang.model.element.Modifier.PRIVATE;
import static javax.lang.model.element.Modifier.PUBLIC;
import static javax.lang.model.element.Modifier.STATIC;

/**
 * This class is a processor that generates a Routes implementation based on the Route annotations in the codebase.
 * It creates a RoutesImpl class that contains a map of Place to Suppliers of Page objects.
 * The map is populated with entries for each Route annotation found, where the key is a Place object created from the Route value,
 * and the value is a Supplier that creates a new instance of the corresponding Page class.
 */
@AutoService(Processor.class)
@SupportedSourceVersion(SourceVersion.RELEASE_11)
@SupportedAnnotationTypes({"org.jboss.elemento.router.Route"})
@SupportedOptions({"routes.package"})
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

        private static final String PACKAGE = "org.jboss.elemento.router";
        private static final String CLASS = "RoutesImpl";
        private static final String FQN = PACKAGE + "." + CLASS;

        private final ProcessingEnvironment processingEnv;

        RoutesStep(ProcessingEnvironment processingEnv) {
            this.processingEnv = processingEnv;
        }

        @Override
        public Set<String> annotations() {
            return Set.of(Route.class.getName());
        }

        @Override
        public Set<? extends Element> process(ImmutableSetMultimap<String, Element> elementsByAnnotation) {
            List<RouteInfo> routes = new ArrayList<>();
            String packageName = processingEnv.getOptions().getOrDefault("routes.package", PACKAGE);
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
                    ClassName mapClass = ClassName.get("java.util", "Map");
                    ClassName hashMapClass = ClassName.get("java.util", "HashMap");
                    ClassName supplierClass = ClassName.get("java.util.function", "Supplier");
                    ClassName pageClass = ClassName.get("org.jboss.elemento.router", "Page");
                    ClassName placeClass = ClassName.get("org.jboss.elemento.router", "Place");
                    ClassName routesClass = ClassName.get("org.jboss.elemento.router", "Routes");
                    ClassName routesImplClass = ClassName.get(packageName, "RoutesImpl");

                    FieldSpec instanceField = FieldSpec.builder(routesClass, "INSTANCE")
                            .addModifiers(PUBLIC, STATIC, FINAL)
                            .initializer("new $T()", routesImplClass)
                            .build();
                    ParameterizedTypeName mapOfPlaceToSuppliersOfPage = ParameterizedTypeName.get(mapClass,
                            placeClass, ParameterizedTypeName.get(supplierClass, pageClass));
                    FieldSpec placesField = FieldSpec.builder(mapOfPlaceToSuppliersOfPage, "places")
                            .addModifiers(PRIVATE, FINAL)
                            .build();
                    MethodSpec.Builder constructorBuilder = MethodSpec.constructorBuilder()
                            .addModifiers(PRIVATE)
                            .addStatement("this.$N = new $T<>()", "places", hashMapClass);
                    for (RouteInfo route : routes) {
                        if (route.title == null) {
                            if (route.selector == null) {
                                constructorBuilder.addStatement("places.put(new $T($S), () -> new $L())",
                                        placeClass, route.route, route.pageClass);
                            } else {
                                constructorBuilder.addStatement("places.put(new $T($S, null, $S), () -> new $L())",
                                        placeClass, route.route, route.selector, route.pageClass);
                            }
                        } else {
                            if (route.selector == null) {
                                constructorBuilder.addStatement("places.put(new $T($S, $S), () -> new $L())",
                                        placeClass, route.route, route.title, route.pageClass);
                            } else {
                                constructorBuilder.addStatement("places.put(new $T($S, $S, $S), () -> new $L())",
                                        placeClass, route.route, route.title, route.selector, route.pageClass);
                            }
                        }
                    }
                    MethodSpec constructor = constructorBuilder.build();
                    MethodSpec placesMethod = MethodSpec.methodBuilder("places")
                            .addModifiers(PUBLIC)
                            .returns(mapOfPlaceToSuppliersOfPage)
                            .addStatement("return places")
                            .build();

                    TypeSpec routesImplType = TypeSpec.classBuilder(CLASS)
                            .addSuperinterface(routesClass)
                            .addModifiers(PUBLIC)
                            .addFields(asList(instanceField, placesField))
                            .addMethods(asList(constructor, placesMethod))
                            .build();

                    JavaFile javaFile = JavaFile.builder(packageName, routesImplType)
                            .build();
                    StringBuilder builder = new StringBuilder();
                    javaFile.writeTo(builder);
                    javaFile.writeTo(processingEnv.getFiler());
                } catch (IOException e) {
                    throw new ProcessingException("Error writing code for " + FQN + ": " + e.getMessage());
                }
            }
            return emptySet();
        }
    }
}
