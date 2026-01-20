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

import com.squareup.javapoet.ClassName;
import com.squareup.javapoet.MethodSpec;

import static javax.lang.model.element.Modifier.PUBLIC;

class CdiCodeGenerator extends CodeGenerator {

    private static final String BEAN_MANAGER_PACKAGE = "org.kie.j2cl.tools.di.core";
    private static final String BEAN_MANAGER_CLASS = "BeanManager";
    private static final String BEAN_MANAGER_NAME = "beanManager";

    @Override
    MethodSpec.Builder buildConstructor() {
        ClassName beanManagerClass = ClassName.get(BEAN_MANAGER_PACKAGE, BEAN_MANAGER_CLASS);
        return MethodSpec.constructorBuilder()
                .addModifiers(PUBLIC)
                .addParameter(beanManagerClass, BEAN_MANAGER_NAME)
                .addStatement("super()");
    }

    @Override
    void addPlace(MethodSpec.Builder constructor, String placeName, RouteInfo route) {
        constructor.addStatement("add($N, () -> $N.lookupBean($L.class).getInstance())",
                placeName, BEAN_MANAGER_NAME, route.pageClass);
    }
}
