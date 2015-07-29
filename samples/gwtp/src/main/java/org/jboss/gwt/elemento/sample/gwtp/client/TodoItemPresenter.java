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

import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.View;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import javax.inject.Inject;

public class TodoItemPresenter extends PresenterWidget<TodoItemPresenter.MyView> {

    // @formatter:off
    public interface MyView extends View, HasPresenter<TodoItemPresenter> {
        void attachId(String id);
        void update(TodoItem item);
    }
    // @formatter:on


    private final ApplicationPresenter applicationPresenter;
    private final TodoItemRepository repository;
    private TodoItem item;

    @Inject
    public TodoItemPresenter(final EventBus eventBus, final MyView view,
            ApplicationPresenter applicationPresenter, TodoItemRepository repository) {
        super(eventBus, view);
        this.applicationPresenter = applicationPresenter;
        this.repository = repository;
    }

    @Override
    protected void onBind() {
        super.onBind();
        getView().setPresenter(this);
    }

    @Override
    protected void onReveal() {
        super.onReveal();
        getView().attachId(item.getId());
    }

    @Override
    protected void onReset() {
        super.onReset();
        getView().update(item);

    }

    public void completed(final boolean completed) {
        repository.complete(item, completed);
        getView().update(item);
        applicationPresenter.update();
    }

    public void rename(final String text) {
        repository.rename(item, text);
        getView().update(item);
    }

    public void destroy() {
        repository.remove(item);
        applicationPresenter.update();
    }

    public void setItem(final TodoItem item) {
        this.item = item;
    }

    public TodoItem getItem() {
        return item;
    }
}
