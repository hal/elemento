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

import javax.lang.model.element.Element;
import javax.lang.model.element.PackageElement;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.TypeMirror;

/**
 * Takes a set of types and a package and determines which of those types can be imported, and how
 * to spell any of the types in the set given those imports.
 *
 * @author emcmanus@google.com (Éamonn McManus)
 */
public final class TypeSimplifier {

    /**
     * Returns the name of the given type, including any enclosing types but not the package.
     */
    public static String classNameOf(TypeElement type) {
        String name = type.getQualifiedName().toString();
        String pkgName = packageNameOf(type);
        return pkgName.isEmpty() ? name : name.substring(pkgName.length() + 1);
    }

    /**
     * Returns the name of the package that the given type is in. If the type is in the default
     * (unnamed) package then the name is the empty string.
     */
    public static String packageNameOf(TypeElement type) {
        while (true) {
            Element enclosing = type.getEnclosingElement();
            if (enclosing instanceof PackageElement) {
                return ((PackageElement) enclosing).getQualifiedName().toString();
            }
            type = (TypeElement) enclosing;
        }
    }

    public static String simpleNameOf(String s) {
        if (s.contains(".")) {
            return s.substring(s.lastIndexOf('.') + 1);
        } else {
            return s;
        }
    }

    public static String simpleTypeName(final TypeMirror type) {
        String name = type.toString();
        if (name.startsWith("java.lang.")) {
            return name.substring("java.lang.".length());
        }
        return name;
    }

    private TypeSimplifier() {
    }
}
