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
package org.jboss.elemento.sample.crysknife;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.gwtproject.core.client.EntryPoint;
import org.treblereel.gwt.crysknife.client.Application;
import org.treblereel.gwt.crysknife.client.ComponentScan;

import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.hashchange;

@Application
@ComponentScan("org.jboss.elemento.sample.crysknife")
public class Main implements EntryPoint {

    @Inject TodoRepository repository;
    @Inject ApplicationElement application;
    @Inject FooterElement footer;

    @Override
    public void onModuleLoad() {
        new MainBootstrap(this).initialize();
    }

    @PostConstruct
    void init() {
        body().add(application).add(footer);
        bind(window, hashchange, event -> application.filter(window.location.hash));
        application.filter(window.location.hash);
    }
}
