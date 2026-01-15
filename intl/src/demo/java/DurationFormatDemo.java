import org.jboss.elemento.intl.Duration;

import static org.jboss.elemento.intl.Duration.duration;
import static org.jboss.elemento.intl.DurationFormat.durationFormat;
import static org.jboss.elemento.intl.DurationFormatOptions.durationFormatOptions;
import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.short_;

@SuppressWarnings("unused")
public class DurationFormatDemo {

    public void generalUsage() {
        // @start region = generalUsage
        var duration = duration()
                .hours(1)
                .minutes(46)
                .seconds(40);

        // With style set to "long" and locale "fr-FR"
        durationFormat("fr-FR", durationFormatOptions().style(long_)).format(duration);
        // "1 heure, 46 minutes et 40 secondes"

        // With style set to "short" and locale "en"
        durationFormat("en", durationFormatOptions().style(short_)).format(duration);
        // "1 hr, 46 min and 40 sec"

        // With style set to "narrow" and locale "pt"
        durationFormat("pt", durationFormatOptions().style(narrow)).format(duration);
        // "1 h 46 min 40 s"
        // @end region = generalUsage
    }
}
