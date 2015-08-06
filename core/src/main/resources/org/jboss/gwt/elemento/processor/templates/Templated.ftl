<#-- @ftlvariable name="context" type="org.jboss.gwt.elemento.processor.context.FreemarkerContext" -->
package ${context.package};

<#if context.root.innerHtml??>
import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
</#if>
import elemental.client.Browser;
import elemental.dom.Element;
<#if (context.root.innerHtml?? && context.root.handlebars?size > 0)>
import elemental.dom.NamedNodeMap;
import elemental.traversal.TreeWalker;
</#if>
<#if (context.dataElements?size > 0 || context.eventHandler?size > 0 || (context.root.innerHtml?? && context.root.handlebars?size > 0))>
import org.jboss.gwt.elemento.core.TemplateUtil;
</#if>

import javax.annotation.Generated;

/*
* WARNING! This class is generated. Do not modify.
*/
@Generated("org.jboss.gwt.elemento.processor.TemplatedProcessor")
final class ${context.subclass} extends ${context.base} {

    <#if context.root.innerHtml??>
    static interface InnerHtml extends SafeHtmlTemplates {
        @Template("${context.root.innerHtml}")
        SafeHtml value();
    }

    private final static InnerHtml INNER_HTML = GWT.create(InnerHtml.class);
    </#if>
    <#list context.abstractProperties as abstractProperty>
    private final ${abstractProperty.type} ${abstractProperty.field};
    </#list>
    private final Element ${context.root.member};

    ${context.subclass}(<#list context.abstractProperties as abstractProperty>${abstractProperty.type} ${abstractProperty.field}<#if abstractProperty_has_next>, </#if></#list>) {
        <#list context.abstractProperties as abstractProperty>
        this.${abstractProperty.field} = ${abstractProperty.field};
        </#list>

        this.${context.root.member} = Browser.getDocument().createElement("${context.root.tag}");
        <#list context.root.attributes as attribute>
        this.${context.root.member}.setAttribute("${attribute.key}", "${attribute.value}");
        </#list>
        <#if context.root.innerHtml??>
        this.${context.root.member}.setInnerHTML(INNER_HTML.value().asString());
        </#if>

        <#list context.dataElements as dataElement>
            <#-- Element -->
            <#if dataElement.kind.name() == "Element">
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
            <#-- Widget -->
            <#elseif dataElement.kind.name() == "Widget">
        TemplateUtil.replaceWidget(${context.root.member}, "${dataElement.selector}", ${dataElement.fieldOrMethod});
            <#-- IsElement -->
            <#elseif dataElement.kind.name() == "IsWidget">
        TemplateUtil.replaceIsWidget(${context.root.member}, "${dataElement.selector}", ${dataElement.fieldOrMethod});
            </#if>
        </#list>
        <#-- @EventHandler -->
        <#list context.eventHandler as handler>
        <#if handler.needsCast()>
        TemplateUtil.registerEventHandler(${context.root.member}, "${handler.selector}", ${handler.eventType}, event -> ${handler.method}((${handler.eventParameterType}) event));
        <#else>
            <#if handler.hasEventParameter()>
        TemplateUtil.registerEventHandler(${context.root.member}, "${handler.selector}", ${handler.eventType}, this::${handler.method});
            <#else>
        TemplateUtil.registerEventHandler(${context.root.member}, "${handler.selector}", ${handler.eventType}, event -> ${handler.method}());
            </#if>
        </#if>
        </#list>
        <#-- Handlebars -->
        <#if (context.root.innerHtml?? && context.root.handlebars?size > 0)>
            <#list context.root.handlebars?keys as handlebar>
        TemplateUtil.replaceHandlebar(${context.root.member}, "${handlebar}", String.valueOf(${context.root.handlebars?values[handlebar_index]}));
            </#list>
        </#if>
        <#-- @PostConstruct -->
        <#list context.postConstructs as postConstruct>
        ${postConstruct.name}();
        </#list>
    }

    @Override
    public Element asElement() {
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
