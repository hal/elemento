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
