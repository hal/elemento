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

package org.jboss.gwt.elemento.testsuite.processor;

import java.util.ArrayList;
import java.util.List;

public class TestClass {

    private final String packageName;
    private final String testCaseName;
    private final String className;
    private final List<String> before;
    private final List<String> after;
    private final List<String> tests;

    public TestClass(String packageName, String className) {
        this.packageName = packageName;
        this.testCaseName = className + "Case";
        this.className = className;
        this.before = new ArrayList<>();
        this.after = new ArrayList<>();
        this.tests = new ArrayList<>();
    }

    void addBefore(String name) {
        before.add(name);
    }

    void addAfter(String name) {
        after.add(name);
    }

    void addTest(String name) {
        tests.add(name);
    }

    public String getPackageName() {
        return packageName;
    }

    public String getTestCaseName() {
        return testCaseName;
    }

    public String getClassName() {
        return className;
    }

    public List<String> getBefore() {
        return before;
    }

    public List<String> getAfter() {
        return after;
    }

    public List<String> getTests() {
        return tests;
    }
}
