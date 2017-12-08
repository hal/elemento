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
package org.jboss.gwt.elemento.processor.context;

public class AbstractPropertyInfo {

    private final String type;
    private final String field;
    private final String method;
    private final String modifier;

    public AbstractPropertyInfo(final String type, final String field, final String method, String modifier) {
        this.type = type;
        this.field = field;
        this.method = method;
        this.modifier = modifier == null ? "" : modifier + " ";
    }

    @Override
    public String toString() {
        return modifier + type + " " + method + "() { return this." + field + "; }";
    }

    public String getField() {
        return field;
    }

    public String getMethod() {
        return method;
    }

    public String getType() {
        return type;
    }

    public String getModifier() {
        return modifier;
    }
}
