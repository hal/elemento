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
import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementsBag;

import elemental2.dom.HTMLDListElement;

import static org.jboss.elemento.Elements.bag;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;

@SuppressWarnings({"RedundantOperationOnEmptyContainer", "MismatchedQueryAndUpdateOfCollection"})
public class ElementsBagDemo {

    public void bagDemo() {
        // @start region = bag
        ElementsBag bag = bag();
        Map<String, Todo> data = new HashMap<>(); // @replace substring='new HashMap<>()' replacement="..."
        data.forEach((text, todo) -> {
            bag.add(dt().textContent(text));
            bag.add(dd().add(new TodoElement(todo)));
        });
        HTMLDListElement element = dl().addAll(bag.elements()).element();
        // @end region = bag
    }
}
