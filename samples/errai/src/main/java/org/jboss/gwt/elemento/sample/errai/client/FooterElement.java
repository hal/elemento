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

import javax.inject.Singleton;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.Constants;
import org.jboss.gwt.elemento.sample.common.Urls;

import static org.jboss.gwt.elemento.core.Elements.a;
import static org.jboss.gwt.elemento.core.Elements.footer;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.jboss.gwt.elemento.core.Elements.span;

@Singleton
@SuppressWarnings("CdiInjectionPointsInspection")
public class FooterElement implements IsElement<HTMLElement> {

    private final HTMLElement root;

    public FooterElement() {
        root = footer().css("info")
                .add(p().textContent(Constants.DOUBLE_CLICK_TO_EDIT))
                .add(p().add(span().textContent(Constants.CREATED_BY + " "))
                        .add(a(Urls.HPEHL_INFO).textContent("Harald Pehl")))
                .add(p().add(span().textContent(Constants.PART_OF + " "))
                        .add(a(Urls.TODO_MVC).textContent("TodoMVC")))
                .asElement();
    }

    @Override
    public HTMLElement asElement() {
        return root;
    }
}
