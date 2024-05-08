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
import com.squareup.javapoet.CodeBlock;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.MethodSpec;
import com.squareup.javapoet.TypeSpec;

import static javax.lang.model.element.Modifier.PUBLIC;

abstract class CodeGenerator {

    private int counter = 0;

    final void generateCode(Filer filer, String packageName, String className, List<RouteInfo> routes) throws IOException {
        ClassName placeClass = ClassName.get("org.jboss.elemento.router", "Place");
        ClassName placesClass = ClassName.get("org.jboss.elemento.router", "Places");

        MethodSpec.Builder constructor = buildConstructor();
        for (RouteInfo route : routes) {
            String placeName = createPlace(constructor, placeClass, route);
            addPlace(constructor, placeName, route);
        }

        TypeSpec implType = TypeSpec.classBuilder(className)
                .superclass(placesClass)
                .addModifiers(PUBLIC)
                .addMethod(constructor.build())
                .build();

        JavaFile javaFile = JavaFile.builder(packageName, implType)
                .build();
        javaFile.writeTo(filer);
    }

    abstract MethodSpec.Builder buildConstructor();

    String createPlace(MethodSpec.Builder constructor, ClassName placeClass, RouteInfo route) {
        String placeName = "place" + counter;

        CodeBlock.Builder builder = CodeBlock.builder();
        builder.add("$T $N = $T.place($S)", placeClass, placeName, placeClass, route.route);
        if (route.title != null) {
            builder.add(".title($S)", route.title);
        }
        if (route.selector != null) {
            builder.add(".root($S)", route.title);
        }
        constructor.addStatement(builder.build());

        counter++;
        return placeName;
    }

    abstract void addPlace(MethodSpec.Builder constructor, String placeName, RouteInfo route);
}
