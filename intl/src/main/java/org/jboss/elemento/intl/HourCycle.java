package org.jboss.elemento.intl;

public enum HourCycle {

    h11("h11"),
    h12("h12"),
    h23("h23"),
    h24("h24"),
    ;

    public final String value;

    HourCycle(String value) {
        this.value = value;
    }
}
