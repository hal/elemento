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
import org.jboss.elemento.Attachable;
import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.div;

@SuppressWarnings("unused")
// @start region = attach
public class Greeting implements IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;

    Greeting(String name) {
        root = div().textContent("Hello " + name).element();
        Attachable.register(root, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        console.log("Greeting has been attached to the DOM!");
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    public static void init() {
        body().add(new Greeting("Smilla"));
    }
}
// @end region = attach
