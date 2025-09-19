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
