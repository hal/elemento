/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.sample.common;

import elemental2.core.Array;
import elemental2.core.Global;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Set;

import com.google.gwt.core.client.Scheduler;
import elemental2.dom.DomGlobal;
import elemental2.webstorage.Storage;
import elemental2.webstorage.StorageEvent;
import elemental2.webstorage.WebStorageWindow;
import jsinterop.base.Js;

public class TodoItemRepository {

    private static final String DEFAULT_KEY = "todos-elemento";

    private final String key;
    private final Storage storage;

    public TodoItemRepository() {
        this(DEFAULT_KEY);
    }

    public TodoItemRepository(String key) {
        this.key = key;
        this.storage = WebStorageWindow.of(DomGlobal.window).localStorage;
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

    public void onExternalModification(Scheduler.ScheduledCommand command) {
        if (storage != null) {
            WebStorageWindow.of(DomGlobal.window).addEventListener("storage", event -> {
                StorageEvent storageEvent = (StorageEvent) event;
                if (key.equals(storageEvent.key)) {
                    Scheduler.get().scheduleDeferred(command);
                }
            }, false);
        }
    }

    private LinkedHashMap<String, TodoItem> load() {
        LinkedHashMap<String, TodoItem> items = new LinkedHashMap<>();
        if (storage != null) {
            String json = storage.getItem(key);
            if (json != null) {
                Array<TodoItem> jsonArray = Js.cast(Global.JSON.parse(json));
                if (jsonArray != null) {
                    for (int i = 0; i < jsonArray.length; i++) {
                        TodoItem todoItem = jsonArray.getAt(i);
                        items.put(todoItem.id, todoItem);
                    }
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
}
