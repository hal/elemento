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
package org.jboss.gwt.elemento.sample.gin.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.History;

import static elemental2.dom.DomGlobal.document;

public class Main implements EntryPoint {

    @Override
    public void onModuleLoad() {
        ApplicationElement application = ApplicationGinjector.INSTANCE.application();
        FooterElement footer = ApplicationGinjector.INSTANCE.footer();

        document.body.appendChild(application.element());
        document.body.appendChild(footer.element());

        History.addValueChangeHandler(event -> application.filter(event.getValue()));
        History.fireCurrentHistoryState();
    }
}
