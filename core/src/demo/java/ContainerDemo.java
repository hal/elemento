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
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.ul;

@SuppressWarnings("unused")
public class ContainerDemo {

    public void addAllDemo() {
        // @start region = addAll
        TodoRepository repository = new TodoRepository();
        TodoElement[] elements = repository.todos().stream()
                .map(TodoElement::new)
                .toArray(TodoElement[]::new);
        HTMLUListElement ul = ul()
                .addAll(elements)
                .element();
        // @end region = addAll
    }
}
