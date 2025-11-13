package org.jboss.elemento.intl;

public enum TimeZoneName {

    long_("long"),
    longGeneric("longGeneric"),
    longOffset("longOffset"),
    short_("short"),
    shortGeneric("shortGeneric"),
    shortOffset("shortOffset"),
    ;

    public final String value;

    TimeZoneName(String value) {
        this.value = value;
    }
}
