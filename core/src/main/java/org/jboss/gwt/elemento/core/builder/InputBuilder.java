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
package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLInputElement;

public class InputBuilder<E extends HTMLInputElement> extends ElementBuilder<E, InputBuilder<E>> {

    public InputBuilder(E element) {
        super(element);
    }

    @Override
    public InputBuilder<E> that() {
        return this;
    }

    public InputBuilder<E> checked(boolean checked) {
        get().checked = checked;
        return that();
    }
}
