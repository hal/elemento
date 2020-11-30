package org.jboss.elemento.sample.crysknife;

import io.crysknife.client.internal.Factory;
import javax.inject.Provider;
import io.crysknife.client.internal.OnFieldAccessed;
import io.crysknife.client.Reflect;
import io.crysknife.client.Interceptor;

public class TodoRepository_Factory implements Factory<TodoRepository> {

    private Interceptor interceptor;

    @Override()
    public TodoRepository get() {
        if (this.instance != null)
            return this.instance;
        this.interceptor = new Interceptor(new TodoRepository());
        this.instance = this.interceptor.getProxy();
        return this.instance;
    }

    private TodoRepository instance;

    private TodoRepository_Factory() {
    }

    public static TodoRepository_Factory create() {
        return new TodoRepository_Factory();
    }
}

