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

import com.google.inject.Inject;
import com.google.inject.Provider;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.presenter.slots.IsSingleSlot;
import com.gwtplatform.mvp.client.presenter.slots.PermanentSlot;
import com.gwtplatform.mvp.client.presenter.slots.Slot;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;

/**
 * @author Harald Pehl
 */
public class TodoPresenter extends Presenter<TodoPresenter.MyView, TodoPresenter.MyProxy> {

    // @formatter:off
    @ProxyStandard
    @NameToken(NameTokens.Todo)
    public interface MyProxy extends ProxyPlace<TodoPresenter> {}

    public interface MyView extends View {
        void setPresenter(TodoPresenter presenter);
        void update();
        void filter(Filter filter);
    }
    // @formatter:on


    public static final Slot<ItemPresenter> SLOT_ITEM_CONTENT = new Slot<>();
    public static final IsSingleSlot<FooterPresenter> SLOT_FOOTER_CONTENT = new PermanentSlot<>();

    private final Provider<ItemPresenter> itemPresenterProvider;
    private final FooterPresenter footerPresenter;

    @Inject
    public TodoPresenter(EventBus eventBus, MyView view, MyProxy proxy,
            Provider<ItemPresenter> itemPresenterProvider,
            FooterPresenter footerPresenter) {
        super(eventBus, view, proxy, RevealType.Root);
        this.itemPresenterProvider = itemPresenterProvider;
        this.footerPresenter = footerPresenter;
    }

    @Override
    protected void onBind() {
        super.onBind();
        getView().setPresenter(this);
        setInSlot(SLOT_FOOTER_CONTENT, footerPresenter);
    }

    @Override
    protected void onReset() {
        super.onReset();
        update();
    }

    @Override
    public void prepareFromRequest(PlaceRequest request) {
        super.prepareFromRequest(request);
        getView().filter(Filter.parseFilter(request.getParameter("filter", null)));
    }

    public void newTodo(String text) {
        ItemPresenter itemPresenter = itemPresenterProvider.get();
        itemPresenter.setText(text);
        addToSlot(SLOT_ITEM_CONTENT, itemPresenter);
    }

    public void update() {
        getView().update();
    }
}
