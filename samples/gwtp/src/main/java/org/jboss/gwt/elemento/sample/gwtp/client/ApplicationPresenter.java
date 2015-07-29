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
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * @author Harald Pehl
 */
public class ApplicationPresenter extends Presenter<ApplicationPresenter.MyView, ApplicationPresenter.MyProxy> {

    // @formatter:off
    @ProxyStandard
    @NameToken(NameTokens.Todo)
    public interface MyProxy extends ProxyPlace<ApplicationPresenter> {}

    public interface MyView extends View, HasPresenter<ApplicationPresenter> {
        void update(final Filter filter);
        void filter(Filter filter);
    }
    // @formatter:on


    public static final Slot<TodoItemPresenter> SLOT_ITEM_CONTENT = new Slot<>();
    public static final IsSingleSlot<FooterPresenter> SLOT_FOOTER_CONTENT = new PermanentSlot<>();

    private final Provider<TodoItemPresenter> itemPresenterProvider;
    private final FooterPresenter footerPresenter;
    private final TodoItemRepository repository;
    private final List<TodoItemPresenter> itemPresenters;
    private Filter filter;


    @Inject
    public ApplicationPresenter(EventBus eventBus, MyView view, MyProxy proxy,
            Provider<TodoItemPresenter> itemPresenterProvider, FooterPresenter footerPresenter,
            TodoItemRepository repository) {
        super(eventBus, view, proxy, RevealType.Root);
        this.itemPresenterProvider = itemPresenterProvider;
        this.footerPresenter = footerPresenter;
        this.repository = repository;
        this.itemPresenters = new ArrayList<>();
    }

    @Override
    protected void onBind() {
        super.onBind();
        getView().setPresenter(this);
    }

    @Override
    protected void onReveal() {
        super.onReveal();
        setInSlot(SLOT_FOOTER_CONTENT, footerPresenter);
    }

    @Override
    protected void onReset() {
        super.onReset();
        for (TodoItem item : repository.items()) {
            TodoItemPresenter itemPresenter = itemPresenterProvider.get();
            itemPresenter.setItem(item);
            addToSlot(SLOT_ITEM_CONTENT, itemPresenter);
            itemPresenters.add(itemPresenter);
        }
        update();
    }

    @Override
    public void prepareFromRequest(PlaceRequest request) {
        super.prepareFromRequest(request);
        filter = Filter.parseFilter(request.getParameter("filter", null));
    }

    public void newTodo(String text) {
        TodoItemPresenter itemPresenter = itemPresenterProvider.get();
        itemPresenter.setItem(repository.add(text));
        addToSlot(SLOT_ITEM_CONTENT, itemPresenter);
        itemPresenters.add(itemPresenter);
        getView().update(filter);
    }

    public void toggleAll(final boolean checked) {
        for (TodoItemPresenter itemPresenter : itemPresenters) {
            itemPresenter.completed(checked);
        }
    }

    public void clearCompleted() {
        Set<String> ids = new HashSet<>();
        for (Iterator<TodoItemPresenter> iterator = itemPresenters.iterator(); iterator.hasNext(); ) {
            TodoItemPresenter itemPresenter = iterator.next();
            if (itemPresenter.getItem().isCompleted()) {
                ids.add(itemPresenter.getItem().getId());
                iterator.remove();
            }
        }
        repository.removeAll(ids);
    }

    public void update() {
        getView().filter(filter);
        getView().update(filter);
    }
}
