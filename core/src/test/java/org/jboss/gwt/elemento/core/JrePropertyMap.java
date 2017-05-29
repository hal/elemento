package org.jboss.gwt.elemento.core;

import java.util.HashMap;
import java.util.Map;

import jsinterop.base.JsForEachCallbackFn;
import jsinterop.base.JsPropertyMap;

/**
 * @author Harald Pehl
 */
class JrePropertyMap<T> implements JsPropertyMap<T> {

    final Map<String, T> store = new HashMap<>();

    @Override
    public T get(String propertyName) { return store.get(propertyName); }

    @Override
    public boolean has(String propertyName) { return store.containsKey(propertyName); }

    @Override
    public void delete(String propertyName) { store.remove(propertyName); }

    @Override
    public void set(String propertyName, T value) { store.put(propertyName, value); }

    @Override
    public void forEach(JsForEachCallbackFn cb) { store.forEach((k, v) -> cb.onKey(k)); }
}
