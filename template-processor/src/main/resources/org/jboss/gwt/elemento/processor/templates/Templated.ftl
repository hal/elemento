<#-- @ftlvariable name="context" type="org.jboss.gwt.elemento.processor.context.TemplateContext" -->
package ${context.package};

import elemental2.dom.DomGlobal;
<#if (context.dataElements?size > 0 || context.root.expressions?size > 0)>
import org.jboss.gwt.elemento.template.TemplateUtil;
</#if>

import javax.annotation.Generated;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("org.jboss.gwt.elemento.processor.TemplatedProcessor")
public final class ${context.subclass} extends ${context.base} {

    <#list context.abstractProperties as abstractProperty>
    private final ${abstractProperty.type} ${abstractProperty.field};
    </#list>
    private final ${context.isElementTypeParameter} ${context.root.member};

${context.inject} public ${context.subclass}(<#list context.abstractProperties as abstractProperty>${abstractProperty.type} ${abstractProperty.field}<#if abstractProperty_has_next>, </#if></#list>) {
        <#list context.abstractProperties as abstractProperty>
        this.${abstractProperty.field} = ${abstractProperty.field};
        </#list>

        this.${context.root.member} = (${context.isElementTypeParameter})DomGlobal.document.createElement("${context.root.tag}");
        <#list context.root.attributes as attribute>
        this.${context.root.member}.setAttribute("${attribute.key}", "${attribute.value}");
        </#list>
        <#if context.root.innerHtml??>
        this.${context.root.member}.innerHTML = "${context.root.innerHtml}";
        </#if>

        <#list context.dataElements as dataElement>
            <#-- HTMLElement -->
            <#if dataElement.kind.name() == "HTMLElement">
                <#if dataElement.returnedByMethod>
        TemplateUtil.replaceElement(${context.root.member}, "${dataElement.selector}", ${dataElement.name}());
                <#else>
        if (this.${dataElement.name} == null) {
                    <#if dataElement.needsCast()>
            this.${dataElement.name} = TemplateUtil.<${dataElement.type}>resolveElementAs(${context.root.member}, "${dataElement.selector}");
                    <#else>
            this.${dataElement.name} = TemplateUtil.resolveElement(${context.root.member}, "${dataElement.selector}");
                    </#if>
        } else {
            TemplateUtil.replaceElement(${context.root.member}, "${dataElement.selector}", ${dataElement.name});
        }
                </#if>
            <#-- IsElement -->
            <#elseif dataElement.kind.name() == "IsElement">
        TemplateUtil.replaceIsElement(${context.root.member}, "${dataElement.selector}", ${dataElement.fieldOrMethod});
            <#-- Custom -->
            <#elseif dataElement.kind.name() == "Custom">
                <#if dataElement.returnedByMethod>
        TemplateUtil.replaceCustomElement(${context.root.member}, "${dataElement.selector}", ${dataElement.name}());
                <#else>
        if (this.${dataElement.name} == null) {
            this.${dataElement.name} = TemplateUtil.<${dataElement.type}>resolveCustomElement(${context.root.member}, "${dataElement.selector}");
        } else {
            TemplateUtil.replaceCustomElement(${context.root.member}, "${dataElement.selector}", ${dataElement.name});
        }
                </#if>
            </#if>
        </#list>
        <#-- Expressions -->
        <#if (context.root.innerHtml?? && context.root.expressions?size > 0)>
            <#list context.root.expressions?keys as expression>
        TemplateUtil.replaceExpression(${context.root.member}, "${expression}", ${context.root.expressions?values[expression_index]});
            </#list>
        </#if>
        <#-- @PostConstruct -->
        <#list context.postConstructs as postConstruct>
        ${postConstruct.name}();
        </#list>
    }

    @Override
    public ${context.isElementTypeParameter} element() {
        return ${context.root.member};
    }
    <#-- Abstract properties -->
    <#list context.abstractProperties as abstractProperty>

    @Override
    ${abstractProperty.modifier}${abstractProperty.type} ${abstractProperty.method}() {
        return ${abstractProperty.field};
    }
    </#list>
}
