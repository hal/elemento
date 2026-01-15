import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.short_;
import static org.jboss.elemento.intl.RelativeTimeFormat.relativeTimeFormat;
import static org.jboss.elemento.intl.RelativeTimeFormatOptions.relativeTimeFormatOptions;
import static org.jboss.elemento.intl.When.auto;

@SuppressWarnings("unused")
public class RelativeTimeFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var rtf1 = relativeTimeFormat("en", relativeTimeFormatOptions()
                .style(short_));

        console.log(rtf1.format(3, "quarter"));
        // Expected output: "in 3 qtrs."

        console.log(rtf1.format(-1, "day"));
        // Expected output: "1 day ago"

        var rtf2 = relativeTimeFormat("es", relativeTimeFormatOptions()
                .numeric(auto));

        console.log(rtf2.format(2, "day"));
        // Expected output: "pasado mañana"
        // @end region = generalUsage
    }
}
