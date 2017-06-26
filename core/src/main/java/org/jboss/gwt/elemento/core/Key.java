package org.jboss.gwt.elemento.core;

import java.util.HashMap;
import java.util.Map;

import elemental2.dom.KeyboardEvent;

/**
 * Selected Key values according to <a href="https://www.w3.org/TR/DOM-Level-3-Events-key/">https://www.w3.org/TR/DOM-Level-3-Events-key/</a>.
 *
 * @see <a href="https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values">https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values</a>
 */
public enum Key {

    Accept("Accept"),
    Again("Again"),
    Alt("Alt"),
    AltGraph("AltGraph"),
    ArrowDown("ArrowDown", new String[]{"Down"}),
    ArrowLeft("ArrowLeft", new String[]{"Left"}),
    ArrowRight("ArrowRight", new String[]{"Right"}),
    ArrowUp("ArrowUp", new String[]{"Up"}),
    Attn("Attn"),
    Backspace("Backspace"),
    BrightnessDown("BrightnessDown"),
    BrightnessUp("BrightnessUp"),
    Cancel("Cancel"),
    CapsLock("CapsLock"),
    Clear("Clear"),
    ContextMenu("ContextMenu", new String[]{"Apps"}),
    Control("Control"),
    Copy("Copy"),
    CrSel("CrSel", new String[]{"Crsel"}),
    Cut("Cut"),
    Delete("Delete", new String[]{"Del"}),
    Eject("Eject"),
    End("End"),
    Enter("Enter"),
    EraseEof("EraseEof"),
    Escape("Escape", new String[]{"Esc"}),
    Execute("Execute"),
    ExSel("ExSel", new String[]{"Exsel"}),
    F1("F1"),
    F10("F10"),
    F11("F11"),
    F13("F13"),
    F14("F14"),
    F15("F15"),
    F16("F16"),
    F17("F17"),
    F18("F18"),
    F19("F19"),
    F2("F2"),
    F20("F20"),
    F3("F3"),
    F4("F4"),
    F5("F5"),
    F6("F6"),
    F7("F7"),
    F8("F8"),
    F9("F9"),
    Find("Find"),
    Finish("Finish"),
    Fn("Fn"),
    FnLock("FnLock"),
    Help("Help"),
    Hibernate("Hibernate"),
    Home("Home"),
    Insert("Insert"),
    LogOff("LogOff"),
    Meta("Meta"),
    NumLock("NumLock"),
    PageDown("PageDown"),
    PageUp("PageUp"),
    Paste("Paste"),
    Pause("Pause"),
    Play("Play"),
    Power("Power"),
    PowerOff("PowerOff"),
    PrintScreen("PrintScreen"),
    Props("Props"),
    Redo("Redo"),
    ScrollLock("ScrollLock", new String[]{"Scroll"}),
    Select("Select"),
    Shift("Shift"),
    Soft1("Soft1"),
    Soft2("Soft2"),
    Soft3("Soft3"),
    Soft4("Soft4"),
    Spacebar(" ", new String[]{"Spacebar"}),
    Standby("Standby"),
    Symbol("Symbol"),
    SymbolLock("SymbolLock"),
    Tab("Tab"),
    Undo("Undo"),
    Unidentified(""),
    WakeUp("WakeUp"),
    ZoomIn("ZoomIn"),
    ZoomOut("ZoomOut");


    private static Map<String, Key> keys = new HashMap<>();

    static {
        for (Key key : Key.values()) {
            keys.put(key.key, key);
            if (key.alternatives != null) {
                for (String alternative : key.alternatives) {
                    keys.put(alternative, key);
                }
            }
        }
    }

    public static Key fromEvent(KeyboardEvent event) {
        return keys.getOrDefault(event.key, Unidentified);
    }


    private final String key;
    private final String[] alternatives;

    Key(final String key) {
        this(key, null);
    }

    Key(final String key, final String[] alternatives) {
        this.key = key;
        this.alternatives = alternatives;
    }

    public boolean match(KeyboardEvent event) {
        if (event.key.equals(key)) {
            return true;
        }
        if (alternatives != null) {
            for (String alternative : alternatives) {
                if (event.key.equals(alternative)) {
                    return true;
                }
            }
        }
        return false;
    }
}
