import org.jboss.elemento.intl.NumberFormat;
import org.jboss.elemento.intl.NumberFormatOptions;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.currency;

@SuppressWarnings("unused")
public class NumberFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        double number = 123456.789;

        console.log(new NumberFormat("de-DE", NumberFormatOptions.create()
                .style(currency)
                .currency("EUR"))
                .format(number));
        // Expected output: "123.456,79 €"

        // The Japanese yen doesn't use a minor unit
        console.log(new NumberFormat("ja-JP", NumberFormatOptions.create()
                .style(currency)
                .currency("JPY"))
                .format(number));
        // Expected output: "￥123,457"

        // Limit to three significant digits
        console.log(new NumberFormat("en-IN", NumberFormatOptions.create()
                .maximumSignificantDigits(3))
                .format(number));
        // Expected output: "1,23,000"
        // @end region = generalUsage
    }
}
