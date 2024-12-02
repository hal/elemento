# Flow

The class [`Flow`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/flow/Flow.html) provides methods for executing a list of asynchronous tasks in parallel or sequentially or to execute a single task repeatedly as long as certain conditions are met.

See the API documentation of [`org.jboss.elemento.flow`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/flow/package-summary.html) for more details.

## Parallel

```java
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
```

## Sequential

```java
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
```

## Repeated

```java
Task<FlowContext> currentTime = context -> fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
        .then(Response::json)
        .then(json -> Promise.resolve(Js.<JsPropertyMap<String>>cast(json).get("datetime").substring(11, 23)))
        .then(context::resolve);

// fetch the current time until the milliseconds end with "0" and cancel after 5 iterations
Flow.repeat(new FlowContext(),currentTime)
        .while_(context -> !context.pop("").endsWith("0"))
        .iterations(5)
        .subscribe(context -> console.log("Current time: " + context.pop("n/a")));
```

## Dependency

Add the following dependency to use `elemento-flow`:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-flow</artifactId>
    <version>1.7.0</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.Flow`:

```xml
<module>
    <inherits name="org.jboss.elemento.Flow"/>
</module>
```
