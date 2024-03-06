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

import elemental2.dom.HTMLElement;
import org.jboss.elemento.By;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.PlaceManager;
import org.jboss.elemento.router.Route;

import java.util.Collections;

import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;

@SuppressWarnings("unused")
public class PlaceManagerDemo {

    // @start region = placeManager
    @Route("/home")
    public static class HomePage implements Page {

        @Override
        public Iterable<HTMLElement> elements() {
            return Collections.singletonList(div()
                    .add(h(1, "Welcome"))
                    .add(p().textContent("Hello world!"))
                    .element());
        }
    }

    public static class Application {

        public void entryPoint() {
            body().add(div().id("main"));
            new PlaceManager()
                    .root(By.id("main"))
                    .register(new Place("/home"), HomePage::new)
                    // could also be registered with
                    // .register(RoutesImpl.INSTANCE.places())
                    .start();
        }
    }
    // @end region = placeManager
}
