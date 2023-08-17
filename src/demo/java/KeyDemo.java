import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.Escape;

@SuppressWarnings({"unused", "StatementWithEmptyBody"})
public class KeyDemo {

    public void keyDemo() {
        // @start region = key
        body().on(keydown, e -> {
            if (Escape.match(e)) {
                // ...
            } else {
                // ...
            }
        });
        // @end region = key
    }
}
