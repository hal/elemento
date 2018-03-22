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
package org.jboss.gwt.elemento.sample.dagger.client;

import javax.inject.Singleton;

import com.google.gwt.core.client.GWT;
import dagger.Module;
import dagger.Provides;
import org.jboss.gwt.elemento.sample.common.Constants;
import org.jboss.gwt.elemento.sample.common.Messages;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

@Module
public class ApplicationModule {

    @Provides
    @Singleton
    ApplicationElement provideApplicationElement(Templated_ApplicationElement impl) {
        return impl;
    }

    @Provides
    @Singleton
    FooterElement provideFooterElement(Templated_FooterElement impl) {
        return impl;
    }

    @Provides
    TodoItemElement provideTodoItemElement(Templated_TodoItemElement impl) {
        return impl;
    }

    @Provides
    @Singleton
    TodoItemRepository provideTodoItemRepository() {
        return new TodoItemRepository();
    }
}
