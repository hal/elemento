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
package org.jboss.elemento;

/**
 * Roles as recommended by the <a href="">MDN</a>. This is a subset of all possible roles defined by the <a
 * href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions">W3C</a>.
 */
@SuppressWarnings("SpellCheckingInspection")
public enum Role {
    alert("alert"),
    alertdialog("alertdialog"),
    combobox("combobox"),
    dialog("dialog"),
    feed("feed"),
    log("log"),
    marquee("marquee"),
    math("math"),
    menu("menu"),
    menubar("menubar"),
    none("none"),
    note("note"),
    presentation("presentation"),
    scrollbar("scrollbar"),
    searchbox("searchbox"),
    separator("separator"),
    slider("slider"),
    spinbutton("spinbutton"),
    status("status"),
    switch_("switch"),
    tab("tab"),
    tablist("tablist"),
    tabpanel("tabpanel"),
    timer("timer"),
    toolbar("toolbar"),
    tooltip("tooltip"),
    tree("tree"),
    treegrid("treegrid"),
    treeitem("treeitem"),
    ;

    public final String name;

    Role(String name) {
        this.name = name;
    }
}
