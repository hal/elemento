<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="tests" type="java.util.Collection<org.jboss.gwt.elemento.testsuite.processor.TestClass>" -->
package ${packageName};

import javax.annotation.Generated;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} {

    public void run() {
        <#list tests as test>
        new ${test.getPackageName()}.${test.getRunnerClassName()}().run();
        </#list>
    }
}
