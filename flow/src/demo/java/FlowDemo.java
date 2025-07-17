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

import java.util.List;
import java.util.Random;

import org.jboss.elemento.flow.Flow;
import org.jboss.elemento.flow.FlowContext;
import org.jboss.elemento.flow.Task;

import elemental2.dom.Response;
import elemental2.promise.Promise;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.fetch;
import static elemental2.dom.DomGlobal.setTimeout;

public class FlowDemo {

    public void parallelDemo() {
        // @start region = parallel
        // datetime format is "2022-03-31T11:03:39.348365+02:00"
        Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
                .then(Response::json)
                .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
                .then(context::resolve);
        double ms = 500 + new Random().nextInt(2000);
        Task<FlowContext> delay = context -> new Promise<>((res, __) -> setTimeout(___ -> res.onInvoke(context), ms));

        // execute the two tasks in parallel
        Flow.parallel(new FlowContext(), List.of(currentTime, delay))
                .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
        // @end region = parallel
    }

    public void sequentialDemo() {
        // @start region = sequential
        // datetime format is "2022-03-31T11:03:39.348365+02:00"
        Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
                .then(Response::json)
                .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
                .then(context::resolve);
        double ms = 500 + new Random().nextInt(2_000);
        Task<FlowContext> delay = context -> new Promise<>((res, __) -> setTimeout(___ -> res.onInvoke(context), ms));

        // execute the two tasks in sequence and cancel after 1_000 ms
        Flow.parallel(new FlowContext(), List.of(currentTime, delay))
                .timeout(1_000)
                .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
        // @end region = sequential
    }

    public void repeatDemo() {
        // @start region = repeat
        Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
                .then(Response::json)
                .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
                .then(context::resolve);

        // fetch the current time until the milliseconds end with "0" and cancel after 5 iterations
        Flow.repeat(new FlowContext(), currentTime)
                .while_(context -> !context.pop("").endsWith("0"))
                .iterations(5)
                .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
        // @end region = repeat
    }
}
