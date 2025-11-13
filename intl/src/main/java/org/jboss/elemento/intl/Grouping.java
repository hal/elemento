package org.jboss.elemento.intl;

public enum Grouping {

    conjunction("conjunction"),
    disjunction("disjunction"),
    unit("unit"),
    ;

    public final String value;

    Grouping(String value) {
        this.value = value;
    }
}
