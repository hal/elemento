package org.jboss.gwt.elemento.core;

import java.util.List;
import java.util.Map;

/**
 * @author Harald Pehl
 */
public interface TestElement {

    String id();

    String tagName();

    String type();

    String title();

    String className();

    Map<String, String> attributes();

    String innerHtml();

    String textContent();

    List<TestElement> children();
}
