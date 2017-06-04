package org.jboss.gwt.elemento.core;

import elemental2.dom.KeyboardEvent;

/**
 * Key values according to <a href="https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values">https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values</a>.
 */
public enum Keys {

    Unidentified(""),
    Alt("Alt"),
    AltGraph("AltGraph"),

    ;

    private final String key;
    private final String[] alternatives;


    Keys(final String key) {
        this(key, null);
    }

    Keys(final String key, final String[] alternatives) {
        this.key = key;
        this.alternatives = alternatives;
    }

    public boolean match(KeyboardEvent event) {
        if (event.key.equals(key)) {
            return true;
        }
        if (alternatives != null) {
            for (String alternative : alternatives) {
                if (event.key.equals(alternative)) {
                    return true;
                }
            }
        }
        return false;
    }
}
