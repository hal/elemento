/*
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
package org.jboss.gwt.elemento.sample.common;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Set;

import elemental2.core.Global;
import elemental2.core.JsArray;
import elemental2.dom.DomGlobal;
import elemental2.webstorage.Storage;
import elemental2.webstorage.StorageEvent;
import elemental2.webstorage.WebStorageWindow;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;

public class TodoItemRepository {

    private static final String DEFAULT_KEY = "todos-elemento";

    private final String key;
    private final Storage storage;

    public TodoItemRepository() {
        this(DEFAULT_KEY);
    }

    public TodoItemRepository(String key) {
        this.key = key;
        this.storage = WebStorageWindow.of(window).localStorage;
    }

    public TodoItem add(String text) {
        TodoItem item = new TodoItem();
        item.id = UUID.uuid();
        item.text = text;
        item.completed = false;

        LinkedHashMap<String, TodoItem> items = load();
        items.put(item.id, item);
        save(items.values());

        return item;
    }

    public void completeAll(boolean completed) {
        for (TodoItem item : items()) {
            item.completed = completed;
        }
        save(items());
    }

    public void complete(TodoItem item, boolean completed) {
        LinkedHashMap<String, TodoItem> items = load();
        TodoItem existingItem = items.get(item.id);
        if (existingItem != null) {
            existingItem.completed = completed;
            save(items.values());
        }
    }

    public void rename(TodoItem item, String text) {
        LinkedHashMap<String, TodoItem> items = load();
        TodoItem existingItem = items.get(item.id);
        if (existingItem != null) {
            existingItem.text = text;
            save(items.values());
        }
    }

    public Collection<TodoItem> items() {
        return load().values();
    }

    public void remove(TodoItem item) {
        LinkedHashMap<String, TodoItem> items = load();
        items.remove(item.id);
        save(items.values());
    }

    public void removeAll(Set<String> ids) {
        LinkedHashMap<String, TodoItem> items = load();
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
                    setTimeout(args -> callback.execute(), 333, null);
                }
            }, false);
        }
    }

    private LinkedHashMap<String, TodoItem> load() {
        LinkedHashMap<String, TodoItem> items = new LinkedHashMap<>();
        if (storage != null) {
            String json = storage.getItem(key);
            if (json != null) {
                try {
                    JsArray<TodoItem> jsonArray = Js.cast(Global.JSON.parse(json));
                    if (jsonArray != null) {
                        for (int i = 0; i < jsonArray.length; i++) {
                            TodoItem todoItem = jsonArray.getAt(i);
                            items.put(todoItem.id, todoItem);
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

    private void save(Collection<TodoItem> items) {
        if (storage != null) {
            TodoItem[] todoItems = items.toArray(new TodoItem[0]);
            storage.setItem(key, Global.JSON.stringify(todoItems));
        }
    }


    @FunctionalInterface
    public interface ModificationCallback {

        void execute();
    }
}
