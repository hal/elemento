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

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.jboss.gwt.elemento.core.Elements;

public final class Application {

    private static final String COMPLETED = "completed";
    private static final String SELECTED = "selected";

    public static void toggleAll(HTMLElement list, boolean checked) {

        for (HTMLElement li : Elements.children(list)) {
            if (checked) {
                li.classList.add(COMPLETED);
            } else {
                li.classList.remove(COMPLETED);
            }
            HTMLInputElement checkbox = (HTMLInputElement) li.firstElementChild.firstElementChild;
            checkbox.checked = checked;
        }
    }

    public static Set<String> getCompleted(HTMLElement list) {
        Set<String> ids = new HashSet<>();
        for (Iterator<HTMLElement> iterator = Elements.iterator(list); iterator.hasNext(); ) {
            HTMLElement li = iterator.next();
            if (li.classList.contains(COMPLETED)) {
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
                filterAll.classList.add(SELECTED);
                filterActive.classList.remove(SELECTED);
                filterCompleted.classList.remove(SELECTED);
                break;
            case ACTIVE:
                filterAll.classList.remove(SELECTED);
                filterActive.classList.add(SELECTED);
                filterCompleted.classList.remove(SELECTED);
                break;
            case COMPLETED:
                filterAll.classList.remove(SELECTED);
                filterActive.classList.remove(SELECTED);
                filterCompleted.classList.add(SELECTED);
                break;
            default:
                break;
        }
    }

    public static void update(Filter filter, HTMLElement list, HTMLElement main, HTMLElement footer,
            HTMLInputElement toggleAll, HTMLElement count, HTMLElement clearCompleted) {

        int activeCount = 0;
        int completedCount = 0;
        int size = (int) list.childElementCount;

        Elements.setVisible(main, size > 0);
        Elements.setVisible(footer, size > 0);
        for (HTMLElement li : Elements.children(list)) {
            if (li.classList.contains(COMPLETED)) {
                completedCount++;
                Elements.setVisible(li, filter != Filter.ACTIVE);
            } else {
                Elements.setVisible(li, filter != Filter.COMPLETED);
                activeCount++;
            }
        }
        toggleAll.checked = (size == completedCount);
        Elements.innerHtml(count, Messages.items(activeCount));
        Elements.setVisible(clearCompleted, completedCount != 0);
    }

    private Application() {
    }
}
