<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="tests" type="java.util.Collection<org.elemento.testsuite.processor.TestClass>" -->
package ${packageName};

import javax.annotation.Generated;
import TestCase;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} extends TestSuite  {

    public void run() {
        <#list tests as test>
        TestCase tc${test_index} = new ${test.packageName}.${test.testCaseName}(this);
        tc${test_index}.run();
        </#list>
    }
}
