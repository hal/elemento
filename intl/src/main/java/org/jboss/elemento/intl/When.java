package org.jboss.elemento.intl;

public enum When {

    always("always"),
    auto("auto"),
    ;

    public final String value;

    When(String value) {
        this.value = value;
    }
}
