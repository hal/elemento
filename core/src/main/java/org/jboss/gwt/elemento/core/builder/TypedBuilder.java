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
package org.jboss.gwt.elemento.core.builder;

/** Base interface for all typed builders. */
public interface TypedBuilder<T, B extends TypedBuilder<T, B>> {

    /** Returns the builder {@link T} instance. */
    T get();

    /** In order to make builders work with inheritance, sub-builders must return a reference to their instance. */
    B that();
}
