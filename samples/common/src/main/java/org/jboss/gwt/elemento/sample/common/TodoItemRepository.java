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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Set;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.web.bindery.autobean.shared.AutoBean;
import com.google.web.bindery.autobean.shared.AutoBeanCodex;
import com.google.web.bindery.autobean.shared.AutoBeanUtils;
import elemental2.dom.DomGlobal;
import elemental2.webstorage.Storage;
import elemental2.webstorage.StorageEvent;
import elemental2.webstorage.WebStorageWindow;

public class TodoItemRepository {

    private static final String DEFAULT_KEY = "todos-elemento";

    private final String key;
    private final BeanFactory beanFactory;
    private final Storage storage;

    public TodoItemRepository(BeanFactory beanFactory) {
        this(DEFAULT_KEY, beanFactory);
    }

    public TodoItemRepository(String key, BeanFactory beanFactory) {
        this.key = key;
        this.beanFactory = beanFactory;
        this.storage = WebStorageWindow.of(DomGlobal.window).localStorage;
    }

    public TodoItem add(String text) {
        TodoItem item = beanFactory.todoItem().as();
        item.setId(UUID.uuid());
        item.setText(text);
        item.setCompleted(false);

        LinkedHashMap<String, TodoItem> items = load();
        items.put(item.getId(), item);
        save(items.values());

        return item;
    }

    public void completeAll(boolean completed) {
        for (TodoItem item : items()) {
            item.setCompleted(completed);
        }
        save(items());
    }

    public void complete(TodoItem item, boolean completed) {
        LinkedHashMap<String, TodoItem> items = load();
        TodoItem existingItem = items.get(item.getId());
        if (existingItem != null) {
            existingItem.setCompleted(completed);
            save(items.values());
        }
    }

    public void rename(TodoItem item, String text) {
        LinkedHashMap<String, TodoItem> items = load();
        TodoItem existingItem = items.get(item.getId());
        if (existingItem != null) {
            existingItem.setText(text);
            save(items.values());
        }
    }

    public Iterable<TodoItem> items() {
        return load().values();
    }

    public void remove(TodoItem item) {
        LinkedHashMap<String, TodoItem> items = load();
        items.remove(item.getId());
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
                JSONValue jsonValue = JSONParser.parseStrict(json);
                if (jsonValue != null) {
                    JSONArray jsonArray = jsonValue.isArray();
                    if (jsonArray != null) {
                        for (int i = 0; i < jsonArray.size(); i++) {
                            AutoBean<TodoItem> bean = AutoBeanCodex.decode(beanFactory, TodoItem.class,
                                    jsonArray.get(i).toString());
                            TodoItem todoItem = bean.as();
                            items.put(todoItem.getId(), todoItem);
                        }
                    }
                }
            }
        }
        return items;
    }

    private void save(Iterable<TodoItem> items) {
        if (storage != null) {
            StringBuilder json = new StringBuilder("[");
            for (Iterator<TodoItem> iterator = items.iterator(); iterator.hasNext(); ) {
                TodoItem item = iterator.next();
                AutoBean<TodoItem> bean = AutoBeanUtils.getAutoBean(item);
                json.append(AutoBeanCodex.encode(bean).getPayload());
                if (iterator.hasNext()) {
                    json.append(",");
                }
            }
            json.append("]");
            storage.setItem(key, json.toString());
        }
    }
}
