import org.jboss.elemento.intl.Duration;
import org.jboss.elemento.intl.DurationFormat;
import org.jboss.elemento.intl.DurationFormatOptions;

import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.short_;

@SuppressWarnings("unused")
public class DurationFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var duration = Duration.create()
                .hours(1)
                .minutes(46)
                .seconds(40);

        // With style set to "long" and locale "fr-FR"
        new DurationFormat("fr-FR", DurationFormatOptions.create().style(long_)).format(duration);
        // "1 heure, 46 minutes et 40 secondes"

        // With style set to "short" and locale "en"
        new DurationFormat("en", DurationFormatOptions.create().style(short_)).format(duration);
        // "1 hr, 46 min and 40 sec"

        // With style set to "narrow" and locale "pt"
        new DurationFormat("pt", DurationFormatOptions.create().style(narrow)).format(duration);
        // "1 h 46 min 40 s"
        // @end region = generalUsage
    }
}
