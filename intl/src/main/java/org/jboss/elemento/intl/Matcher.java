package org.jboss.elemento.intl;

public enum Matcher {

    basic("basic"),
    bestFit("best fit"),
    lookup("lookup"),
    ;

    public final String value;

    Matcher(String value) {
        this.value = value;
    }
}
