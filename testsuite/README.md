# Testsuite for Elemento

This folder contains a testsuite for Elemento which is based on annotations and code generation. Tests are written using some of the JUnit annotations and are executed in the context of a GWT application. The GWT application logs the progress and the outcome of the tests. 

## Writing Tests

Tests are normal Java classes. They don't have to implement a specific interface or extend a certain base class. Following JUnit there are three annotations you can use to write tests:

- `org.junit.Before` use this annotation for methods which should be executed *before* each test  
- `org.junit.After` use this annotation for methods which should be executed *after* each test
- `org.junit.Test` use this annotation to mark your actual test methods

All methods annotated with `@Before`, `@After` and `@Test` must be none-static, public, return void and take no parameters. 

```java
import static org.jboss.gwt.elemento.core.Elements.a;
import static org.jboss.gwt.elemento.testsuite.Assert.assertAttribute;
import static org.jboss.gwt.elemento.testsuite.Assert.assertTag;
import static org.jboss.gwt.elemento.testsuite.TestPage.builder;
import static org.jboss.gwt.elemento.testsuite.TestPage.clear;
import static org.jboss.gwt.elemento.testsuite.TestPage.firstElementChild;

public class BuilderTest {

    @Before
    public void setUp() {
        clear();
    }

    @Test
    public void aTag() {
        builder().add(a());
        assertTag(firstElementChild(), "a");
    }

    @Test
    public void aHref() {
        String href = "https://github.com/hal/elemento";
        builder().add(a(href));
        assertAttribute(firstElementChild(), "href", href);
    }
}
```

### API

There is a minimal API in form of two final classes with static helper methods: 

- `org.jboss.gwt.elemento.testsuite.TestPage`: Contains methods to access the HTML elements on the test page and to log test progress. This class also registers an exception handler which catches assertion errors and marks failed tests as an error on the test page. 
- `org.jboss.gwt.elemento.testsuite.Assert`: Contains simple helper methods to assert tag names and attribute values.

To make assertions in your test classes use the `assert` statement:

```java
@Test
public void elementStream() {
    List<HTMLElement> elements = stream(TestPage.element()).collect(toList());
    assert 2 == elements.size() : "Two elements expected";
}
```

### Annotation Processor

The annotation processor picks up all classes which contain methods annotated with `org.junit.Test`. For each test class a wrapper is generated which calls the class under test and logs the progress and outcome on the test page: 

```java
/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("org.jboss.gwt.elemento.testsuite.processor.TestProcessor")
public class BuilderTestRunner {
    private final BuilderTest cut;

    public BuilderTestRunner() {
        this.cut = new BuilderTest();
        logTest("org.jboss.gwt.elemento.testsuite.client.BuilderTest");
    }

    public void run() {
        cut.setUp();
        logMethod("aTag");
        cut.aTag();

        cut.setUp();
        logMethod("aHref");
        cut.aHref();
    }
}
```

Finally all tests are executed by another generated class: `org.jboss.gwt.elemento.testsuite.client.TestSuite`: 

```java
/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("org.jboss.gwt.elemento.testsuite.processor.TestProcessor")
public class TestSuite {

    public void run() {
        new org.jboss.gwt.elemento.testsuite.client.BuilderTestRunner().run();
        ...
    }
}
```

This class is used in the GWT entrypoint to run all tests:

```java
public class Main implements EntryPoint {

    @Override
    public void onModuleLoad() {
        new TestSuite().run();
    }
}
``` 

## Execute Tests

To run tests you can either use dev mode or execute the tests in production mode. 

### Dev Mode

The maven module `tests` contains the GWT test application:

```bash
cd tests
mvn gwt:devmode
```

### Production Mode

The maven module `standalone` bundles the GWT application in an executable JAR which is served by an Undertow server:

```bash
cd standalone
java -jar target/elemento-testsuite-standalone-HEAD-SNAPSHOT.jar
```
