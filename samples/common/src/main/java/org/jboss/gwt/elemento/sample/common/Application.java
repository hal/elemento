package org.jboss.gwt.elemento.sample.common;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.jboss.gwt.elemento.core.Elements;

/**
 * @author Harald Pehl
 */
public final class Application {

    public static void toggleAll(HTMLElement list, boolean checked) {
        for (HTMLElement li : Elements.children(list)) {
            if (checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
            HTMLInputElement checkbox = (HTMLInputElement) li.firstElementChild.firstElementChild;
            checkbox.checked = checked;
        }
    }

    public static Set<String> getCompleted(HTMLElement list) {
        Set<String> ids = new HashSet<>();
        for (Iterator<HTMLElement> iterator = Elements.iterator(list); iterator.hasNext(); ) {
            HTMLElement li = iterator.next();
            if (li.classList.contains("completed")) {
                String id = String.valueOf(li.dataset.get("item"));
                if (id != null) {
                    ids.add(id);
                }
                iterator.remove();
            }
        }
        return ids;
    }

    public static void filter(Filter filter, HTMLElement filterAll, HTMLElement filterActive,
            HTMLElement filterCompleted) {
        switch (filter) {
            case ALL:
                filterAll.classList.add("selected");
                filterActive.classList.remove("selected");
                filterCompleted.classList.remove("selected");
                break;
            case ACTIVE:
                filterAll.classList.remove("selected");
                filterActive.classList.add("selected");
                filterCompleted.classList.remove("selected");
                break;
            case COMPLETED:
                filterAll.classList.remove("selected");
                filterActive.classList.remove("selected");
                filterCompleted.classList.add("selected");
                break;
        }
    }

    public static void update(Filter filter, I18n i18n, HTMLElement list, HTMLElement main, HTMLElement footer,
            HTMLInputElement toggleAll, HTMLElement count, HTMLElement clearCompleted) {

        int activeCount = 0;
        int completedCount = 0;
        int size = (int) list.childElementCount;

        Elements.setVisible(main, size > 0);
        Elements.setVisible(footer, size > 0);
        for (HTMLElement li : Elements.children(list)) {
            if (li.classList.contains("completed")) {
                completedCount++;
                Elements.setVisible(li, filter != Filter.ACTIVE);
            } else {
                Elements.setVisible(li, filter != Filter.COMPLETED);
                activeCount++;
            }
        }
        toggleAll.checked = (size == completedCount);
        Elements.innerHtml(count, i18n.messages().items(activeCount));
        Elements.setVisible(clearCompleted, completedCount != 0);
    }

    private Application() {}
}
