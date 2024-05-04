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
package org.jboss.elemento.logger;

import java.util.HashMap;
import java.util.Map;

class LevelOverrides {

    final Map<String, Level> levels;

    LevelOverrides() {
        levels = new HashMap<>() {};
    }

    void addLevel(String category, Level level) {
        levels.put(category, level);
    }

    void removeLevel(String category) {
        levels.remove(category);
    }

    Level overriddenLevel(String category) {
        int length = 0;
        Level level = null;
        for (Map.Entry<String, Level> entry : levels.entrySet()) {
            String parent = entry.getKey();
            if (Category.isSubcategory(parent, category)) {
                if (parent.length() > length) {
                    level = entry.getValue();
                    length = parent.length();
                }
            }
        }
        return level;
    }
}
