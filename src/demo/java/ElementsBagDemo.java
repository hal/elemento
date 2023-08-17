import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementsBag;

import elemental2.dom.HTMLDListElement;

import static org.jboss.elemento.Elements.bag;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;

@SuppressWarnings({"MismatchedQueryAndUpdateOfCollection", "RedundantOperationOnEmptyContainer", "unused"})
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
