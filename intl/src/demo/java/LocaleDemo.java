import org.jboss.elemento.intl.HourCycle;
import org.jboss.elemento.intl.Locale;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Calendar.gregory;
import static org.jboss.elemento.intl.LocaleOptions.localeOptions;

@SuppressWarnings("unused")
public class LocaleDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var korean = new Locale("ko", localeOptions()
                .script("Kore")
                .region("KR")
                .hourCycle(HourCycle.h23)
                .calendar(gregory));

        var japanese = new Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

        console.log(korean.baseName, japanese.baseName);
        // Expected output: "ko-Kore-KR" "ja-Jpan-JP"
        // @end region = generalUsage
    }
}
