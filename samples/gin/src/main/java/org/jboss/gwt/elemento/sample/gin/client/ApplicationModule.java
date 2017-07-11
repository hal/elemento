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

import com.google.gwt.inject.client.AbstractGinModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoConstants;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

public class ApplicationModule extends AbstractGinModule {

    @Override
    protected void configure() {
        bind(ApplicationElement.class).to(Templated_ApplicationElement.class).in(Singleton.class);
        bind(FooterElement.class).to(Templated_FooterElement.class).in(Singleton.class);
        bind(TodoItemElement.class).to(Templated_TodoItemElement.class);
    }

    @Provides
    I18n provideI18n(TodoConstants constants, TodoMessages messages) {
        return new I18n(constants, messages);
    }
}
