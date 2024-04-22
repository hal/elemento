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
import java.util.List;

import javax.annotation.processing.Filer;

import com.squareup.javapoet.ClassName;
import com.squareup.javapoet.FieldSpec;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.ParameterizedTypeName;
import com.squareup.javapoet.TypeSpec;

import static java.util.Arrays.asList;
import static javax.lang.model.element.Modifier.FINAL;
import static javax.lang.model.element.Modifier.PRIVATE;
import static javax.lang.model.element.Modifier.PUBLIC;
import static javax.lang.model.element.Modifier.STATIC;

class SimpleCodeGenerator extends CodeGenerator {

    void generateCode(Filer filer, String packageName, List<RouteInfo> routes) throws IOException {
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
                .addStatement("this.$N = new $T<>()", Names.PLACES, hashMapClass);

        for (RouteInfo route : routes) {
            if (route.title == null) {
                if (route.selector == null) {
                    constructorBuilder.addStatement("$N.put(new $T($S), () -> new $L())",
                            Names.PLACES, placeClass, route.route, route.pageClass);
                } else {
                    constructorBuilder.addStatement("$N.put(new $T($S, null, $S), () -> new $L())",
                            Names.PLACES, placeClass, route.route, route.selector, route.pageClass);
                }
            } else {
                if (route.selector == null) {
                    constructorBuilder.addStatement("$N.put(new $T($S, $S), () -> new $L())",
                            Names.PLACES, placeClass, route.route, route.title, route.pageClass);
                } else {
                    constructorBuilder.addStatement("$N.put(new $T($S, $S, $S), () -> new $L())",
                            Names.PLACES, placeClass, route.route, route.title, route.selector, route.pageClass);
                }
            }
        }

        MethodSpec constructor = constructorBuilder.build();
        MethodSpec placesMethod = MethodSpec.methodBuilder("places")
                .addModifiers(PUBLIC)
                .returns(mapOfPlaceToSuppliersOfPage)
                .addStatement("return places")
                .build();

        TypeSpec routesImplType = TypeSpec.classBuilder(Names.CLASS)
                .addSuperinterface(routesClass)
                .addModifiers(PUBLIC)
                .addFields(asList(instanceField, placesField))
                .addMethods(asList(constructor, placesMethod))
                .build();

        JavaFile javaFile = JavaFile.builder(packageName, routesImplType)
                .build();
        javaFile.writeTo(filer);
    }
}
