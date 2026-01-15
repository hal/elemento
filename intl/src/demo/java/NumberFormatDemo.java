import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.currency;
import static org.jboss.elemento.intl.NumberFormat.numberFormat;
import static org.jboss.elemento.intl.NumberFormatOptions.numberFormatOptions;

@SuppressWarnings("unused")
public class NumberFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        double number = 123456.789;

        console.log(numberFormat("de-DE", numberFormatOptions()
                .style(currency)
                .currency("EUR"))
                .format(number));
        // Expected output: "123.456,79 €"

        // The Japanese yen doesn't use a minor unit
        console.log(numberFormat("ja-JP", numberFormatOptions()
                .style(currency)
                .currency("JPY"))
                .format(number));
        // Expected output: "￥123,457"

        // Limit to three significant digits
        console.log(numberFormat("en-IN", numberFormatOptions()
                .maximumSignificantDigits(3))
                .format(number));
        // Expected output: "1,23,000"
        // @end region = generalUsage
    }
}
