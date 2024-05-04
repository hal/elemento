/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.router;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.function.Supplier;

import static org.jboss.elemento.router.Path.normalize;

public class Places implements Iterable<Map.Entry<Place, Supplier<Page>>> {

    // ------------------------------------------------------ factory

    public static Places places() {
        return new Places();
    }

    // ------------------------------------------------------ instance

    final Map<Place, Supplier<Page>> pages;

    Places() {
        pages = new HashMap<>();
    }

    @Override
    public Iterator<Map.Entry<Place, Supplier<Page>>> iterator() {
        return pages.entrySet().iterator();
    }

    // ------------------------------------------------------ builder

    public Places add(Place place, Supplier<Page> page) {
        pages.put(place, page);
        return this;
    }

    public Places add(Places places) {
        pages.putAll(places.pages);
        return this;
    }

    public Places children(String path, Places places) {
        for (Map.Entry<Place, Supplier<Page>> entry : places.pages.entrySet()) {
            Place child = new Place(failSafeRoute(path, entry.getKey()), entry.getKey());
            pages.put(child, entry.getValue());
        }
        return this;
    }

    public Places loader(Place place, Loader<?> loader) {
        if (pages.containsKey(place)) {
            for (Place p : pages.keySet()) {
                if (p.equals(place)) {
                    p.loader(loader);
                    break;
                }
            }
        }
        return this;
    }

    // ------------------------------------------------------ internal

    private String failSafeRoute(String parent, Place child) {
        return normalize(normalize(parent) + child.route);
    }
}
