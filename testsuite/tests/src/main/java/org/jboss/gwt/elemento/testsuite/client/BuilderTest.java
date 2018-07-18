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

package org.jboss.gwt.elemento.testsuite.client;

import org.jboss.gwt.elemento.testsuite.Before;
import org.jboss.gwt.elemento.testsuite.Test;

import static org.jboss.gwt.elemento.core.Elements.a;
import static org.jboss.gwt.elemento.testsuite.Assert.assertAttribute;
import static org.jboss.gwt.elemento.testsuite.Assert.assertTag;
import static org.jboss.gwt.elemento.testsuite.TestSupport.builder;
import static org.jboss.gwt.elemento.testsuite.TestSupport.clear;
import static org.jboss.gwt.elemento.testsuite.TestSupport.firstElementChild;

public class BuilderTest {

    @Before
    public void setUp() {
        clear();
    }

    @Test
    public void aTag() {
        builder().add(a());
        assertTag(firstElementChild(), "a");
    }

    @Test
    public void aHref() {
        String href = "https://github.com/hal/elemento";
        builder().add(a(href));
        assertAttribute(firstElementChild(), "href", href);
    }
}
