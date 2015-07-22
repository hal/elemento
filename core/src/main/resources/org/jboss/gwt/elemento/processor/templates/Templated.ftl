<#-- @ftlvariable name="context" type="org.jboss.gwt.elemento.processor.context.FreemarkerContext" -->
package ${context.package};

<#if context.root.innerHtml??>
import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
</#if>
import elemental.client.Browser;
import elemental.dom.Element;
<#if (context.dataElements?size > 0)>
import org.jboss.gwt.elemento.core.TemplateUtils;
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
    private final Element ${context.root.member};

    ${context.subclass} () {
        this.${context.root.member} = Browser.getDocument().createElement("${context.root.tag}");
        <#list context.root.attributes as attribute>
        this.${context.root.member}.setAttribute("${attribute.key}", "${attribute.value}");
        </#list>
        <#if context.root.innerHtml??>
        this.${context.root.member}.setInnerHTML(INNER_HTML.value().asString());
        </#if>

        <#list context.dataElements as dataElement>
        <#if dataElement.kind.name() == "Element">
        <#if dataElement.needsCast()>
        this.${dataElement.name} = TemplateUtils.<${dataElement.type}>resolveElementAs(${context.root.member}, "${dataElement.selector}", TemplateUtils.DATA_ELEMENT);
        <#else>
        this.${dataElement.name} = TemplateUtils.resolveElement(${context.root.member}, "${dataElement.selector}", TemplateUtils.DATA_ELEMENT);
        </#if>
        </#if>
        </#list>
    }

    @Override
    public Element asElement() {
        return ${context.root.member};
    }
}
