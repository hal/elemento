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

import static org.jboss.elemento.svg.SVG.circle;
import static org.jboss.elemento.svg.SVG.svg;

@SuppressWarnings("unused")
public class SVGDemo {

    public void svgDemo() {
        // @start region = svg
        svg().css("spinner", "large")
                .aria("label", "Loading...")
                .attr("role", "progressbar")
                .attr("viewBox", "0 0 100 100")
                .add(circle().css("spinner", "path")
                        .attr("cx", 50)
                        .attr("cy", 50)
                        .attr("r", 45)
                        .attr("fill", "none"));
        // @end region = svg
    }
}
