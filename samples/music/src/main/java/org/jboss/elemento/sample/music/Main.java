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
package org.jboss.elemento.sample.music;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.logger.Logger;
import org.jboss.elemento.router.AnnotatedPlaces;
import org.jboss.elemento.router.PlaceManager;
import org.kie.j2cl.tools.processors.annotations.GWT3EntryPoint;

import static elemental2.dom.DomGlobal.location;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.sample.music.Environment.env;

@SuppressWarnings("ConfusingMainMethod")
public class Main {

    private static final String MAIN_ID = "main";

    @GWT3EntryPoint
    public void main() {
        Logger.initFrom(location);
        PlaceManager placeManager = new PlaceManager()
                .base(env().base())
                .root(By.id(MAIN_ID))
                .title(title -> "Elemento Music Sample • " + title)
                .register(new AnnotatedPlaces());
        body().add(Elements.main().id(MAIN_ID).css("container"));
        placeManager.start();
    }
}
