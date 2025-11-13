package org.jboss.elemento.intl;

public enum Category {

    calendar("calendar"),
    collation("collation"),
    currency("currency"),
    numberingSystem("numberingSystem"),
    timezone("timezone"),
    unit("unit"),
    ;

    public final String value;

    Category(String value) {
        this.value = value;
    }
}
