import org.jboss.elemento.intl.DurationFormat;
import org.jboss.elemento.intl.ListFormat;
import org.jboss.elemento.intl.ListFormatOptions;
import elemental2.core.JsArray;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.short_;
import static org.jboss.elemento.intl.Grouping.conjunction;
import static org.jboss.elemento.intl.Grouping.disjunction;
import static org.jboss.elemento.intl.Grouping.unit;

@SuppressWarnings("unused")
public class ListFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var vehicles = JsArray.of("Motorcycle", "Bus", "Car");

        var formatter = new ListFormat("en", ListFormatOptions.create()
                .style(long_)
                .type(conjunction));
        console.log(formatter.format(vehicles));
        // Expected output: "Motorcycle, Bus, and Car"

        var formatter2 = new ListFormat("de", ListFormatOptions.create()
                .style(short_)
                .type(disjunction));
        console.log(formatter2.format(vehicles));
        // Expected output: "Motorcycle, Bus oder Car"

        var formatter3 = new ListFormat("en", ListFormatOptions.create()
                .style(narrow)
                .type(unit));
        console.log(formatter3.format(vehicles));
        // Expected output: "Motorcycle Bus Car"
        // @end region = generalUsage
    }
}
