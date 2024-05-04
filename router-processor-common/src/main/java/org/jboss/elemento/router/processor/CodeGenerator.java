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
import com.squareup.javapoet.MethodSpec;

abstract class CodeGenerator {

    private int counter = 0;

    abstract void generateCode(Filer filer, String packageName, List<RouteInfo> routes) throws IOException;

    String placeStatement(MethodSpec.Builder constructorBuilder, ClassName placeClass, RouteInfo route) {
        String placeName = "place" + counter;

        CodeBlock.Builder builder = CodeBlock.builder();
        builder.add("$T $N = $T.place($S)", placeClass, placeName, placeClass, route.route);
        if (route.title != null) {
            builder.add(".title($S)", route.title);
        }
        if (route.selector != null) {
            builder.add(".root($S)", route.title);
        }
        constructorBuilder.addStatement(builder.build());

        counter++;
        return placeName;
    }
}
