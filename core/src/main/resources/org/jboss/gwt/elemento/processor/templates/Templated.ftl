<#-- @ftlvariable name="context" type="org.jboss.gwt.elemento.processor.FreemarkerContext" -->
package ${context.package};

<#if context.root.innerHtml??>
import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
</#if>
import elemental.client.Browser;
import elemental.dom.Element;

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
        // init root element
        this.${context.root.member} = Browser.getDocument().createElement("${context.root.tag}");
        <#list context.root.attributes as attribute>
        this.${context.root.member}.setAttribute("${attribute.key}", "${attribute.value}");
        </#list>
        <#if context.root.innerHtml??>
        this.${context.root.member}.setInnerHTML(INNER_HTML.value().asString());
        </#if>
    }

    @Override
    public Element asElement() {
        return ${context.root.member};
    }
}
