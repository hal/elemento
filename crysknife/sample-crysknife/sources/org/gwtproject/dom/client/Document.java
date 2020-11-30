/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.dom.client;

import elemental2.dom.*;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

/**
 * A Document is the root of the HTML hierarchy and holds the entire content. Besides providing
 * access to the hierarchy, it also provides some convenience methods for accessing certain sets of
 * information from the document.
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class Document extends Node {

  /**
   * Helper class to hold the document instance, so that we potentially don't run the Document class
   * initializer in every class which calls an instance method.
   */
  private static class DocumentHolder {
    private static Document doc;

    @JsProperty(name = "document", namespace = JsPackage.GLOBAL)
    private static native Document nativeGetDocument();

    @JsProperty(name = "$doc", namespace = "<window>")
    private static native Document nativeGet$doc();
  }

  /**
   * Gets the default document. This is the document in which the module is running.
   *
   * @return the default document
   */
  @JsOverlay
  public static Document get() {
    if (DocumentHolder.doc == null) {
      // Test if `$doc` is defined as a global variable, if so, use that. In GWT2, this evaluates
      // to `$wnd`, in J2CL+Closure it evaluates to goog.global.
      if ("undefined".equals(Js.typeof(DocumentHolder.nativeGet$doc()))) {
        DocumentHolder.doc = DocumentHolder.nativeGetDocument();
      } else {
        DocumentHolder.doc = DocumentHolder.nativeGet$doc();
      }
    }
    return DocumentHolder.doc;
  }

  protected Document() {}

  /**
   * Creates an &lt;a&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final AnchorElement createAnchorElement() {
    return (AnchorElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(AnchorElement.TAG);
  }

  /**
   * Creates an &lt;area&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final AreaElement createAreaElement() {
    return (AreaElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(AreaElement.TAG);
  }

  /**
   * Creates an &lt;audio&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final AudioElement createAudioElement() {
    return (AudioElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(AudioElement.TAG);
  }

  /**
   * Creates a &lt;base&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final BaseElement createBaseElement() {
    return (BaseElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(BaseElement.TAG);
  }

  /**
   * Creates a &lt;blockquote&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final QuoteElement createBlockQuoteElement() {
    return (QuoteElement)
        (Element)
            (Object)
                Js.<HTMLDocument>uncheckedCast(this).createElement(QuoteElement.TAG_BLOCKQUOTE);
  }

  /**
   * Creates a 'blur' event.
   *
   * @return the newly created event
   */
  @JsOverlay
  public final NativeEvent createBlurEvent() {
    return createHtmlEvent(BrowserEvents.BLUR, false, false);
  }

  /**
   * Creates a &lt;br&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final BRElement createBRElement() {
    return (BRElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(BRElement.TAG);
  }

  /**
   * Creates an &lt;input type='button'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createButtonInputElement() {
    return createInputElement("button");
  }

  /**
   * Creates a &lt;canvas&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final CanvasElement createCanvasElement() {
    return (CanvasElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(CanvasElement.TAG);
  }

  /**
   * Creates a &lt;caption&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableCaptionElement createCaptionElement() {
    return (TableCaptionElement)
        (Element)
            (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableCaptionElement.TAG);
  }

  /**
   * Creates a 'change' event.
   *
   * @return the newly created event
   */
  @JsOverlay
  public final NativeEvent createChangeEvent() {
    return createHtmlEvent(BrowserEvents.CHANGE, false, true);
  }

  /**
   * Creates an &lt;input type='checkbox'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createCheckInputElement() {
    HTMLInputElement e =
        (HTMLInputElement) Js.<HTMLDocument>uncheckedCast(this).createElement("INPUT");
    e.type = "checkbox";
    e.value = "on";
    return Js.uncheckedCast(e);
  }

  /**
   * Creates a 'click' event.
   *
   * <p>Note that this method does not allow the event's 'button' field to be specified, because not
   * all browsers support it reliably for click events.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createClickEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey) {
    // We disallow setting the button here, because IE doesn't provide the
    // button property for click events.
    return createMouseEvent(
        BrowserEvents.CLICK,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        NativeEvent.BUTTON_LEFT,
        null);
  }

  /**
   * Creates a &lt;col&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableColElement createColElement() {
    return (TableColElement)
        (Element)
            (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableColElement.TAG_COL);
  }

  /**
   * Creates a &lt;colgroup&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableColElement createColGroupElement() {
    return (TableColElement)
        (Element)
            (Object)
                Js.<HTMLDocument>uncheckedCast(this).createElement(TableColElement.TAG_COLGROUP);
  }

  /**
   * Creates a 'contextmenu' event.
   *
   * <p>Note: Contextmenu events will not dispatch properly on Firefox 2 and earlier.
   *
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createContextMenuEvent() {
    return createHtmlEvent(BrowserEvents.CONTEXTMENU, true, true);
  }

  /**
   * Creates a 'dblclick' event.
   *
   * <p>Note that this method does not allow the event's 'button' field to be specified, because not
   * all browsers support it reliably for click events.
   *
   * <p>Note that on some browsers, this may cause 'click' events to be synthesized as well.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createDblClickEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey) {
    // We disallow setting the button here, because IE doesn't provide the
    // button property for click events.
    return createMouseEvent(
        BrowserEvents.DBLCLICK,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        NativeEvent.BUTTON_LEFT,
        null);
  }

  /**
   * Creates a &lt;del&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ModElement createDelElement() {
    return (ModElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ModElement.TAG_DEL);
  }

  /**
   * Creates a &lt;div&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final DivElement createDivElement() {
    return (DivElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(DivElement.TAG);
  }

  /**
   * Creates a &lt;dl&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final DListElement createDLElement() {
    return (DListElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(DListElement.TAG);
  }

  /**
   * Creates a new element.
   *
   * @param tagName the tag name of the element to be created
   * @return the newly created element
   */
  @JsOverlay
  public final Element createElement(String tagName) {
    return (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(tagName);
  }

  /**
   * Creates an 'error' event.
   *
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createErrorEvent() {
    return createHtmlEvent(BrowserEvents.ERROR, false, false);
  }

  /**
   * Creates a &lt;fieldset&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final FieldSetElement createFieldSetElement() {
    return (FieldSetElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(FieldSetElement.TAG);
  }

  /**
   * Creates an &lt;input type='file'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createFileInputElement() {
    return createInputElement("file");
  }

  /**
   * Creates a 'focus' event.
   *
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createFocusEvent() {
    return createHtmlEvent(BrowserEvents.FOCUS, false, false);
  }

  /**
   * Creates a &lt;form&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final FormElement createFormElement() {
    return (FormElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(FormElement.TAG);
  }

  /**
   * Creates a &lt;frame&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final FrameElement createFrameElement() {
    return (FrameElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(FrameElement.TAG);
  }

  /**
   * Creates a &lt;frameset&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final FrameSetElement createFrameSetElement() {
    return (FrameSetElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(FrameSetElement.TAG);
  }

  /**
   * Creates a &lt;head&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final HeadElement createHeadElement() {
    return (HeadElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(HeadElement.TAG);
  }

  /**
   * Creates an &lt;h(n)&gt; element.
   *
   * @param n the type of heading, from 1 to 6 inclusive
   * @return the newly created element
   */
  @JsOverlay
  public final HeadingElement createHElement(int n) {
    assert (n >= 1) && (n <= 6);
    return (HeadingElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement("h" + n);
  }

  /**
   * Creates an &lt;input type='hidden'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createHiddenInputElement() {
    return createInputElement("hidden");
  }

  /**
   * Creates an &lt;hr&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final HRElement createHRElement() {
    return (HRElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(HRElement.TAG);
  }

  /**
   * Creates an event.
   *
   * <p>While this method may be used to create events directly, it is generally preferable to use
   * existing helper methods such as {@link #createFocusEvent()}.
   *
   * <p>Also, note that on Internet Explorer the 'canBubble' and 'cancelable' arguments will be
   * ignored (the event's behavior is inferred by the browser based upon its type).
   *
   * @param type the type of event (e.g., BrowserEvents.FOCUS, BrowserEvents.LOAD, etc)
   * @param canBubble <code>true</code> if the event should bubble
   * @param cancelable <code>true</code> if the event should be cancelable
   * @return the event object
   */
  @JsOverlay
  @Deprecated
  public final NativeEvent createHtmlEvent(String type, boolean canBubble, boolean cancelable) {
    EventInit details = EventInit.create();
    details.setBubbles(canBubble);
    details.setCancelable(cancelable);
    Event evt = new Event(type, details);
    return (NativeEvent) (Object) evt;
  }

  /**
   * Creates an &lt;iframe&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final IFrameElement createIFrameElement() {
    return (IFrameElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(IFrameElement.TAG);
  }

  /**
   * Creates an &lt;img&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ImageElement createImageElement() {
    return (ImageElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ImageElement.TAG);
  }

  /**
   * Creates an &lt;input type='image'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createImageInputElement() {
    return createInputElement("image");
  }

  /**
   * Creates an 'input' event.
   *
   * @return the newly created event
   */
  @JsOverlay
  public final NativeEvent createInputEvent() {
    return createHtmlEvent(BrowserEvents.INPUT, true, false);
  }

  /**
   * Creates an &lt;ins&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ModElement createInsElement() {
    return (ModElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ModElement.TAG_INS);
  }

  /**
   * Creates a key-code event ('keydown' or 'keyup').
   *
   * <p>While this method may be used to create events directly, it is generally preferable to use
   * existing helper methods such as {@link #createKeyDownEvent(boolean, boolean, boolean, boolean,
   * int)} or {@link #createKeyUpEvent(boolean, boolean, boolean, boolean, int)}.
   *
   * @param type the type of event (e.g., BrowserEvents.KEYDOWN, BrowserEvents.KEYPRESS, etc)
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param keyCode the key-code to be set on the event
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createKeyCodeEvent(
      String type,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int keyCode) {
    KeyboardEventInit init = KeyboardEventInit.create();
    init.setCtrlKey(ctrlKey);
    init.setAltKey(altKey);
    init.setShiftKey(shiftKey);
    init.setMetaKey(metaKey);
    init.setBubbles(true);
    Js.<JsPropertyMap<Integer>>uncheckedCast(init).set("keyCode", keyCode);

    KeyboardEvent event = new KeyboardEvent(type, init);
    return Js.uncheckedCast(event);
  }

  /**
   * Creates a 'keydown' event.
   *
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param keyCode the key-code to be set on the event
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createKeyDownEvent(
      boolean ctrlKey, boolean altKey, boolean shiftKey, boolean metaKey, int keyCode) {
    return createKeyCodeEvent(BrowserEvents.KEYDOWN, ctrlKey, altKey, shiftKey, metaKey, keyCode);
  }

  /**
   * Creates a 'keypress' event.
   *
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param charCode the char-code to be set on the event
   * @return the event object
   */
  @JsOverlay
  @Deprecated // do not use charcode
  public final NativeEvent createKeyPressEvent(
      boolean ctrlKey, boolean altKey, boolean shiftKey, boolean metaKey, int charCode) {
    final KeyboardEventInit init = KeyboardEventInit.create();
    init.setCtrlKey(ctrlKey);
    init.setAltKey(altKey);
    init.setShiftKey(shiftKey);
    init.setMetaKey(metaKey);
    init.setBubbles(true);
    Js.<JsPropertyMap<Integer>>uncheckedCast(init).set("charCode", charCode);

    KeyboardEvent event = new KeyboardEvent("keypress", init);
    return Js.uncheckedCast(event);
  }

  /**
   * Creates a 'keyup' event.
   *
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param keyCode the key-code to be set on the event
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createKeyUpEvent(
      boolean ctrlKey, boolean altKey, boolean shiftKey, boolean metaKey, int keyCode) {
    return createKeyCodeEvent(BrowserEvents.KEYUP, ctrlKey, altKey, shiftKey, metaKey, keyCode);
  }

  /**
   * Creates a &lt;label&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final LabelElement createLabelElement() {
    return (LabelElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(LabelElement.TAG);
  }

  /**
   * Creates a &lt;legend&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final LegendElement createLegendElement() {
    return (LegendElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(LegendElement.TAG);
  }

  /**
   * Creates a &lt;li&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final LIElement createLIElement() {
    return (LIElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(LIElement.TAG);
  }

  /**
   * Creates a &lt;link&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final LinkElement createLinkElement() {
    return (LinkElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(LinkElement.TAG);
  }

  /**
   * Creates a 'load' event.
   *
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createLoadEvent() {
    return createHtmlEvent(BrowserEvents.LOAD, false, false);
  }

  /**
   * Creates a &lt;map&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final MapElement createMapElement() {
    return (MapElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(MapElement.TAG);
  }

  /**
   * Creates a &lt;meta&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final MetaElement createMetaElement() {
    return (MetaElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(MetaElement.TAG);
  }

  /**
   * Creates a 'mousedown' event.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseDownEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button) {
    return createMouseEvent(
        BrowserEvents.MOUSEDOWN,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        null);
  }

  /**
   * Creates an mouse event.
   *
   * <p>While this method may be used to create events directly, it is generally preferable to use
   * existing helper methods such as {@link #createClickEvent(int, int, int, int, int, boolean,
   * boolean, boolean, boolean)} .
   *
   * <p>Also, note that on Internet Explorer the 'canBubble' and 'cancelable' arguments will be
   * ignored (the event's behavior is inferred by the browser based upon its type).
   *
   * @param type the type of event (e.g., BrowserEvents.FOCUS, BrowserEvents.LOAD, etc)
   * @param canBubble <code>true</code> if the event should bubble
   * @param cancelable <code>true</code> if the event should be cancelable
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @param relatedTarget the event's related target (only relevant for mouseover and mouseout
   *     events)
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseEvent(
      String type,
      boolean canBubble,
      boolean cancelable,
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button,
      Element relatedTarget) {
    int button1 = button;
    // Because Event.getButton() returns bitfield values [1, 4, 2] for [left,
    // middle, right], we need to translate them to the standard [0, 1, 2]
    // button constants.
    if (button1 == 1) {
      button1 = 0;
    } else if (button1 == 4) {
      button1 = 1;
    } else {
      button1 = 2;
    }

    MouseEventInit init = MouseEventInit.create();
    init.setButton(button1);
    init.setBubbles(canBubble);
    init.setCancelable(cancelable);
    init.setDetail(detail);
    init.setScreenX(screenX);
    init.setScreenY(screenY);
    init.setClientX(clientX);
    init.setClientY(clientY);
    init.setCtrlKey(ctrlKey);
    init.setAltKey(altKey);
    init.setShiftKey(shiftKey);
    init.setMetaKey(metaKey);
    init.setRelatedTarget(Js.uncheckedCast(relatedTarget));
    return Js.uncheckedCast(new MouseEvent(type, init));
  }

  /**
   * Creates a 'mousemove' event.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseMoveEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button) {
    return createMouseEvent(
        BrowserEvents.MOUSEMOVE,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        null);
  }

  /**
   * Creates a 'mouseout' event.
   *
   * <p>Note: The 'relatedTarget' parameter will be ignored on Firefox 2 and earlier.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @param relatedTarget the event's related target
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseOutEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button,
      Element relatedTarget) {
    return createMouseEvent(
        BrowserEvents.MOUSEOUT,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        relatedTarget);
  }

  /**
   * Creates a 'mouseover' event.
   *
   * <p>Note: The 'relatedTarget' parameter will be ignored on Firefox 2 and earlier.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @param relatedTarget the event's related target
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseOverEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button,
      Element relatedTarget) {
    return createMouseEvent(
        BrowserEvents.MOUSEOVER,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        relatedTarget);
  }

  /**
   * Creates a 'mouseup' event.
   *
   * @param detail the event's detail property
   * @param screenX the event's screen-relative x-position
   * @param screenY the event's screen-relative y-position
   * @param clientX the event's client-relative x-position
   * @param clientY the event's client-relative y-position
   * @param ctrlKey <code>true</code> if the ctrl key is depressed
   * @param altKey <code>true</code> if the alt key is depressed
   * @param shiftKey <code>true</code> if the shift key is depressed
   * @param metaKey <code>true</code> if the meta key is depressed
   * @param button the event's button property (values from {@link NativeEvent#BUTTON_LEFT} et al)
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createMouseUpEvent(
      int detail,
      int screenX,
      int screenY,
      int clientX,
      int clientY,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey,
      int button) {
    return createMouseEvent(
        BrowserEvents.MOUSEUP,
        true,
        true,
        detail,
        screenX,
        screenY,
        clientX,
        clientY,
        ctrlKey,
        altKey,
        shiftKey,
        metaKey,
        button,
        null);
  }

  /**
   * Creates a &lt;object&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ObjectElement createObjectElement() {
    return (ObjectElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ObjectElement.TAG);
  }

  /**
   * Creates an &lt;ol&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final OListElement createOLElement() {
    return (OListElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(OListElement.TAG);
  }

  /**
   * Creates an &lt;optgroup&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final OptGroupElement createOptGroupElement() {
    return (OptGroupElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(OptGroupElement.TAG);
  }

  /**
   * Creates an &lt;option&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final OptionElement createOptionElement() {
    return (OptionElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(OptionElement.TAG);
  }

  /**
   * Creates a &lt;param&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ParamElement createParamElement() {
    return (ParamElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ParamElement.TAG);
  }

  /**
   * Creates an &lt;input type='password'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createPasswordInputElement() {
    return createInputElement("password");
  }

  /**
   * Creates a &lt;p&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ParagraphElement createPElement() {
    return (ParagraphElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ParagraphElement.TAG);
  }

  /**
   * Creates a &lt;pre&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final PreElement createPreElement() {
    return (PreElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(PreElement.TAG);
  }

  /**
   * Creates a &lt;button type='button'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ButtonElement createPushButtonElement() {
    return createButtonElement("button");
  }

  /**
   * Creates a &lt;q&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final QuoteElement createQElement() {
    return (QuoteElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(QuoteElement.TAG_Q);
  }

  /**
   * Creates an &lt;input type='radio'&gt; element.
   *
   * @param name the name of the radio input (used for grouping)
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createRadioInputElement(String name) {
    return createInputRadioElement(name);
  }

  /**
   * Creates a &lt;button type='reset'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ButtonElement createResetButtonElement() {
    return createButtonElement("reset");
  }

  /**
   * Creates an &lt;input type='reset'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createResetInputElement() {
    return createInputElement("reset");
  }

  /**
   * Creates a &lt;script&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ScriptElement createScriptElement() {
    return (ScriptElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(ScriptElement.TAG);
  }

  /**
   * Creates a &lt;script&gt; element.
   *
   * @param source the source code to set inside the element
   * @return the newly created element
   */
  @JsOverlay
  public final ScriptElement createScriptElement(String source) {
    ScriptElement elem =
        (ScriptElement)
            (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement("script");
    elem.setText(source);
    return elem;
  }

  /**
   * Creates a 'scroll' event.
   *
   * <p>Note: Contextmenu events will not dispatch properly on Firefox 2 and earlier.
   *
   * @return the event object
   */
  @JsOverlay
  public final NativeEvent createScrollEvent() {
    return createHtmlEvent(BrowserEvents.SCROLL, false, false);
  }

  /**
   * Creates a &lt;select&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final SelectElement createSelectElement() {
    return (SelectElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(SelectElement.TAG);
  }

  /**
   * Creates an &lt;source&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final SourceElement createSourceElement() {
    return (SourceElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(SourceElement.TAG);
  }

  /**
   * Creates a &lt;span&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final SpanElement createSpanElement() {
    return (SpanElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(SpanElement.TAG);
  }

  /**
   * Creates a &lt;style&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final StyleElement createStyleElement() {
    return (StyleElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(StyleElement.TAG);
  }

  /**
   * Creates a &lt;button type='submit'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final ButtonElement createSubmitButtonElement() {
    return createButtonElement("submit");
  }

  /**
   * Creates an &lt;input type='submit'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createSubmitInputElement() {
    return createInputElement("submit");
  }

  /**
   * Creates a &lt;table&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableElement createTableElement() {
    return (TableElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableElement.TAG);
  }

  /**
   * Creates a &lt;tbody&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableSectionElement createTBodyElement() {
    return (TableSectionElement)
        (Element)
            (Object)
                Js.<HTMLDocument>uncheckedCast(this).createElement(TableSectionElement.TAG_TBODY);
  }

  /**
   * Creates a &lt;td&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableCellElement createTDElement() {
    return (TableCellElement)
        (Element)
            (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableCellElement.TAG_TD);
  }

  /**
   * Creates a &lt;textarea&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TextAreaElement createTextAreaElement() {
    return (TextAreaElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TextAreaElement.TAG);
  }

  /**
   * Creates an &lt;input type='text'&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final InputElement createTextInputElement() {
    return createInputElement("text");
  }

  /**
   * Creates a text node.
   *
   * @param data the text node's initial text
   * @return the newly created element
   */
  public final native Text createTextNode(String data);

  /**
   * Creates a &lt;tfoot&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableSectionElement createTFootElement() {
    return (TableSectionElement)
        (Element)
            (Object)
                Js.<HTMLDocument>uncheckedCast(this).createElement(TableSectionElement.TAG_TFOOT);
  }

  /**
   * Creates a &lt;thead&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableSectionElement createTHeadElement() {
    return (TableSectionElement)
        (Element)
            (Object)
                Js.<HTMLDocument>uncheckedCast(this).createElement(TableSectionElement.TAG_THEAD);
  }

  /**
   * Creates a &lt;th&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableCellElement createTHElement() {
    return (TableCellElement)
        (Element)
            (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableCellElement.TAG_TH);
  }

  /**
   * Creates a &lt;title&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TitleElement createTitleElement() {
    return (TitleElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TitleElement.TAG);
  }

  /**
   * Creates a &lt;tr&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final TableRowElement createTRElement() {
    return (TableRowElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(TableRowElement.TAG);
  }

  /**
   * Creates a &lt;ul&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final UListElement createULElement() {
    return (UListElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(UListElement.TAG);
  }

  /**
   * Creates an identifier guaranteed to be unique within this document.
   *
   * <p>This is useful for allocating element id's.
   *
   * @return a unique identifier
   */
  @JsOverlay
  public final String createUniqueId() {
    // In order to force uid's to be document-unique across multiple modules,
    // we hang a counter from the document.
    if (Js.isFalsy(this.gwtUid)) {
      this.gwtUid = 1;
    }

    return "gwt-uid-" + this.gwtUid++;
  }

  @JsProperty(name = "gwt_uid")
  private double gwtUid;

  /**
   * Creates a &lt;video&gt; element.
   *
   * @return the newly created element
   */
  @JsOverlay
  public final VideoElement createVideoElement() {
    return (VideoElement)
        (Element) (Object) Js.<HTMLDocument>uncheckedCast(this).createElement(VideoElement.TAG);
  }

  /**
   * Enables or disables scrolling of the document.
   *
   * @param enable whether scrolling should be enabled or disabled
   */
  @JsOverlay
  public final void enableScrolling(boolean enable) {
    getViewportElement().getStyle().setProperty("overflow", enable ? "auto" : "hidden");
  }

  /**
   * The element that contains the content for the document. In documents with BODY contents,
   * returns the BODY element.
   *
   * @return the document's body
   */
  @JsProperty
  public final native BodyElement getBody();

  /**
   * Returns the left offset between the absolute coordinate system and the body's positioning
   * context. This method is useful for positioning children of the body element in absolute
   * coordinates.
   *
   * <p>For example, to position an element directly under the mouse cursor (assuming you are
   * handling a mouse event), do the following:
   *
   * <pre>
   * Event event;
   * Document doc;
   * DivElement child;  // assume absolutely-positioned child of the body
   *
   * // Get the event location in absolute coordinates.
   * int absX = event.getClientX() + Window.getScrollLeft();
   * int absY = event.getClientY() + Window.getScrollTop();
   *
   * // Position the child element, adjusting for the difference between the
   * // absolute coordinate system and the body's positioning coordinates.
   * child.getStyle().setPropertyPx("left", absX - doc.getBodyOffsetLeft());
   * child.getStyle().setPropertyPx("top", absY - doc.getBodyOffsetTop());
   * </pre>
   *
   * @return the left offset of the body's positioning coordinate system
   */
  @JsOverlay
  public final int getBodyOffsetLeft() {
    return Js.<HTMLDocument>uncheckedCast(this).documentElement.clientLeft;
  }

  /**
   * Returns the top offset between the absolute coordinate system and the body's positioning
   * context. This method is useful for positioning children of the body element in absolute
   * coordinates.
   *
   * @return the top offset of the body's positioning coordinate system
   * @see #getBodyOffsetLeft()
   */
  @JsOverlay
  public final int getBodyOffsetTop() {
    return Js.<HTMLDocument>uncheckedCast(this).documentElement.clientTop;
  }

  /**
   * The height of the document's client area.
   *
   * @return the document's client height
   */
  @JsOverlay
  public final int getClientHeight() {
    return getViewportElement().getClientHeight();
  }

  /**
   * The width of the document's client area.
   *
   * @return the document's client width
   */
  @JsOverlay
  public final int getClientWidth() {
    return getViewportElement().getClientWidth();
  }

  /**
   * Gets the document's "compatibility mode", typically used for determining whether the document
   * is in "quirks" or "strict" mode.
   *
   * @return one of "BackCompat" or "CSS1Compat"
   */
  @JsProperty
  public final native String getCompatMode();

  /**
   * Gets the document's element. This is typically the &lt;html&gt; element.
   *
   * @return the document element
   */
  @JsProperty
  public final native Element getDocumentElement();

  /**
   * The domain name of the server that served the document, or null if the server cannot be
   * identified by a domain name.
   *
   * @return the document's domain, or <code>null</code> if none exists
   */
  @JsProperty
  public final native String getDomain();

  /**
   * Returns the {@link Element} whose id is given by elementId. If no such element exists, returns
   * null. Behavior is not defined if more than one element has this id.
   *
   * @param elementId the unique id value for an element
   * @return the matching element
   */
  public final native Element getElementById(String elementId);

  /**
   * Returns a {@link NodeList} of all the {@link Element Elements} with a given tag name in the
   * order in which they are encountered in a preorder traversal of the document tree.
   *
   * @param tagName the name of the tag to match on (the special value <code>"*"</code> matches all
   *     tags)
   * @return a list containing all the matched elements
   */
  public final native NodeList<Element> getElementsByTagName(String tagName);

  /**
   * The element that contains metadata about the document, including links to or definitions of
   * scripts and style sheets.
   *
   * @return the document's head
   */
  @JsProperty
  public final native HeadElement getHead();

  /**
   * Returns the URI of the page that linked to this page. The value is an empty string if the user
   * navigated to the page directly (not through a link, but, for example, via a bookmark).
   *
   * @return the referrer URI
   */
  @JsProperty
  public final native String getReferrer();

  /**
   * The height of the scrollable area of the document.
   *
   * @return the height of the document's scrollable area
   */
  @JsOverlay
  public final int getScrollHeight() {
    // TODO(dramaix): Use document.scrollingElement when its available. See getScrollLeft().
    return getViewportElement().getScrollHeight();
  }

  /**
   * The number of pixels that the document's content is scrolled from the left.
   *
   * <p>If the document is in RTL mode, this method will return a negative value of the number of
   * pixels scrolled from the right.
   *
   * @return the document's left scroll position
   */
  @JsOverlay
  public final int getScrollLeft() {
    return ensureDocumentScrollingElement().getScrollLeft();
  }

  /**
   * The number of pixels that the document's content is scrolled from the top.
   *
   * @return the document's top scroll position
   */
  @JsOverlay
  public final int getScrollTop() {
    return ensureDocumentScrollingElement().getScrollTop();
  }

  /**
   * The width of the scrollable area of the document.
   *
   * @return the width of the document's scrollable area
   */
  @JsOverlay
  public final int getScrollWidth() {
    // TODO(dramaix): Use document.scrollingElement when its available. See getScrollLeft().
    return getViewportElement().getScrollWidth();
  }

  /**
   * Gets the title of a document as specified by the TITLE element in the head of the document.
   *
   * @return the document's title
   */
  @JsProperty
  public final native String getTitle();

  /**
   * Gets the absolute URI of this document.
   *
   * @return the document URI
   */
  @JsProperty
  public final native String getURL();

  /**
   * Imports a node from another document to this document.
   *
   * <p>The returned node has no parent; ({@link Node#getParentNode()} is null). The source node is
   * not altered or removed from the original document; this method creates a new copy of the source
   * node.
   *
   * <p>For all nodes, importing a node creates a node object owned by the importing document, with
   * attribute values identical to the source node's nodeName and nodeType, plus the attributes
   * related to namespaces (prefix, localName, and namespaceURI). As in the cloneNode operation on a
   * Node, the source node is not altered. Additional information is copied as appropriate to the
   * nodeType, attempting to mirror the behavior expected if a fragment of XML or HTML source was
   * copied from one document to another, recognizing that the two documents may have different DTDs
   * in the XML case.
   *
   * @param node the node to import
   * @param deep If <code>true</code>, recursively import the subtree under the specified node; if
   *     <code>false</code>, import only the node itself, as explained above
   */
  public final native void importNode(Node node, boolean deep);

  /**
   * Determines whether the document's "compatMode" is "CSS1Compat". This is normally described as
   * "strict" mode.
   *
   * @return <code>true</code> if the document is in CSS1Compat mode
   */
  @JsOverlay
  public final boolean isCSS1Compat() {
    return getCompatMode().equals("CSS1Compat");
  }

  /**
   * Sets the number of pixels that the document's content is scrolled from the left.
   *
   * @param left the document's left scroll position
   */
  @JsOverlay
  public final void setScrollLeft(int left) {
    ensureDocumentScrollingElement().setScrollLeft(left);
  }

  /**
   * Sets the number of pixels that the document's content is scrolled from the top.
   *
   * @param top the document's top scroll position
   */
  @JsOverlay
  public final void setScrollTop(int top) {
    ensureDocumentScrollingElement().setScrollTop(top);
  }

  /**
   * Sets the title of a document as specified by the TITLE element in the head of the document.
   *
   * @param title the document's new title
   */
  @JsProperty
  public final native void setTitle(String title);

  /**
   * Gets the document's viewport element. This is the element that should be used to for scrolling
   * and client-area measurement. In quirks-mode it is the &lt;body&gt; element, while in
   * standards-mode it is the &lt;html&gt; element.
   *
   * <p>This is package-protected because the viewport is
   *
   * @return the document's viewport element
   */
  @JsOverlay
  private Element getViewportElement() {
    return isCSS1Compat() ? getDocumentElement() : getBody();
  }

  @JsOverlay
  private ButtonElement createButtonElement(String type) {
    HTMLButtonElement e =
        (HTMLButtonElement) Js.<HTMLDocument>uncheckedCast(this).createElement("BUTTON");
    e.type = type;
    return Js.uncheckedCast(e);
  }

  @JsOverlay
  private InputElement createInputElement(String type) {
    HTMLInputElement e = (HTMLInputElement) ((HTMLDocument) (Object) this).createElement("INPUT");
    e.type = type;
    return Js.uncheckedCast(e);
  }

  @JsOverlay
  private InputElement createInputRadioElement(String name) {
    HTMLInputElement elem =
        (HTMLInputElement) ((HTMLDocument) (Object) this).createElement("INPUT");
    elem.type = "radio";
    elem.name = name;
    elem.value = "on";
    return Js.uncheckedCast(elem);
  }

  @JsOverlay
  private Element ensureDocumentScrollingElement() {
    // Uses http://dev.w3.org/csswg/cssom-view/#dom-document-scrolling element to
    // avoid trying to guess about browser behavior.
    Element scrollingElement =
        Js.uncheckedCast(Js.<HTMLDocument>uncheckedCast(this).scrollingElement);
    if (scrollingElement != null) {
      return scrollingElement;
    }
    scrollingElement = getViewportElement();
    // In some case (e.g SVG document and old Webkit browsers), scrollingElement can
    // still be null. In this case, default to documentElement.
    return scrollingElement != null ? scrollingElement : getDocumentElement();
  }
}

