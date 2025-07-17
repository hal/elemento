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

import org.jboss.elemento.By;

import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;

@SuppressWarnings("unused")
public class ByDemo {

    public void groupDemo() {
        // @start region = group
        // #main [data-list-item=foo] a[href^="https://"] > .fas.fa-check, .external[hidden]
        By.group(
                By.id("main")
                        .desc(By.data("listItem", "foo")
                                .desc(By.element("a").and(By.attribute("href", STARTS_WITH, "https://"))
                                        .child(By.classnames("fas", "fa-check")))),
                By.classname("external").and(By.attribute("hidden")));
        // @end region = group
    }

    public void andDemo() {
        // @start region = and
        // button.primary
        By.element("button").and(By.classname("primary"));

        // input[type=checkbox]
        By.element("input").and(By.attribute("type", "checkbox"));
        // @end region = and
    }
}
