import org.jboss.elemento.By;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.body;

@SuppressWarnings("unused")
public class FinderDemo {

    public void findAllDemo() {
        // @start region = findAll
        By selector = By.element("a").and(By.attribute("href", STARTS_WITH, "https://"));
        for (HTMLElement element : body().findAll(selector)) {
            a(element).css("external");
        }
        // @end region = findAll
    }
}
