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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.processing.ProcessingEnvironment;
import javax.lang.model.element.Element;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.TypeMirror;
import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.Loader;
import com.google.auto.common.BasicAnnotationProcessor;
import com.google.auto.common.MoreElements;
import com.google.auto.common.MoreTypes;
import com.google.auto.common.Visibility;
import com.google.common.collect.ImmutableSetMultimap;

import static com.google.auto.common.MoreElements.asType;
import static java.util.Collections.emptySet;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toSet;
import static javax.lang.model.element.ElementKind.METHOD;
import static javax.lang.model.element.Modifier.ABSTRACT;
import static javax.lang.model.element.Modifier.PUBLIC;
import static javax.lang.model.element.Modifier.STATIC;
import static javax.tools.Diagnostic.Kind.ERROR;

@SuppressWarnings("UnstableApiUsage")
class LoaderStep implements BasicAnnotationProcessor.Step {

    static final Map<String, LoaderInfo> loaderInfos = new HashMap<>();
    private final ProcessingEnvironment processingEnv;

    LoaderStep(ProcessingEnvironment processingEnv) {
        this.processingEnv = processingEnv;
    }

    @Override
    public Set<String> annotations() {
        return Set.of(Loader.class.getName());
    }

    @Override
    public Set<? extends Element> process(ImmutableSetMultimap<String, Element> elementsByAnnotation) {
        for (Map.Entry<String, Element> entry : elementsByAnnotation.entries()) {
            Element element = entry.getValue();
            Loader loader = element.getAnnotation(Loader.class);

            if (MoreElements.isType(element)) {
                TypeElement type = asType(element);
                if (validLoaderType(type) && uniqueLoader(loader.value(), element)) {
                    LoaderInfo loaderInfo = new LoaderInfo(type.getQualifiedName().toString(), null);
                    loaderInfos.put(loader.value(), loaderInfo);
                }

            } else if (element.getKind() == METHOD) {
                ExecutableElement method = MoreElements.asExecutable(element);
                if (validLoaderMethod(method) && uniqueLoader(loader.value(), element)) {
                    LoaderInfo loaderInfo = new LoaderInfo(
                            MoreElements.asType(method.getEnclosingElement()).getQualifiedName().toString(),
                            method.getSimpleName().toString());
                    loaderInfos.put(loader.value(), loaderInfo);
                }
            }
        }
        return emptySet();
    }

    private boolean validLoaderType(TypeElement type) {
        if (!type.getModifiers().contains(PUBLIC)) {
            String error = String.format("Class %s annotated with @%s is not public", type.getQualifiedName().toString(),
                    Loader.class.getSimpleName());
            processingEnv.getMessager().printMessage(ERROR, error, type);
            return false;
        }
        if (type.getModifiers().contains(ABSTRACT)) {
            String error = String.format("Class %s annotated with @%s is abstract", type.getQualifiedName().toString(),
                    Loader.class.getSimpleName());
            processingEnv.getMessager().printMessage(ERROR, error, type);
            return false;
        }
        Set<String> erasedInterfaces = type.getInterfaces().stream()
                .map(interface_ -> processingEnv.getTypeUtils().erasure(interface_).toString())
                .collect(toSet());
        if (!erasedInterfaces.contains(LoadData.class.getName())) {
            String error = String.format("Class %s annotated with @%s does not implement %s<?>",
                    type.getQualifiedName().toString(), Loader.class.getSimpleName(), LoadData.class.getSimpleName());
            processingEnv.getMessager().printMessage(ERROR, error, type);
            return false;
        }
        return true;
    }

    private boolean validLoaderMethod(ExecutableElement method) {
        boolean validSignature = false;
        if (method.getModifiers().containsAll(List.of(PUBLIC, STATIC)) && method.getParameters().isEmpty()) {
            TypeMirror returnType = method.getReturnType();
            validSignature = MoreTypes.isType(returnType) && MoreTypes.isTypeOf(LoadData.class, returnType);
        }
        if (!validSignature) {
            String parameters = method.getParameters()
                    .stream()
                    .map(parameterType -> parameterType.asType().toString() + " " + parameterType.getSimpleName()
                            .toString())
                    .collect(joining(", "));
            String error = String.format(
                    "Method '%s(%s)' annotated with @%s is not a valid loader method. Valid loader methods have to be public static, return %s<?> and accept no parameters.",
                    method.getSimpleName().toString(), parameters, Loader.class.getSimpleName(),
                    LoadData.class.getSimpleName());
            processingEnv.getMessager().printMessage(ERROR, error, method);
            return false;
        }

        if (Visibility.effectiveVisibilityOfElement(method) != Visibility.PUBLIC) {
            String error = String.format("Method '%s()' annotated with @%s is not publicly accessible.",
                    method.getSimpleName().toString(), Loader.class.getSimpleName());
            processingEnv.getMessager().printMessage(ERROR, error, method);
            return false;
        }
        return true;
    }

    private boolean uniqueLoader(String name, Element element) {
        if (loaderInfos.containsKey(name)) {
            String error = String.format("Loader '%s' has already been defined.", name);
            processingEnv.getMessager().printMessage(ERROR, error, element);
        }
        return true;
    }
}
