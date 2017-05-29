package org.jboss.gwt.elemento.core;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

import elemental2.dom.DOMTokenList;

import static java.util.stream.Collectors.joining;

/**
 * @author Harald Pehl
 */
class JreDOMTokenList extends DOMTokenList {

    final Set<String> store = new LinkedHashSet<>();

    @Override
    public void add(String... tokens) { store.addAll(Arrays.asList(tokens)); }

    @Override
    public boolean contains(String token) { return store.contains(token); }

    @Override
    public String item(double index) { throw new UnsupportedOperationException(); }

    @Override
    public void remove(String... tokens) { store.removeAll(Arrays.asList(tokens)); }

    @Override
    public boolean toggle(String token, boolean force) {
        boolean contains = contains(token);
        if (force) { add(token); } else { remove(token); }
        return contains;
    }

    @Override
    public boolean toggle(String token) {
        boolean contains = contains(token);
        if (!contains) { add(token); } else { remove(token); }
        return contains;
    }

    @Override
    public int getLength() { return store.size(); }

    @Override
    public void setLength(int length) { }

    @Override
    public String getAt(int index) { return item(index); }

    @Override
    public void setAt(int index, String value) { throw new UnsupportedOperationException(); }

    @Override
    public String[] asArray() { return store.toArray(new String[0]); }

    @Override
    public String toString() { return store.stream().collect(joining(" ")); }
}
