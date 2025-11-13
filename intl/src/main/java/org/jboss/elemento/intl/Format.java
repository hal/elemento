package org.jboss.elemento.intl;

public enum Format {

    _2digit("2-digit"),
    digital("digital"),
    full("full"),
    long_("long"),
    medium("medium"),
    narrow("narrow"),
    numeric("numeric"),
    short_("short"),
    ;

    public final String value;

    Format(String value) {
        this.value = value;
    }
}
