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
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.Escape;

@SuppressWarnings({"unused", "StatementWithEmptyBody"})
public class KeyDemo {

    public void keyDemo() {
        // @start region = key
        body().on(keydown, e -> {
            if (Escape.match(e)) {
                // ...
            } else {
                // ...
            }
        });
        // @end region = key
    }
}
