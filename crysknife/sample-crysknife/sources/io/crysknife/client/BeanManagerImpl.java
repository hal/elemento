package io.crysknife.client;

import javax.inject.Provider;
import java.util.Map;
import java.util.HashMap;
import java.lang.annotation.Annotation;
import io.crysknife.client.internal.AbstractBeanManager;

public class BeanManagerImpl extends AbstractBeanManager {

    static private BeanManagerImpl instance;

    private void init() {
        this.register(io.crysknife.client.BeanManager.class, io.crysknife.client.BeanManager_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.TodoRepository.class, org.jboss.elemento.sample.crysknife.TodoRepository_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.ApplicationElement.class, org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.FooterElement.class, org.jboss.elemento.sample.crysknife.FooterElement_Factory.create());
    }

    public static BeanManager get() {
        if (instance == null) {
            instance = new BeanManagerImpl();
            instance.init();
        }
        return instance;
    }
}

