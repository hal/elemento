import org.jboss.elemento.By;

import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;

@SuppressWarnings("unused")
public class ByDemo {

    public void groupDemo() {
        // @start region = group
        // #main [data-list-item=foo] a[href^="https://"] > .fas.fa-check, .external[hidden]
        By.group(
                By.id("main")
                        .desc(By.data("listItem", "foo")
                                .desc(By.element("a").and(By.attribute("href", STARTS_WITH, "https://"))
                                        .child(By.classnames("fas", "fa-check")))),
                By.classname("external").and(By.attribute("hidden")));
        // @end region = group
    }

    public void andDemo() {
        // @start region = and
        // button.primary
        By.element("button").and(By.classname("primary"));

        // input[type=checkbox]
        By.element("input").and(By.attribute("type", "checkbox"));
        // @end region = and
    }
}
