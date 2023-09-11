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
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.dblclick;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;

// @start region = isElement
public class TodoElement implements IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLButtonElement destroy;
    private final HTMLInputElement summary;
    private HandlerRegistration handlerRegistration;

    TodoElement(Todo todo) {
        root = li().data("item", todo.id)
                .add(div().css("view")
                        .add(toggle = input(checkbox).css("toggle")
                                .checked(todo.completed)
                                .element())
                        .add(label = label().textContent(todo.text).element())
                        .add(destroy = button().css("destroy").element()))
                .add(summary = input(text).css("edit").element())
                .element();
        root.classList.toggle("completed", todo.completed);
        toggle.checked = todo.completed;
        Attachable.register(root, this);
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        handlerRegistration = HandlerRegistrations.compose(
                bind(toggle, change, ev -> element()), // @replace substring='attach(null)' replacement="..."
                bind(label, dblclick, ev -> element()), // @replace substring='element()' replacement="..."
                bind(destroy, click, ev -> element()), // @replace substring='element()' replacement="..."
                bind(summary, keydown, ev -> element()), // @replace substring='element()' replacement="..."
                bind(summary, blur, ev -> element())); // @replace substring='element()' replacement="..."
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (handlerRegistration != null) {
            handlerRegistration.removeHandler();
        }
    }
}
// @end region = isElement
