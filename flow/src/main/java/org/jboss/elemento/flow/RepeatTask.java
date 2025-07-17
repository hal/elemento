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
package org.jboss.elemento.flow;

import java.util.List;
import java.util.function.Predicate;

import elemental2.promise.Promise;

import static org.jboss.elemento.flow.Flow.repeat;

/**
 * A task implementation that executes a {@linkplain Task task} as long as certain conditions are met.
 * <p>
 * This implementation makes it easy to nest the execution of {@linkplain Task asynchronous tasks} inside a call to
 * {@link Flow#parallel(FlowContext, List)}, {@link Flow#sequential(FlowContext, List)} or
 * {@link Flow#repeat(FlowContext, Task)}.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between tasks
 */
public class RepeatTask<C extends FlowContext> implements Task<C> {

    private final C context;
    private final Task<C> task;
    private final Predicate<C> predicate;
    private final boolean failFast;
    private final long interval;
    private final long timeout;
    private final int iterations;

    /**
     * Creates a new task that executes the given {@linkplain Task tasks} as long as the given {@linkplain Predicate predicate}
     * evaluates to {@code true}.
     * <p>
     * The task re-uses the {@linkplain FlowContext context} from the outer call to {@link Flow#parallel(FlowContext, List)},
     * {@link Flow#sequential(FlowContext, List)} or {@link Flow#repeat(FlowContext, Task)}.
     *
     * @param task      the task to execute while the predicate evaluates to {@code true}
     * @param predicate the predicate used to decide whether to continue or break the loop
     * @param failFast  whether the execution of the list should fail fast or fail last
     * @param interval  the interval between the iterations
     * @param timeout   the timeout for the while loop
     */
    public RepeatTask(Task<C> task, Predicate<C> predicate,
            boolean failFast, long interval, long timeout) {
        this(null, task, predicate, failFast, interval, timeout, Repeat.DEFAULT_ITERATIONS);
    }

    /**
     * Creates a new task that executes the given {@linkplain Task tasks} as long as the given {@linkplain Predicate predicate}
     * evaluates to {@code true}.
     * <p>
     * The task re-uses the {@linkplain FlowContext context} from the outer call to {@link Flow#parallel(FlowContext, List)},
     * {@link Flow#sequential(FlowContext, List)} or {@link Flow#repeat(FlowContext, Task)}.
     *
     * @param task       the task to execute while the predicate evaluates to {@code true}
     * @param predicate  the predicate used to decide whether to continue or break the loop
     * @param failFast   whether the execution of the list should fail fast or fail last
     * @param interval   the interval between the iterations
     * @param timeout    the timeout for the while loop
     * @param iterations the maximal iterations the loop
     */
    public RepeatTask(Task<C> task, Predicate<C> predicate,
            boolean failFast, long interval, long timeout, int iterations) {
        this(null, task, predicate, failFast, interval, timeout, iterations);
    }

    /**
     * Creates a new task that executes the given {@linkplain Task tasks} as long as the given {@linkplain Predicate predicate}
     * evaluates to {@code true}.
     * <p>
     * The task uses the given {@linkplain FlowContext context} for the execution of the {@linkplain Task task}.
     *
     * @param context    the context shared between the iterations
     * @param task       the task to execute while the predicate evaluates to {@code true}
     * @param predicate  the predicate used to decide whether to continue or break the loop
     * @param failFast   whether the execution of the list should fail fast or fail last
     * @param interval   the interval between the iterations
     * @param timeout    the timeout for the while loop
     * @param iterations the maximal iterations the loop
     */
    public RepeatTask(C context, Task<C> task, Predicate<C> predicate,
            boolean failFast, long interval, long timeout) {
        this(context, task, predicate, failFast, interval, timeout, Repeat.DEFAULT_ITERATIONS);
    }

    /**
     * Creates a new task that executes the given {@linkplain Task tasks} as long as the given {@linkplain Predicate predicate}
     * evaluates to {@code true}.
     * <p>
     * The task uses the given {@linkplain FlowContext context} for the execution of the {@linkplain Task task}.
     *
     * @param context    the context shared between the iterations
     * @param task       the task to execute while the predicate evaluates to {@code true}
     * @param predicate  the predicate used to decide whether to continue or break the loop
     * @param failFast   whether the execution of the list should fail fast or fail last
     * @param interval   the interval between the iterations
     * @param timeout    the timeout for the while loop
     * @param iterations the maximal iterations the loop
     */
    public RepeatTask(C context, Task<C> task, Predicate<C> predicate,
            boolean failFast, long interval, long timeout, int iterations) {
        this.context = context;
        this.task = task;
        this.predicate = predicate;
        this.interval = interval;
        this.timeout = timeout;
        this.failFast = failFast;
        this.iterations = iterations;
    }

    @Override
    public Promise<C> apply(C context) {
        C contextToUse = this.context != null ? this.context : context;
        return repeat(contextToUse, task)
                .while_(predicate)
                .failFast(failFast)
                .interval(interval)
                .timeout(timeout)
                .iterations(iterations)
                .promise();
    }
}
