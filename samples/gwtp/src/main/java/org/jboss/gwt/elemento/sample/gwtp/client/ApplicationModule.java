/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.sample.gwtp.client;

import com.google.inject.Provider;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.DefaultPlace;
import com.gwtplatform.mvp.client.annotations.ErrorPlace;
import com.gwtplatform.mvp.client.annotations.UnauthorizedPlace;
import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.shared.proxy.RouteTokenFormatter;
import org.jboss.gwt.elemento.sample.common.BeanFactory;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

public class ApplicationModule extends AbstractPresenterModule {

    @Override
    protected void configure() {
        DefaultModule defaultModule = new DefaultModule.Builder()
                .tokenFormatter(RouteTokenFormatter.class)
                .build();
        install(defaultModule);

        bindConstant().annotatedWith(DefaultPlace.class).to(NameTokens.Todo);
        bindConstant().annotatedWith(ErrorPlace.class).to(NameTokens.Todo);
        bindConstant().annotatedWith(UnauthorizedPlace.class).to(NameTokens.Todo);

        bind(TodoMessages.class).asEagerSingleton();
        bind(BeanFactory.class).asEagerSingleton();

        bindTemplatedPresenterWidget(TodoItemPresenter.class,
                TodoItemPresenter.MyView.class,
                Templated_TodoItemView_Provider.class);

        bindTemplatedSingletonPresenterWidget(FooterPresenter.class,
                FooterPresenter.MyView.class,
                Templated_FooterView_Provider.class);

        bindTemplatedPresenter(ApplicationPresenter.class,
                ApplicationPresenter.MyView.class,
                Templated_ApplicationView_Provider.class,
                ApplicationPresenter.MyProxy.class);
    }

    @Provides
    TodoItemRepository provideRepository(BeanFactory beanFactory) {
        return new TodoItemRepository("todos-elemento", beanFactory);
    }


    protected <P extends PresenterWidget<?>, V extends View> void bindTemplatedSingletonPresenterWidget(
            Class<P> presenterImpl, Class<V> view, Class<? extends Provider<? extends V>> viewProvider) {
        bind(presenterImpl).in(Singleton.class);
        bind(view).toProvider(viewProvider).in(Singleton.class);
    }

    protected <P extends PresenterWidget<?>, V extends View> void bindTemplatedPresenterWidget(
            Class<P> presenterImpl, Class<V> view, Class<? extends Provider<? extends V>> viewProvider) {
        bind(presenterImpl);
        bind(view).toProvider(viewProvider);
    }

    protected <P extends Presenter<?, ?>, V extends View, Proxy_ extends Proxy<P>> void bindTemplatedPresenter(
            Class<P> presenterImpl, Class<V> view, Class<? extends Provider<? extends V>> viewProvider,
            Class<Proxy_> proxy) {
        bind(presenterImpl).in(Singleton.class);
        bind(view).toProvider(viewProvider).in(Singleton.class);
        bind(proxy).asEagerSingleton();
    }
}
