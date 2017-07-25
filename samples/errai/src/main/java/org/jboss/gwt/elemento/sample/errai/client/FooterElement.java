/*
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
package org.jboss.gwt.elemento.sample.errai.client;

import javax.inject.Inject;
import javax.inject.Singleton;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.Urls;

import static org.jboss.gwt.elemento.core.Elements.a;
import static org.jboss.gwt.elemento.core.Elements.footer;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.jboss.gwt.elemento.core.Elements.span;

@Singleton
@SuppressWarnings("CdiInjectionPointsInspection")
public class FooterElement implements IsElement<HTMLElement> {

    private final HTMLElement root;

    @Inject
    public FooterElement(final I18n i18n) {
        root = footer().css("info")
                .add(p().textContent(i18n.constants().double_click_to_edit()))
                .add(p().add(span().textContent(i18n.constants().created_by() + " "))
                        .add(a(Urls.HPEHL_INFO).textContent("Harald Pehl")))
                .add(p().add(span().textContent(i18n.constants().part_of() + " "))
                        .add(a(Urls.TODO_MVC).textContent("TodoMVC")))
                .asElement();
    }

    @Override
    public HTMLElement asElement() {
        return root;
    }
}
