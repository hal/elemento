# Testsuite for Elemento

This folder contains maven modules for the Elemento test suite. Tests are written using regular JUnit 5 annotations and are executed in the context of a GWT application and a test page. The test page is used to modify the DOM tree and verify changes. The test result is logged on the page and mimics the test output of JUnit 5. 

## Writing Tests

Tests are normal Java classes. They don't have to implement a specific interface or extend a certain base class. Following JUnit there are three annotations you can use to write tests:

- `org.junit.jupiter.api.BeforeEach` use this annotation for methods which should be executed *before* each test. 
- `org.junit.jupiter.api.AfterEach` use this annotation for methods which should be executed *after* each test.
- `org.junit.jupiter.api.Test` use this annotation to mark your actual test methods.

All methods annotated with `@BeforeEach`, `@AfterEach` and `@Test` must be none-static, public, return void and take no parameters. All other JUnit annotations are currently not supported.  

```java
import elemental2.dom.HTMLDivElement;
import static elemental2.dom.DomGlobal.document;
import static Elements.div;
import static Assert.assertTag;
import static TestPage.clear;
import static TestPage.main;

public class BuilderTest {

    HtmlContentBuilder<HTMLDivElement> div;

    @BeforeEach
    public void setUp() {
        clear();
        div = div();
        main().add(div);
    }

    @Test
    public void id() {
        main().add(div().id("foo"));
        assert document.getElementById("foo") != null;
    }
}
```

### API

There is a minimal API in form of two final classes with static helper methods: 

- `Assert`: Contains static helper methods to assert tag names and attribute values.
- `TestPage`: Contains methods to access the HTML elements on the test page.

### Annotation Processor

An annotation processor picks up all classes containing methods annotated with `org.junit.jupiter.api.Test`. For each test class a runner is generated, which calls the class under test and logs the progress and outcome on the test page.

Finally all tests are executed by another generated class: `TestSuite`. This class is used in the GWT entry point to run all tests. 

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
