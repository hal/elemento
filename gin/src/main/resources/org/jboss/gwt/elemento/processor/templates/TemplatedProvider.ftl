<#-- @ftlvariable name="context" type="org.jboss.gwt.elemento.processor.context.FreemarkerContext" -->
package ${context.package};

import com.google.inject.Provider;

<#if (context.abstractProperties?size > 0)>
import javax.inject.Inject;
</#if>
import javax.annotation.Generated;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("org.jboss.gwt.elemento.processor.TemplatedProviderProcessor")
public class ${context.subclass} implements Provider<${context.base}> {

    <#if (context.abstractProperties?size > 0)>
    <#list context.abstractProperties as abstractProperty>
    private final ${abstractProperty.type} ${abstractProperty.field};
    </#list>

    @Inject
    public ${context.subclass}(<#list context.abstractProperties as abstractProperty>${abstractProperty.type} ${abstractProperty.field}<#if abstractProperty_has_next>, </#if></#list>) {
        <#list context.abstractProperties as abstractProperty>
        this.${abstractProperty.field} = ${abstractProperty.field};
        </#list>
    }

    </#if>
    @Override
    public ${context.base} get() {
        return ${context.base}.${context.createMethod}(<#list context.abstractProperties as abstractProperty>${abstractProperty.field}<#if abstractProperty_has_next>, </#if></#list>);
    }
}
