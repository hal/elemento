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
package org.jboss.elemento.sample.crysknife;

import javax.inject.Singleton;

import elemental2.dom.HTMLElement;
import io.crysknife.ui.templates.client.annotation.DataField;
import io.crysknife.ui.templates.client.annotation.Templated;
import org.jboss.elemento.IsElement;

@Singleton
@Templated("Todo.html#info")
public class FooterElement implements IsElement<HTMLElement> {

    @DataField
    HTMLElement info;

    @Override
    public HTMLElement element() {
        return info;
    }
}
