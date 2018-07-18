<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="test" type="org.jboss.gwt.elemento.testsuite.processor.TestClass" -->
package ${packageName};

import javax.annotation.Generated;
import static org.jboss.gwt.elemento.testsuite.TestSupport.*;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("${generatedWith}")
public class ${className} {
    private final ${test.className} cut;

    public ${className}() {
        this.cut = new ${test.className}();
        logTest("${test.getPackageName()}.${test.getClassName()}");
    }

    public void run() {
        <#list test.tests as method>
            <#list test.before as before>
        cut.${before}();
            </#list>
        logMethod("${method}");
        cut.${method}();
            <#list test.after as after>
        cut.${after}(); // after
            </#list>
            <#if method_has_next>

            </#if>
        </#list>
    }
}
