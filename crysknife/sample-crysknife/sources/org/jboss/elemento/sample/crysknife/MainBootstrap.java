package org.jboss.elemento.sample.crysknife;

import io.crysknife.client.internal.OnFieldAccessed;
import io.crysknife.client.Reflect;
import io.crysknife.client.internal.Factory;
import javax.inject.Provider;
import io.crysknife.client.Interceptor;
import io.crysknife.client.BeanManagerImpl;
import io.crysknife.client.Instance;
import java.util.function.Supplier;

public class MainBootstrap {

    private Main instance;

    private Interceptor interceptor;

    MainBootstrap(Main application) {
        this.org_jboss_elemento_sample_crysknife_todorepository = () -> BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.TodoRepository.class);
        this.org_jboss_elemento_sample_crysknife_applicationelement = () -> BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.ApplicationElement.class);
        this.org_jboss_elemento_sample_crysknife_footerelement = () -> BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.FooterElement.class);
        this.instance = application;
    }

    void initialize() {
        interceptor = new Interceptor(instance);
        instance = interceptor.getProxy();
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.repository, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_todorepository.get().get()));
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.application, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_applicationelement.get().get()));
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.footer, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_footerelement.get().get()));
        this.instance.init();
    }

    private Supplier<Instance<org.jboss.elemento.sample.crysknife.TodoRepository>> org_jboss_elemento_sample_crysknife_todorepository;

    private Supplier<Instance<org.jboss.elemento.sample.crysknife.ApplicationElement>> org_jboss_elemento_sample_crysknife_applicationelement;

    private Supplier<Instance<org.jboss.elemento.sample.crysknife.FooterElement>> org_jboss_elemento_sample_crysknife_footerelement;
}

