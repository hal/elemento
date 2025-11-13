package org.jboss.elemento.intl;

public enum Unit {
    year("year"),
    quarter("quarter"),
    month("month"),
    week("week"),
    day("day"),
    hour("hour"),
    minute("minute"),
    second("second"),
    millisecond("millisecond"),
    ;

    public final String value;

    Unit(String value) {
        this.value = value;
    }
}
