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
package org.jboss.elemento.sample.flow;

import java.util.List;
import java.util.Random;
import java.util.function.Predicate;

import org.jboss.elemento.Id;
import org.jboss.elemento.flow.Flow;
import org.jboss.elemento.flow.FlowContext;
import org.jboss.elemento.flow.ParallelTasks;
import org.jboss.elemento.flow.Progress;
import org.jboss.elemento.flow.RepeatTask;
import org.jboss.elemento.flow.SequentialTasks;
import org.jboss.elemento.flow.Task;

import elemental2.dom.Response;
import elemental2.promise.Promise;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import static elemental2.dom.DomGlobal.fetch;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;

class Tasks {

    private static final double FAILURE_PERCENTAGE = 0.08;
    static final String GOOD_TIME = "0";
    static final int TASKS = 7;
    static final int INTERVAL = 1_000;
    static final int SEQUENCE_TIMEOUT = 4_000;
    static final int REPEAT_TIMEOUT = 8_000;

    private final Progress progress;
    private final Logger logger;
    private final boolean randomFailure;
    private final boolean failFast;

    Tasks(final Progress progress, final Logger logger, final boolean randomFailure, final boolean failFast) {
        this.progress = progress;
        this.logger = logger;
        this.randomFailure = randomFailure;
        this.failFast = failFast;
    }

    // ------------------------------------------------------ task executions

    void parallel() {
        Flow.parallel(context(), tasks())
                .failFast(failFast)
                .timeout(SEQUENCE_TIMEOUT)
                .subscribe(context -> logger.finish(context.status()));
    }

    void sequential() {
        Flow.sequential(context(), tasks())
                .failFast(failFast)
                .timeout(SEQUENCE_TIMEOUT)
                .subscribe(context -> logger.finish(context.status()));
    }

    void repeat() {
        Flow.repeat(context(), currentTime())
                .while_(wrongTime())
                .failFast(failFast)
                .interval(INTERVAL)
                .timeout(REPEAT_TIMEOUT)
                .subscribe(context -> logger.finish(context.status()));
    }

    void nested() {
        Flow.sequential(context(), nestedTasks())
                .failFast(failFast)
                .timeout(SEQUENCE_TIMEOUT + REPEAT_TIMEOUT)
                .subscribe(context -> logger.finish(context.status()));
    }

    // ------------------------------------------------------ factory methods

    private List<Task<FlowContext>> nestedTasks() {
        return asList(
                new ParallelTasks<>(tasks(), failFast),
                new SequentialTasks<>(tasks(), failFast),
                new RepeatTask<>(currentTime(), wrongTime(), failFast, INTERVAL, REPEAT_TIMEOUT));
    }

    private List<Task<FlowContext>> tasks() {
        return asList(
                currentTime(),
                delay(),
                currentTime(),
                delay(),
                currentTime(),
                delay(),
                currentTime());
    }

    private FlowContext context() {
        return new FlowContext(progress);
    }

    private Predicate<FlowContext> wrongTime() {
        return context -> !context.pop("").endsWith(GOOD_TIME);
    }

    // ------------------------------------------------------ task implementations

    private Task<FlowContext> delay() {
        long random = 500L + new Random().nextInt(2_001);
        final long milliseconds = random - random % 500L;
        return context -> new Promise<>(
                (resolve, reject) -> {
                    String uniqueId = Id.unique();
                    logger.logStart(uniqueId, "Wait " + milliseconds + " ms...");
                    setTimeout(__ -> {
                        if (blowUp()) {
                            logger.logFailure(uniqueId, "Failed");
                            reject.onInvoke("Random failure");
                        } else {
                            logger.logEnd(uniqueId, "Done");
                            resolve.onInvoke(context);
                        }
                    }, milliseconds);
                });
    }

    private Task<FlowContext> currentTime() {
        return context -> {
            String uniqueId = Id.unique();
            logger.logStart(uniqueId, "Fetch time...");
            return fetchTime().then(time -> {
                context.push(time);
                if (blowUp()) {
                    logger.logFailure(uniqueId, "Failed");
                    return context.reject("Random failure");
                } else {
                    logger.logEnd(uniqueId, time);
                    return context.resolve();
                }
            });
        };
    }

    private boolean blowUp() {
        return randomFailure && Math.random() < FAILURE_PERCENTAGE;
    }

    private Promise<String> fetchTime() {
        // The response format is `{"time":1758129487}`
        return fetch("https://digidates.de/api/v1/unixtime")
                .then(Response::json)
                .then(json -> Promise.resolve(String.valueOf((double) Js.<JsPropertyMap<Double>>cast(json).get("time"))));
    }
}
