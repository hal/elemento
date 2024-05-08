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

/**
 * The LoaderData class represents data loaded by a loader. It can be used to retrieve loaded data.
 */
public class LoadedData {

    public static final LoadedData NONE = new LoadedData(null);

    private final Object data;

    LoadedData(Object data) {
        this.data = data;
    }

    public boolean isEmpty() {
        return data != null;
    }

    @SuppressWarnings("unchecked")
    public <T> T get() {
        return (T) data;
    }

    @SuppressWarnings("unchecked")
    public <T> T getOrDefault(T defaultValue) {
        if (data == null) {
            return defaultValue;
        }
        return (T) data;
    }
}
