package org.jboss.gwt.elemento.sample.errai.client;

import javax.enterprise.inject.Produces;
import javax.inject.Singleton;

import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

@Singleton
public class Dependencies {

    @Produces
    public TodoItemRepository repository() {
        return new TodoItemRepository();
    }
}
