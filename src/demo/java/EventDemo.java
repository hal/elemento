import org.gwtproject.event.shared.HandlerRegistration;

import static elemental2.dom.DomGlobal.alert;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;

@SuppressWarnings("unused")
public class EventDemo {

    public void bindDemo() {
        // @start region = bind
        HandlerRegistration handler = bind(body(), click, event -> alert("Clicked"));
        // later...
        handler.removeHandler();
        // @end region = bind

    }
}
