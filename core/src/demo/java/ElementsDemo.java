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

import java.util.List;

import org.jboss.elemento.By;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.asHtmlElement;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.htmlElements;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.querySelector;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.stream;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.dblclick;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;

@SuppressWarnings("unused")
public class ElementsDemo {

    public void builderDemo() {
        // @start region = builder
        /* The code below, builds the following HTML snippet
        <section class="main">
            <input class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li>
                    <div class="view">
                        <input class="toggle" type="checkbox" checked>
                        <label>Taste Elemento</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit">
                </li>
            </ul>
        </section>
         */
        TodoRepository repository = new TodoRepository();
        HTMLElement section = section().css("main")
                .add(input(checkbox).id("toggle-all").css("toggle-all"))
                .add(label()
                        .apply(l -> l.htmlFor = "toggle-all")
                        .textContent("Mark all as complete"))
                .add(ul().css("todo-list")
                        .run(ul -> {
                            for (Todo todo : repository.todos()) {
                                ul.add(li()
                                        .add(div().css("view")
                                                .add(input(checkbox)
                                                        .css("toggle")
                                                        .checked(todo.completed))
                                                .add(label().textContent(todo.text))
                                                .add(button().css("destroy")))
                                        .add(input(text).css("edit")));
                            }
                        }))
                .element();
        // @end region = builder
    }

    public void streamDemo() {
        // @start region = stream
        HTMLElement parent = querySelector(body(), By.data("foo", "bar"));
        if (parent != null) {
            List<HTMLElement> htmlElements = stream(parent)
                    .filter(htmlElements())
                    .map(asHtmlElement())
                    .collect(toList());
        }
        // @end region = stream
    }

    public void onDemo() {
        // @start region = on
        HTMLLIElement listItem = li()
                .add(div().css("view")
                        .add(input(checkbox)
                                .css("toggle")
                                .on(change, event -> onDemo())) // @replace substring='onDemo()' replacement="..."
                        .add(label()
                                .textContent("Taste Elemento")
                                .on(dblclick, event -> onDemo())) // @replace substring='onDemo()' replacement="..."
                        .add(button()
                                .css("destroy")
                                .on(click, event -> onDemo()))) // @replace substring='onDemo()' replacement="..."
                .add(input(text)
                        .css("edit")
                        .on(keydown, event -> onDemo()) // @replace substring='onDemo()' replacement="..."
                        .on(blur, event -> onDemo())) // @replace substring='onDemo()' replacement="..."
                .element();
        // @end region = on
    }
}
