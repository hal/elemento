/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.sample.flow;

import org.jboss.elemento.By;
import org.patternfly.component.content.ContentType;
import org.patternfly.component.switch_.Switch;
import com.google.gwt.core.client.EntryPoint;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.backtotop.BackToTop.backToTop;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListGroup.actionListGroup;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.component.list.List.list;
import static org.patternfly.component.list.ListItem.listItem;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageSection.pageSection;
import static org.patternfly.component.switch_.Switch.switch_;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.layout.flex.Direction.column;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.layout.flex.Gap.xl;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Sticky.top;
import static org.patternfly.style.Variable.componentVar;

public class Main implements EntryPoint {

    private static final String MAIN_ID = "flow-main-id";
    private static final String DESCRIPTION_0 = "This page tests parallel, sequential, repeated and nested execution " +
            "of asynchronous tasks.";
    private static final String DESCRIPTION_1 = "The parallel and sequential tests execute seven tasks (four tasks " +
            "fetch the current time from https://digidates.de/api/v1/unixtime, three tasks wait for a random time) and " +
            "cancel after a timeout of " + (Tasks.SEQUENCE_TIMEOUT / 1000) + " seconds.";
    private static final String DESCRIPTION_2 = "The repeated test fetches the current time from " +
            "https://digidates.de/api/v1/unixtime every " + Tasks.INTERVAL + " ms as long as the time doesn't end in " +
            Tasks.GOOD_TIME + " and cancels after a timeout of " + (Tasks.REPEAT_TIMEOUT / 1000) + " seconds.";
    private static final String DESCRIPTION_3 = "The nested test executes the seven tasks in parallel, " +
            "then in sequence and finally executes the repeated test.";

    HTMLElement tasksContainer;
    Switch randomFailure;
    Switch failFast;

    @Override
    public void onModuleLoad() {
        randomFailure = switch_("random-failures", "random-failures", true)
                .label("Produce random failures");
        failFast = switch_("fail-fast", "fail-fast", true)
                .label("Fail fast");
        randomFailure.onChange((event, component, value) -> failFast.disabled(!component.value()));

        body().add(page().css(modifier("no-sidebar"))
                .addMain(pageMain("flow-main").css(util("mt-lg"))
                        .addSection(pageSection().centerAligned()
                                .add(content().editorial()
                                        .add(title(1, "Flow"))
                                        .add(p().add(DESCRIPTION_0))
                                        .add(list(ul())
                                                .style(componentVar(component("list"), "li", "MarginTop").name,
                                                        "0.1rem")
                                                .addItem(listItem().text(DESCRIPTION_1))
                                                .addItem(listItem().text(DESCRIPTION_2))
                                                .addItem(listItem().text(DESCRIPTION_3)))))
                        .addSection(pageSection().centerAligned().sticky(breakpoints(default_, top))
                                .add(flex()
                                        .direction(breakpoints(default_, column))
                                        .gap(breakpoints(default_, xl))
                                        .addItem(flexItem()
                                                .add(flex().direction(breakpoints(default_, column))
                                                        .addItem(flexItem().add(randomFailure))
                                                        .addItem(flexItem().add(failFast))))
                                        .addItem(flexItem()
                                                .add(actionList()
                                                        .addItem(actionListGroup()
                                                                .addItem(actionListItem()
                                                                        .add(button("Parallel").primary()
                                                                                .onClick((e, c) -> parallel())))
                                                                .addItem(actionListItem()
                                                                        .add(button("Sequential").primary()
                                                                                .onClick((e, c) -> sequential())))
                                                                .addItem(actionListItem()
                                                                        .add(button("Repeat").primary()
                                                                                .onClick((e, c) -> repeat())))
                                                                .addItem(actionListItem()
                                                                        .add(button("Nested").primary()
                                                                                .onClick((e, c) -> nested())))
                                                                .addItem(actionListItem()
                                                                        .add(button("Clear").secondary()
                                                                                .onClick((e, c) -> clear()))))))))
                        .addSection(pageSection().centerAligned()
                                .add(tasksContainer = gallery().gutter().element())))
                .add(backToTop()
                        .scrollableSelector(By.id(MAIN_ID))));
    }

    void parallel() {
        String title = "Parallel " + flags();
        TasksElement tasksElement = new TasksElement(title, randomFailure.value(), failFast.value());
        div(tasksContainer).add(tasksElement);
        tasksElement.parallel();
    }

    void sequential() {
        String title = "Sequential " + flags();
        TasksElement tasksElement = new TasksElement(title, randomFailure.value(), failFast.value());
        div(tasksContainer).add(tasksElement);
        tasksElement.sequential();
    }

    void repeat() {
        String title = "Repeat " + flags();
        TasksElement tasksElement = new TasksElement(title, randomFailure.value(), failFast.value());
        div(tasksContainer).add(tasksElement);
        tasksElement.repeat();
    }

    void nested() {
        String title = "Nested " + flags();
        TasksElement tasksElement = new TasksElement(title, randomFailure.value(), failFast.value());
        div(tasksContainer).add(tasksElement);
        tasksElement.nested();
    }

    void clear() {
        removeChildrenFrom(tasksContainer);
    }

    private String flags() {
        StringBuilder builder = new StringBuilder("(");
        if (!randomFailure.value()) {
            builder.append("no ");
        }
        builder.append("failures");
        if (randomFailure.value()) {
            builder.append(", fail ");
            if (failFast.value()) {
                builder.append("fast");
            } else {
                builder.append("last");
            }
        }
        return builder.append(")").toString();
    }
}
