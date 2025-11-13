import org.jboss.elemento.intl.DateTimeFormat;
import org.jboss.elemento.intl.DateTimeFormatOptions;
import elemental2.core.JsDate;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.full;
import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.numeric;
import static org.jboss.elemento.intl.Format.short_;
import static org.jboss.elemento.intl.HourCycle.h12;

@SuppressWarnings("unused")
public class DateTimeFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var date = new JsDate(2020, 11, 20, 3, 23, 16, 738);

        // Specify default date formatting for language (locale)
        console.log(new DateTimeFormat("en-US").format(new JsDate()));
        // Expected output: "12/20/2020"

        // Specify date and time format using "style" options (i.e. full, long, medium, short)
        console.log(new DateTimeFormat("en-GB", DateTimeFormatOptions.create()
                .dateStyle(full)
                .timeStyle(full)
                .timeZone("Australia/Sydney")).format(date));
        // Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
        // @end region = generalUsage
    }

    public void dayPeriod() {
        // @start region = dayPeriod
        var date = new JsDate(2012, 11, 17, 4, 0, 42);

        console.log(new DateTimeFormat("en-GB", DateTimeFormatOptions.create()
                .hour(numeric)
                .hourCycle(h12)
                .dayPeriod(short_)
                .timeZone("UTC")).format(date));
        // 4 at night" (same formatting in en-GB for all dayPeriod values)

        console.log(new DateTimeFormat("fr", DateTimeFormatOptions.create()
                .hour(numeric)
                .hourCycle(h12)
                .dayPeriod(narrow)
                .timeZone("UTC")).format(date));
        // "4 mat." (same output in French for both narrow/short dayPeriod)

        console.log(new DateTimeFormat("fr", DateTimeFormatOptions.create()
                .hour(numeric)
                .hourCycle(h12)
                .dayPeriod(long_)
                .timeZone("UTC")).format(date));
        // "4 du matin"
        // @end region = dayPeriod

    }
}
