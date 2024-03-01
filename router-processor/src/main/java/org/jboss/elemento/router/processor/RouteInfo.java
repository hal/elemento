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
package org.jboss.elemento.router.processor;

@SuppressWarnings("unused")
public class RouteInfo {

    private final String route;
    private final String title;
    private final String selector;
    private final String pageClass;

    public RouteInfo(String route, String title, String selector, String pageClass) {
        this.route = route;
        this.title = title;
        this.selector = selector;
        this.pageClass = pageClass;
    }

    public String getRoute() {
        return route;
    }

    public String getTitle() {
        return title;
    }

    public String getSelector() {
        return selector;
    }

    public String getPageClass() {
        return pageClass;
    }
}
