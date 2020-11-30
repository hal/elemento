package org.jboss.elemento.sample.crysknife;

import io.crysknife.client.internal.Factory;
import javax.inject.Provider;
import io.crysknife.client.internal.OnFieldAccessed;
import io.crysknife.client.Reflect;
import io.crysknife.client.Interceptor;
import elemental2.dom.DomGlobal;
import io.crysknife.ui.templates.client.TemplateUtil;
import jsinterop.base.Js;

public class FooterElement_Factory implements Factory<FooterElement> {

    private Interceptor interceptor;

    @Override()
    public FooterElement get() {
        if (this.instance != null)
            return this.instance;
        this.interceptor = new Interceptor(new FooterElement());
        this.instance = this.interceptor.getProxy();
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", instance), TemplateUtil.resolveElement(this.instance.element(), "info"));
        else
            TemplateUtil.replaceElement(this.instance.element(), "info", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", instance))));
        return this.instance;
    }

    private FooterElement instance;

    private FooterElement_Factory() {
    }

    final class FooterElement extends org.jboss.elemento.sample.crysknife.FooterElement {

        private final elemental2.dom.HTMLElement root = (elemental2.dom.HTMLElement) elemental2.dom.DomGlobal.document.createElement("footer");

        public FooterElement() {
            this.root.setAttribute("class", "info");
            this.root.innerHTML = "<p>Double-click to edit a todo</p> <p><span>Created by</span>&nbsp;<a href=\"http://hpehl.info\">Harald Pehl</a></p> <p><span>Part of</span>&nbsp;<a href=\"http://todomvc.com\">TodoMVC</a></p>";
        }

        @Override()
        public elemental2.dom.HTMLElement element() {
            return (elemental2.dom.HTMLElement) this.root;
        }
    }

    public static FooterElement_Factory create() {
        return new FooterElement_Factory();
    }
}

