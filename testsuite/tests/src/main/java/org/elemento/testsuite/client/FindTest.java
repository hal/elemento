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

package org.elemento.testsuite.client;

import java.util.stream.StreamSupport;

import elemental2.dom.HTMLElement;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;
import org.elemento.By;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.elemento.Elements.findAll;
import static org.elemento.testsuite.TestPage.clear;
import static org.elemento.testsuite.TestPage.main;
import static org.elemento.testsuite.client.Fixtures.SELECTOR_HTML;

public class FindTest {

    @BeforeEach
    public void setUp() {
        clear();
        main().innerHtml(SafeHtmlUtils.fromTrustedString(SELECTOR_HTML));
    }

    @Test
    public void findAllLi() {
        Iterable<HTMLElement> li = findAll(main(), By.element("li"));
        long count = StreamSupport.stream(li.spliterator(), false).count();
        assert 4 == count;
    }
}
