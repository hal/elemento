package org.jboss.gwt.elemento.sample.builder.client;

import org.jboss.gwt.elemento.core.Elements;

/**
 * Sample for a custom builder with its own (convenient) methods.
 */
public class TodoBuilder extends Elements.CoreBuilder<TodoBuilder> {

    @Override
    protected TodoBuilder that() {
        return this;
    }

    /**
     * Creates a {@code <li>} element with an anchor tag {@code <a>} to filter the todos.
     *
     * @param fragment   the fragment used in the link
     * @param text       the text for the link
     * @param rememberAs name for the anchor element reference
     *
     * @return an anchor element which needs to be closed
     */
    public TodoBuilder filter(String fragment, String text, String rememberAs) {
        return li().a().attr("href", fragment).innerText(text).rememberAs(rememberAs).end().end();
    }
}
