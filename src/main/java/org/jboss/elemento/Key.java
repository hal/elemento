/*
 *  Copyright 2022 Red Hat
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

import java.util.HashMap;
import java.util.Map;

import elemental2.dom.Event;
import elemental2.dom.KeyboardEvent;

/**
 * Selected key values according to
 * <a href="https://www.w3.org/TR/DOM-Level-3-Events-key/">https://www.w3.org/TR/DOM-Level-3-Events-key/</a>.
 *
 * @see <a href=
 *      "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values">https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values</a>
 */
public enum Key {

    Accept("Accept"), Again("Again"), Alt("Alt"), AltGraph("AltGraph"), ArrowDown("ArrowDown",
            new String[] { "Down" }), ArrowLeft("ArrowLeft", new String[] { "Left" }), ArrowRight("ArrowRight", new String[] {
                    "Right" }), ArrowUp("ArrowUp", new String[] { "Up" }), Attn("Attn"), Backspace("Backspace"), BrightnessDown(
                            "BrightnessDown"), BrightnessUp("BrightnessUp"), Cancel("Cancel"), CapsLock("CapsLock"), Clear(
                                    "Clear"), ContextMenu("ContextMenu", new String[] { "Apps" }), Control("Control"), Copy(
                                            "Copy"), CrSel("CrSel", new String[] { "Crsel" }), Cut("Cut"), Delete("Delete",
                                                    new String[] { "Del" }), Eject("Eject"), End("End"), Enter(
                                                            "Enter"), EraseEof("EraseEof"), Escape("Escape",
                                                                    new String[] { "Esc" }), Execute("Execute"), ExSel("ExSel",
                                                                            new String[] { "Exsel" }), F1("F1"), F10(
                                                                                    "F10"), F11("F11"), F13("F13"), F14(
                                                                                            "F14"), F15("F15"), F16("F16"), F17(
                                                                                                    "F17"), F18("F18"), F19(
                                                                                                            "F19"), F2(
                                                                                                                    "F2"), F20(
                                                                                                                            "F20"), F3(
                                                                                                                                    "F3"), F4(
                                                                                                                                            "F4"), F5(
                                                                                                                                                    "F5"), F6(
                                                                                                                                                            "F6"), F7(
                                                                                                                                                                    "F7"), F8(
                                                                                                                                                                            "F8"), F9(
                                                                                                                                                                                    "F9"), Find(
                                                                                                                                                                                            "Find"), Finish(
                                                                                                                                                                                                    "Finish"), Fn(
                                                                                                                                                                                                            "Fn"), FnLock(
                                                                                                                                                                                                                    "FnLock"), Help(
                                                                                                                                                                                                                            "Help"), Hibernate(
                                                                                                                                                                                                                                    "Hibernate"), Home(
                                                                                                                                                                                                                                            "Home"), Insert(
                                                                                                                                                                                                                                                    "Insert"), LogOff(
                                                                                                                                                                                                                                                            "LogOff"), Meta(
                                                                                                                                                                                                                                                                    "Meta"), NumLock(
                                                                                                                                                                                                                                                                            "NumLock"), PageDown(
                                                                                                                                                                                                                                                                                    "PageDown"), PageUp(
                                                                                                                                                                                                                                                                                            "PageUp"), Paste(
                                                                                                                                                                                                                                                                                                    "Paste"), Pause(
                                                                                                                                                                                                                                                                                                            "Pause"), Play(
                                                                                                                                                                                                                                                                                                                    "Play"), Power(
                                                                                                                                                                                                                                                                                                                            "Power"), PowerOff(
                                                                                                                                                                                                                                                                                                                                    "PowerOff"), PrintScreen(
                                                                                                                                                                                                                                                                                                                                            "PrintScreen"), Props(
                                                                                                                                                                                                                                                                                                                                                    "Props"), Redo(
                                                                                                                                                                                                                                                                                                                                                            "Redo"), ScrollLock(
                                                                                                                                                                                                                                                                                                                                                                    "ScrollLock",
                                                                                                                                                                                                                                                                                                                                                                    new String[] {
                                                                                                                                                                                                                                                                                                                                                                            "Scroll" }), Select(
                                                                                                                                                                                                                                                                                                                                                                                    "Select"), Shift(
                                                                                                                                                                                                                                                                                                                                                                                            "Shift"), Soft1(
                                                                                                                                                                                                                                                                                                                                                                                                    "Soft1"), Soft2(
                                                                                                                                                                                                                                                                                                                                                                                                            "Soft2"), Soft3(
                                                                                                                                                                                                                                                                                                                                                                                                                    "Soft3"), Soft4(
                                                                                                                                                                                                                                                                                                                                                                                                                            "Soft4"), Spacebar(
                                                                                                                                                                                                                                                                                                                                                                                                                                    " ",
                                                                                                                                                                                                                                                                                                                                                                                                                                    new String[] {
                                                                                                                                                                                                                                                                                                                                                                                                                                            "Spacebar" }), Standby(
                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Standby"), Symbol(
                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Symbol"), SymbolLock(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "SymbolLock"), Tab(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Tab"), Undo(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Undo"), Unidentified(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ""), WakeUp(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "WakeUp"), ZoomIn(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "ZoomIn"), ZoomOut(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "ZoomOut");

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

    /** Returns the key for the specified event or {@link #Unidentified} if no matching event could be found. */
    public static Key fromEvent(KeyboardEvent event) {
        return keys.getOrDefault(event.key, Unidentified);
    }

    private final String key;
    private final String[] alternatives;

    Key(String key) {
        this(key, null);
    }

    Key(String key, String[] alternatives) {
        this.key = key;
        this.alternatives = alternatives;
    }

    /** Whether the event is a keyboard event and matches to the key of the event. */
    public boolean match(Event event) {
        return event instanceof KeyboardEvent && match(((KeyboardEvent) event));
    }

    /** Whether the event matches to the key of the event. */
    public boolean match(KeyboardEvent event) {
        if (key.equals(event.key)) {
            return true;
        }
        if (alternatives != null) {
            for (String alternative : alternatives) {
                if (alternative.equals(event.key)) {
                    return true;
                }
            }
        }
        return false;
    }
}
