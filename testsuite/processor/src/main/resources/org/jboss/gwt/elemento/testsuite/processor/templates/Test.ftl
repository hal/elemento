<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="test" type="org.jboss.gwt.elemento.testsuite.processor.TestClass" -->
package ${packageName};

import javax.annotation.Generated;
import org.jboss.gwt.elemento.testsuite.internal.TestSuite;
import org.jboss.gwt.elemento.testsuite.internal.TestCase;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} extends TestCase {

    private ${test.className} cut;

    public ${className}(TestSuite testSuite) {
        super(testSuite);
    }

    @Override
    public void run() {
        startTest("${test.packageName}", "${test.className}");

        <#list test.tests as method>
        startMethod("${method}");
        try {
            cut = new ${test.className}();
            <#list test.before as before>
            cut.${before}();
            </#list>
            cut.${method}();
            <#list test.after as after>
            cut.${after}();
            </#list>
        } catch (Throwable t) {
            addFailure("${method}", t);
        }
        endMethod();
            <#if method_has_next>

            </#if>
        </#list>

        endTest();
    }
}
