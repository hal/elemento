/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
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
package org.elemento.sample.gwt.client;

import com.google.gwt.core.client.EntryPoint;

import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static org.elemento.Elements.body;
import static org.elemento.EventType.bind;
import static org.elemento.EventType.hashchange;

public class Main implements EntryPoint {

    @Override
    public void onModuleLoad() {
        ApplicationElement application = new ApplicationElement(new TodoRepository());

        body().add(application).add(new FooterElement());
        bind(window, hashchange, event -> application.filter(location.hash));
        application.filter(location.hash);
    }
}
