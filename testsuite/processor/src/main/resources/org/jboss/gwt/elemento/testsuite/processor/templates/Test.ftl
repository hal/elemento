<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="test" type="org.jboss.gwt.elemento.testsuite.processor.TestClass" -->
package ${packageName};

import javax.annotation.Generated;
import org.jboss.gwt.elemento.testsuite.TestSuite;
import org.jboss.gwt.elemento.testsuite.TestCase;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} extends TestCase {
    private final ${test.className} cut;

    public ${className}(TestSuite testSuite) {
        super(testSuite);
        this.cut = new ${test.className}();
    }

    @Override
    public void run() {
        startTest("${test.packageName}", "${test.className}");

        <#list test.tests as method>
        startMethod("${method}");
        try {
            <#list test.before as before>
            cut.${before}();
            </#list>
            cut.${method}();
            <#list test.after as after>
            cut.${after}(); // after
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
