import java.util.List;

import org.jboss.elemento.By;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.asHtmlElement;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.find;
import static org.jboss.elemento.Elements.htmlElements;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
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
        HTMLElement section = section().css("main")
                .add(input(checkbox).id("toggle-all").css("toggle-all"))
                .add(label()
                        .apply(l -> l.htmlFor = "toggle-all")
                        .textContent("Mark all as complete"))
                .add(ul().css("todo-list")
                        .add(li()
                                .add(div().css("view")
                                        .add(input(checkbox)
                                                .css("toggle")
                                                .checked(true))
                                        .add(label().textContent("Taste Elemento"))
                                        .add(button().css("destroy")))
                                .add(input(text).css("edit"))))
                .element();
        // @end region = builder
    }

    public void findAllDemo() {
        // @start region = findAll
        By selector = By.element("a").and(By.attribute("href", STARTS_WITH, "https://"));
        for (HTMLElement element : body().findAll(selector)) {
            a(element).css("external");
        }
        // @end region = findAll
    }

    public void streamDemo() {
        // @start region = stream
        HTMLElement parent = find(body(), By.data("foo", "bar"));
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
