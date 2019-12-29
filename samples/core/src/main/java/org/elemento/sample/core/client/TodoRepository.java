/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento.sample.core.client;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Set;

import elemental2.core.Global;
import elemental2.core.JsArray;
import elemental2.webstorage.Storage;
import elemental2.webstorage.StorageEvent;
import elemental2.webstorage.WebStorageWindow;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;

public class TodoRepository {

    private static final String DEFAULT_KEY = "todos-elemento";
    private static final char[] CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".toCharArray();

    private static String uuid() {
        char[] uuid = new char[36];
        int r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (int i = 0; i < 36; i++) {
            if (uuid[i] == 0) {
                r = (int) (Math.random() * 16);
                uuid[i] = CHARS[(i == 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return new String(uuid);
    }

    private final String key;
    private final Storage storage;

    public TodoRepository() {
        this(DEFAULT_KEY);
    }

    public TodoRepository(String key) {
        this.key = key;
        this.storage = WebStorageWindow.of(window).localStorage;
    }

    public Todo add(String text) {
        Todo item = new Todo();
        item.id = uuid();
        item.text = text;
        item.completed = false;

        LinkedHashMap<String, Todo> items = load();
        items.put(item.id, item);
        save(items.values());

        return item;
    }

    public void completeAll(boolean completed) {
        for (Todo item : items()) {
            item.completed = completed;
        }
        save(items());
    }

    public void complete(Todo item, boolean completed) {
        LinkedHashMap<String, Todo> items = load();
        Todo existingItem = items.get(item.id);
        if (existingItem != null) {
            existingItem.completed = completed;
            save(items.values());
        }
    }

    public void rename(Todo item, String text) {
        LinkedHashMap<String, Todo> items = load();
        Todo existingItem = items.get(item.id);
        if (existingItem != null) {
            existingItem.text = text;
            save(items.values());
        }
    }

    public Collection<Todo> items() {
        return load().values();
    }

    public void remove(Todo item) {
        LinkedHashMap<String, Todo> items = load();
        items.remove(item.id);
        save(items.values());
    }

    public void removeAll(Set<String> ids) {
        LinkedHashMap<String, Todo> items = load();
        for (String id : ids) {
            items.remove(id);
        }
        save(items.values());
    }

    public void onExternalModification(ModificationCallback callback) {
        if (storage != null) {
            WebStorageWindow.of(window).addEventListener("storage", event -> {
                StorageEvent storageEvent = (StorageEvent) event;
                if (key.equals(storageEvent.key)) {
                    setTimeout(args -> callback.execute(), 333);
                }
            }, false);
        }
    }

    private LinkedHashMap<String, Todo> load() {
        LinkedHashMap<String, Todo> items = new LinkedHashMap<>();
        if (storage != null) {
            String json = storage.getItem(key);
            if (json != null) {
                try {
                    JsArray<Todo> jsonArray = Js.cast(Global.JSON.parse(json));
                    if (jsonArray != null) {
                        for (int i = 0; i < jsonArray.length; i++) {
                            Todo todo = jsonArray.getAt(i);
                            items.put(todo.id, todo);
                        }
                    }
                } catch (Exception parseError) {
                    console.error("error parsing stored data", parseError);
                    console.log("discarding stored data", json);
                }
            }
        }
        return items;
    }

    private void save(Collection<Todo> items) {
        if (storage != null) {
            Todo[] todos = items.toArray(new Todo[0]);
            storage.setItem(key, Global.JSON.stringify(todos));
        }
    }

    @FunctionalInterface
    public interface ModificationCallback {

        void execute();
    }
}
