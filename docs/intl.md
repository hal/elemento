# Internationalization

Elemento supports most of the classes from the [
Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) JavaScript API.

In addition to the actual mappings, Elemento introduces enums, implements the builder pattern, and a fluent
API to create the options in a type-safe manner. Here are some examples (most of them following the MDN
examples):

## Date and Time Formatting

```java
import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.DateTimeFormat.dateTimeFormat;
import static org.jboss.elemento.intl.DateTimeFormatOptions.dateTimeFormatOptions;
import static org.jboss.elemento.intl.Format.full;

var date = new JsDate(2020, 11, 20, 3, 23, 16, 738);

// Specify default date formatting for language (locale)
console.log(dateTimeFormat("en-US").format(new JsDate()));
// Expected output: "12/20/2020"

// Specify a date and time format using "style" options (i.e. full, long, medium, short)
console.log(dateTimeFormat("en-GB", dateTimeFormatOptions()
        .dateStyle(full)
        .timeStyle(full)
        .timeZone("Australia/Sydney")).format(date));
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Duration Formatting

```java
import static org.jboss.elemento.intl.DurationFormat.durationFormat;
import static org.jboss.elemento.intl.DurationFormatOptions.durationFormatOptions;
import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.short_;

var duration = Duration.duration()
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
```

## List Formatting

```java
import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.long_;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.short_;
import static org.jboss.elemento.intl.Grouping.conjunction;
import static org.jboss.elemento.intl.Grouping.disjunction;
import static org.jboss.elemento.intl.Grouping.unit;
import static org.jboss.elemento.intl.ListFormat.listFormat;
import static org.jboss.elemento.intl.ListFormatOptions.listFormatOptions;

var vehicles = JsArray.of("Motorcycle", "Bus", "Car");

var formatter = listFormat("en", listFormatOptions()
        .style(long_)
        .type(conjunction));
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

var formatter2 = listFormat("de", listFormatOptions()
        .style(short_)
        .type(disjunction));
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

var formatter3 = listFormat("en", listFormatOptions()
        .style(narrow)
        .type(unit));
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Number Formatting

```java
import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.currency;
import static org.jboss.elemento.intl.NumberFormat.numberFormat;
import static org.jboss.elemento.intl.NumberFormatOptions.numberFormatOptions;

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
```

## Relative Time Formatting

```java
import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.intl.Format.short_;
import static org.jboss.elemento.intl.RelativeTimeFormat.relativeTimeFormat;
import static org.jboss.elemento.intl.RelativeTimeFormatOptions.relativeTimeFormatOptions;
import static org.jboss.elemento.intl.When.auto;

var rtf1 = relativeTimeFormat("en", relativeTimeFormatOptions().style(short_));

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

var rtf2 = relativeTimeFormat("es", relativeTimeFormatOptions().numeric(auto));

console.log(rtf2.format(2, "day"));
// Expected output: "pasado mañana"
```

## Dependency

Add the following dependency to use `elemento-intl`:

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-intl</artifactId>
    <version>2.4.4</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.Intl`:

```xml

<module>
    <inherits name="org.jboss.elemento.Intl"/>
</module>
```
