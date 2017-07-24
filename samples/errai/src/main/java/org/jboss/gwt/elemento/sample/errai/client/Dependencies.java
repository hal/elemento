package org.jboss.gwt.elemento.sample.errai.client;

import javax.enterprise.inject.Produces;
import javax.inject.Singleton;

import com.google.gwt.core.client.GWT;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoConstants;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

@Singleton
public class Dependencies {

    private static final TodoConstants CONSTANTS = GWT.create(TodoConstants.class);
    private static final TodoMessages MESSAGES = GWT.create(TodoMessages.class);

    @Produces
    public I18n i18n() {
        return new I18n(CONSTANTS, MESSAGES);
    }

    @Produces
    public TodoItemRepository repository() {
        return new TodoItemRepository();
    }
}
