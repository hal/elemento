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

import elemental2.promise.Promise;

import static org.jboss.elemento.flow.Flow.parallel;

/**
 * A task implementation that executes a list of {@linkplain Task asynchronous tasks} in
 * {@linkplain Flow#parallel(FlowContext, List) parallel}.
 * <p>
 * This implementation makes it easy to nest the execution of {@linkplain Task asynchronous tasks} inside a call to
 * {@link Flow#parallel(FlowContext, List)}, {@link Flow#sequential(FlowContext, List)} or
 * {@link Flow#repeat(FlowContext, Task)}.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between tasks
 */
public class ParallelTasks<C extends FlowContext> implements Task<C> {

    private final C context;
    private final List<Task<C>> tasks;
    private final boolean failFast;
    private final long timeout;

    // ------------------------------------------------------ re-use context

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} re-using an existing {@linkplain FlowContext context}.
     * <p>
     * The task fails fast and re-uses the {@linkplain FlowContext context} from the outer call to
     * {@link Flow#parallel(FlowContext, List)}, {@link Flow#sequential(FlowContext, List)} or
     * {@link Flow#repeat(FlowContext, Task)}.
     *
     * @param tasks the list of tasks to execute
     */
    public ParallelTasks(List<Task<C>> tasks) {
        this(null, tasks, Sequence.DEFAULT_FAIL_FAST, Sequence.DEFAULT_TIMEOUT);
    }

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} using a new {@linkplain FlowContext context}.
     * <p>
     * The task re-uses the {@linkplain FlowContext context} from the outer call to {@link Flow#parallel(FlowContext, List)},
     * {@link Flow#sequential(FlowContext, List)} or {@link Flow#repeat(FlowContext, Task)}.
     *
     * @param tasks The list of tasks to execute
     * @param failFast whether the execution of the tasks should fail fast or fail last
     */
    public ParallelTasks(List<Task<C>> tasks, boolean failFast) {
        this(null, tasks, failFast, Sequence.DEFAULT_TIMEOUT);
    }

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} using a new {@linkplain FlowContext context}.
     * <p>
     * The task re-uses the {@linkplain FlowContext context} from the outer call to {@link Flow#parallel(FlowContext, List)},
     * {@link Flow#sequential(FlowContext, List)} or {@link Flow#repeat(FlowContext, Task)}.
     *
     * @param tasks The list of tasks to execute
     * @param failFast whether the execution of the tasks should fail fast or fail last
     * @param timeout the timeout in milliseconds for the sequence
     */
    public ParallelTasks(List<Task<C>> tasks, boolean failFast, long timeout) {
        this(null, tasks, failFast, timeout);
    }

    // ------------------------------------------------------ own context

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} using a new {@linkplain FlowContext context}.
     * <p>
     * The task fails fast and uses the given {@linkplain FlowContext context} for the execution of the {@linkplain Task
     * asynchronous tasks}.
     *
     * @param context the context shared between tasks
     * @param tasks The list of tasks to execute
     */
    public ParallelTasks(C context, List<Task<C>> tasks) {
        this(context, tasks, Sequence.DEFAULT_FAIL_FAST, Sequence.DEFAULT_TIMEOUT);
    }

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} using a new {@linkplain FlowContext context}.
     * <p>
     * The task uses the given {@linkplain FlowContext context} for the execution of the {@linkplain Task asynchronous tasks}.
     *
     * @param context the context shared between tasks
     * @param tasks The list of tasks to execute
     * @param failFast whether the execution of the tasks should fail fast or fail last
     */
    public ParallelTasks(C context, List<Task<C>> tasks, boolean failFast) {
        this(context, tasks, failFast, Sequence.DEFAULT_TIMEOUT);
    }

    /**
     * Creates a new task that executes the given list of {@linkplain Task asynchronous tasks} in
     * {@linkplain Flow#parallel(FlowContext, List) parallel} using a new {@linkplain FlowContext context}.
     * <p>
     * The task uses the given {@linkplain FlowContext context} for the execution of the {@linkplain Task asynchronous tasks}.
     *
     * @param context the context shared between tasks
     * @param tasks The list of tasks to execute
     * @param failFast whether the execution of the tasks should fail fast or fail last
     * @param timeout the timeout in milliseconds for the sequence
     */
    public ParallelTasks(C context, List<Task<C>> tasks, boolean failFast, long timeout) {
        this.context = context;
        this.tasks = tasks;
        this.failFast = failFast;
        this.timeout = timeout;
    }

    // ------------------------------------------------------ methods

    @Override
    public Promise<C> apply(C context) {
        C contextToUse = this.context != null ? this.context : context;
        return parallel(contextToUse, tasks)
                .failFast(failFast)
                .timeout(timeout)
                .promise();
    }
}
