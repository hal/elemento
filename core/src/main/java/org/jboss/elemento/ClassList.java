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
package org.jboss.elemento;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import elemental2.dom.Element;

import static java.util.Arrays.asList;
import static java.util.Objects.requireNonNull;

public class ClassList<E extends Element> implements Iterable<String> {

    // ------------------------------------------------------ factory

    public static <E extends Element> ClassList<E> classList(E element) {
        return new ClassList<>(element);
    }

    // ------------------------------------------------------ instance

    private final E element;

    ClassList(E element) {
        this.element = requireNonNull(element, "element required");
    }

    // ------------------------------------------------------ api

    /**
     * Adds one or more classes to the class list of the element. Empty classes are ignored, classes with spaces are split into
     * multiple classes.
     */
    public void add(String... classes) {
        for (String cls : failSafeClasses(classes)) {
            element.classList.add(cls);
        }
    }

    /**
     * Removes one or more classes from the class list of the element. Empty classes are ignored, classes with spaces are split
     * into multiple classes.
     */
    public void remove(String... classes) {
        for (String cls : failSafeClasses(classes)) {
            element.classList.remove(cls);
        }
    }

    /** Toggle the class value; i.e., if the class exists, then remove it, if not, then add it. */
    public void toggle(String classname) {
        if (classname != null && !classname.isEmpty()) {
            element.classList.toggle(classname);
        }
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public void toggle(String classname, boolean force) {
        if (classname != null && !classname.isEmpty()) {
            element.classList.toggle(classname, force);
        }
    }

    /**
     * Replaces occurrences of a class name with a new class name in the class list of the element.
     */
    public void replace(String oldClassname, String newClassname) {
        if (oldClassname != null && newClassname != null && !oldClassname.isEmpty() && !newClassname.isEmpty()) {
            element.classList.replace(oldClassname, newClassname);
        }
    }

    /**
     * Checks if the specified class name exists in the class list of the element.
     *
     * @param classname the class name to check for; must not be null or empty
     * @return true if the class name exists in the element's class list, false otherwise
     */
    public boolean contains(String classname) {
        return element.classList.contains(classname);
    }

    @Override
    public Iterator<String> iterator() {
        return element.classList.asList().iterator();
    }

    public int length() {
        return element.classList.length;
    }

    // ------------------------------------------------------ internal

    private String[] failSafeClasses(String... classes) {
        if (classes != null) {
            List<String> failSafeClasses = new ArrayList<>();
            for (String c : classes) {
                if (c != null && !c.isEmpty()) {
                    if (c.contains(" ")) {
                        failSafeClasses.addAll(asList(c.split(" ")));
                    } else {
                        failSafeClasses.add(c);
                    }
                }
            }
            return failSafeClasses.toArray(new String[0]);
        }
        return new String[0];
    }
}
