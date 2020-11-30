package io.crysknife.client;

import io.crysknife.client.internal.Factory;
import javax.inject.Provider;
import io.crysknife.client.internal.OnFieldAccessed;

public class BeanManager_Factory implements Factory<BeanManager> {

    private Interceptor interceptor;

    @Override()
    public BeanManager get() {
        return io.crysknife.client.BeanManagerImpl.get();
    }

    private BeanManager_Factory() {
    }

    public static BeanManager_Factory create() {
        return new BeanManager_Factory();
    }
}

