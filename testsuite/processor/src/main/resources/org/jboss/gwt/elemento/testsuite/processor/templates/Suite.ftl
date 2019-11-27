<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="tests" type="java.util.Collection<org.jboss.gwt.elemento.testsuite.processor.TestClass>" -->
package ${packageName};

import javax.annotation.Generated;
import org.jboss.gwt.elemento.testsuite.internal.TestCase;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} extends org.jboss.gwt.elemento.testsuite.internal.TestSuite  {

    public void run() {
        <#list tests as test>
        TestCase tc${test_index} = new ${test.packageName}.${test.testCaseName}(this);
        tc${test_index}.run();
        </#list>
    }
}
