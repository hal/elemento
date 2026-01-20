/**
 * Provides an API for executing asynchronous tasks in parallel, sequentially, or repeatedly based on conditions.
 *
 * <h2>Overview</h2>
 * <p>
 * The flow package enables coordinated execution of multiple {@link org.jboss.elemento.flow.Task asynchronous tasks} that share a
 * common {@link org.jboss.elemento.flow.FlowContext context}. Tasks can be executed in parallel, sequentially, or repeatedly while
 * conditions are met. The context provides a stack and map for data sharing between tasks, along with progress tracking.
 *
 * <h2>Parallel Execution</h2>
 * <p>
 * Execute multiple tasks simultaneously using {@link org.jboss.elemento.flow.Flow#parallel(FlowContext, java.util.List)}:
 *
 * {@snippet :
 * import static org.jboss.elemento.flow.Flow.parallel;
 *
 * // datetime format is "2022-03-31T11:03:39.348365+02:00"
 * Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
 *         .then(Response::json)
 *         .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
 *         .then(context::resolve);
 *
 * double ms = 500 + new Random().nextInt(2000);
 * Task<FlowContext> delay = context -> new Promise<>((res, __) -> setTimeout(___ -> res.onInvoke(context), ms));
 *
 * // execute the two tasks in parallel
 * parallel(new FlowContext(), List.of(currentTime, delay))
 *         .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
 * }
 *
 * <h2>Sequential Execution</h2>
 * <p>
 * Execute tasks one after another using {@link org.jboss.elemento.flow.Flow#sequential(FlowContext, java.util.List)}:
 *
 * {@snippet :
 * import static org.jboss.elemento.flow.Flow.sequential;
 *
 * Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
 *         .then(Response::json)
 *         .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
 *         .then(context::resolve);
 *
 * double ms = 500 + new Random().nextInt(2_000);
 * Task<FlowContext> delay = context -> new Promise<>((res, __) -> setTimeout(___ -> res.onInvoke(context), ms));
 *
 * // execute the two tasks in sequence and cancel after 1_000 ms
 * sequential(new FlowContext(), List.of(currentTime, delay))
 *         .timeout(1_000)
 *         .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
 * }
 *
 * <h2>Repeated Execution</h2>
 * <p>
 * Execute a task repeatedly while a condition is met using {@link org.jboss.elemento.flow.Flow#repeat(FlowContext, Task)}:
 *
 * {@snippet :
 * import static org.jboss.elemento.flow.Flow.repeat;
 *
 * Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
 *         .then(Response::json)
 *         .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
 *         .then(context::resolve);
 *
 * // fetch the current time until the milliseconds end with "0" and cancel after 5 iterations
 * repeat(new FlowContext(), currentTime)
 *         .while_(context -> !context.pop("").endsWith("0"))
 *         .iterations(5)
 *         .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
 * }
 *
 * <h2>Flow Context</h2>
 * <p>
 * The {@link org.jboss.elemento.flow.FlowContext} serves as a shared data structure between tasks, providing:
 * <ul>
 * <li>A <strong>stack</strong> for passing data between tasks using {@link org.jboss.elemento.flow.FlowContext#push(Object)} and
 * {@link org.jboss.elemento.flow.FlowContext#pop()}
 * <li>A <strong>map</strong> for named data storage using {@link org.jboss.elemento.flow.FlowContext#set(String, Object)} and
 * {@link org.jboss.elemento.flow.FlowContext#get(String)}
 * <li><strong>Progress tracking</strong> via {@link org.jboss.elemento.flow.Progress}
 * <li><strong>Status information</strong> about execution success, failure, or timeout
 * </ul>
 *
 * <p>
 * Tasks can use convenience methods to resolve or reject promises:
 * {@snippet :
 * Task<FlowContext> task = context -> {
 *     // Push value and resolve
 *     return context.resolve("result");
 *
 *     // Store value and resolve
 *     // return context.resolve("key", "value");
 *
 *     // Reject with error
 *     // return context.reject("error message");
 * };
 * }
 *
 * <h2>Control Options</h2>
 * <p>
 * Both {@link org.jboss.elemento.flow.Sequence} (for parallel/sequential) and {@link org.jboss.elemento.flow.Repeat} provide
 * control options:
 * <ul>
 * <li><strong>Fail fast vs. fail last</strong> - Control whether execution stops on first failure or continues
 * <li><strong>Timeout</strong> - Set maximum execution time (sequential and repeat only)
 * <li><strong>Interval</strong> - Set delay between iterations (repeat only)
 * <li><strong>Iterations</strong> - Set maximum number of iterations (repeat only)
 * <li><strong>While predicate</strong> - Continue while condition is true (repeat only)
 * </ul>
 *
 * <h2>Subscription</h2>
 * <p>
 * Subscribe to execution results using {@link org.jboss.elemento.flow.Subscription#subscribe(FlowCallback)}:
 *
 * {@snippet :
 * Flow.parallel(context, tasks)
 *         .subscribe(ctx -> {
 *             if (ctx.isSuccessful()) {
 *                 console.log("Success: " + ctx.pop());
 *             } else if (ctx.failure()) {
 *                 console.log("Failed: " + ctx.failureReason());
 *             } else if (ctx.isTimeout()) {
 *                 console.log("Timeout!");
 *             }
 *         });
 * }
 *
 * @see org.jboss.elemento.flow.Flow
 * @see org.jboss.elemento.flow.Task
 * @see org.jboss.elemento.flow.FlowContext
 * @see org.jboss.elemento.flow.Sequence
 * @see org.jboss.elemento.flow.Repeat
 */
package org.jboss.elemento.flow;