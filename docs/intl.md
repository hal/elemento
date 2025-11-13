# Internationalization

Elemento supports most of the classes from the [
Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) JavaScript API.

In addition to the actual mappings, Elemento implements the builder pattern using enums to create the options easily and in a
type-safe manner. Here are some examples:

## Date and Time Formatting

```java
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
```

## Duration Formatting

```java
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

```

## List Formatting

```java
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
```

## Number Formatting

```java
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
```

## Relative Time Formatting

```java
var rtf1 = new RelativeTimeFormat("en", RelativeTimeFormatOptions.create()
        .style(short_));

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

var rtf2 = new RelativeTimeFormat("es", RelativeTimeFormatOptions.create()
        .numeric(auto));

console.log(rtf2.format(2, "day"));
// Expected output: "pasado mañana"
```

## Dependency

Add the following dependency to use `elemento-intl`:

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-intl</artifactId>
    <version>2.3.2</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.Intl`:

```xml

<module>
    <inherits name="org.jboss.elemento.Intl"/>
</module>
```
