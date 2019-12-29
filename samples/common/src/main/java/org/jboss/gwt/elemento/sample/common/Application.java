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
import org.elemento.By;

import static org.elemento.Elements.*;

public final class Application {

    private static final String completed = "completed";
    private static final String selected = "selected";

    public static void toggleAll(HTMLElement list, boolean checked) {
        for (HTMLElement li : children(list)) {
            toggle(li, completed, checked);
            HTMLInputElement checkbox = find(li, By.classname("input").and(By.attribute("type", "checkbox")));
            if (checkbox != null) {
                checkbox.checked = checked;
            }
        }
    }

    public static Set<String> getCompleted(HTMLElement list) {
        Set<String> ids = new HashSet<>();
        for (Iterator<HTMLElement> iterator = iterator(list); iterator.hasNext(); ) {
            HTMLElement li = iterator.next();
            if (li.classList.contains(completed)) {
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
                filterAll.classList.add(selected);
                filterActive.classList.remove(selected);
                filterCompleted.classList.remove(selected);
                break;
            case ACTIVE:
                filterAll.classList.remove(selected);
                filterActive.classList.add(selected);
                filterCompleted.classList.remove(selected);
                break;
            case COMPLETED:
                filterAll.classList.remove(selected);
                filterActive.classList.remove(selected);
                filterCompleted.classList.add(selected);
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

        setVisible(main, size > 0);
        setVisible(footer, size > 0);
        for (HTMLElement li : children(list)) {
            if (li.classList.contains(completed)) {
                completedCount++;
                setVisible(li, filter != Filter.ACTIVE);
            } else {
                setVisible(li, filter != Filter.COMPLETED);
                activeCount++;
            }
        }
        toggleAll.checked = (size == completedCount);
        innerHtml(count, Messages.items(activeCount));
        setVisible(clearCompleted, completedCount != 0);
    }

    private Application() {
    }
}
