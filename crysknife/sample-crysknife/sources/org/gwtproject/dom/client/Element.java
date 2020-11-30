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

import elemental2.core.Global;
import elemental2.dom.HTMLElement;
import elemental2.dom.ViewCSS;
import java.util.Objects;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.gwtproject.core.client.JavaScriptObject;
import org.gwtproject.safehtml.shared.SafeHtml;
import org.gwtproject.safehtml.shared.annotations.IsSafeHtml;

/** All HTML element interfaces derive from this class. */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class Element extends Node {

  /**
   * Fast helper method to convert small doubles to 32-bit int.
   *
   * <p>Note: you should be aware that this uses JavaScript rounding and thus does NOT provide the
   * same semantics as <code>int b = (int) someDouble;</code>. In particular, if x is outside the
   * range [-2^31,2^31), then toInt32(x) would return a value equivalent to x modulo 2^32, whereas
   * (int) x would evaluate to either MIN_INT or MAX_INT.
   */
  @JsOverlay
  private static int toInt32(double val) {
    return Js.coerceToInt(val);
  }

  private static class UserAgentHolder {
    private static final boolean IS_SAFARI = "safari".equals(System.getProperty("user.agent"));
  }
  /** Constant returned from {@link #getDraggable()}. */
  @JsOverlay public static final String DRAGGABLE_AUTO = "auto";

  /** Constant returned from {@link #getDraggable()}. */
  @JsOverlay public static final String DRAGGABLE_FALSE = "false";

  /** Constant returned from {@link #getDraggable()}. */
  @JsOverlay public static final String DRAGGABLE_TRUE = "true";

  /**
   * Assert that the given {@link Node} is an {@link Element} and automatically typecast it.
   *
   * @param o the object to assert is an element
   * @return the object, cast to an element
   */
  @JsOverlay
  public static Element as(JavaScriptObject o) {
    assert is(o);
    return (Element) o;
  }

  /**
   * Assert that the given {@link Node} is an {@link Element} and automatically typecast it.
   *
   * @param node the node to assert is an element
   * @return the node, cast to an element
   */
  @JsOverlay
  public static Element as(Node node) {
    assert is(node);
    return (Element) node;
  }

  /**
   * Determines whether the given {@link JavaScriptObject} can be cast to an {@link Element}. A
   * <code>null</code> object will cause this method to return <code>false</code>.
   *
   * @param o the object to check if it is an instance of this type
   * @return true of the object is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(JavaScriptObject o) {
    if (Node.is(o)) {
      return is((Node) o);
    }
    return false;
  }

  /**
   * Determine whether the given {@link Node} can be cast to an {@link Element}. A <code>null</code>
   * node will cause this method to return <code>false</code>.
   *
   * @param node the node to check if it is an instance of this type
   * @return true if the node is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(Node node) {
    return (node != null) && (node.getNodeType() == Node.ELEMENT_NODE);
  }

  // elemental2.dom.HTMLElement.draggable is boolean but GWT API uses String
  // because of value "auto" mentioend in spec. However you might never be able to read
  // the value "auto" as the browser might simply return true/false based on its default.
  @JsProperty private String draggable;

  protected Element() {}

  /**
   * Adds a name to this element's class property. If the name is already present, this method has
   * no effect.
   *
   * @param className the class name to be added
   * @return <code>true</code> if this element did not already have the specified class name
   * @see #setClassName(String)
   */
  @JsOverlay
  public final boolean addClassName(String className) {
    className = trimClassName(className);

    // Get the current style string.
    String oldClassName = getClassName();
    int idx = indexOfName(oldClassName, className);

    // Only add the style if it's not already present.
    if (idx == -1) {
      if (oldClassName.length() > 0) {
        setClassName(oldClassName + " " + className);
      } else {
        setClassName(className);
      }
      return true;
    }
    return false;
  }

  /** Removes keyboard focus from this element. */
  public final native void blur();

  /**
   * Dispatched the given event with this element as its target. The event will go through all
   * phases of the browser's normal event dispatch mechanism.
   *
   * <p>Note: Because the browser's normal dispatch mechanism is used, exceptions thrown from within
   * handlers triggered by this method cannot be caught by wrapping this method in a try/catch
   * block. Such exceptions will be caught by the {@link
   * org.gwtproject.core.client.GWT#setUncaughtExceptionHandler(org.gwtproject.core.client.GWT.UncaughtExceptionHandler)
   * uncaught exception handler} as usual.
   *
   * @param evt the event to be dispatched
   */
  @JsOverlay
  public final void dispatchEvent(NativeEvent evt) {
    Js.<HTMLElement>uncheckedCast(this).dispatchEvent(Js.uncheckedCast(evt));
  }

  /** Gives keyboard focus to this element. */
  public final native void focus();

  /**
   * Gets an element's absolute bottom coordinate in the document's coordinate system.
   *
   * @return the element's absolute bottom coordinate
   */
  @JsOverlay
  public final int getAbsoluteBottom() {
    return getAbsoluteTop() + getOffsetHeight();
  }

  /**
   * Gets an element's absolute left coordinate in the document's coordinate system.
   *
   * @return the element's absolute left coordinate
   */
  @JsOverlay
  public final int getAbsoluteLeft() {
    HTMLElement e = Js.uncheckedCast(this);
    double subPixelAbsoluteLeft =
        e.getBoundingClientRect().left + getOwnerDocument().getScrollLeft();
    return Js.coerceToInt(subPixelAbsoluteLeft);
  }

  /**
   * Gets an element's absolute right coordinate in the document's coordinate system.
   *
   * @return the element's absolute right coordinate
   */
  @JsOverlay
  public final int getAbsoluteRight() {
    return getAbsoluteLeft() + getOffsetWidth();
  }

  /**
   * Gets an element's absolute top coordinate in the document's coordinate system.
   *
   * @return the element's absolute top coordinate
   */
  @JsOverlay
  public final int getAbsoluteTop() {
    HTMLElement e = Js.uncheckedCast(this);
    double subPixelAbsoluteTop = e.getBoundingClientRect().top + getOwnerDocument().getScrollTop();
    return Js.coerceToInt(subPixelAbsoluteTop);
  }

  /**
   * Retrieves an attribute value by name. Attribute support can be inconsistent across various
   * browsers. Consider using the accessors in {@link Element} and its specific subclasses to
   * retrieve attributes and properties.
   *
   * @param name The name of the attribute to retrieve
   * @return The Attr value as a string, or the empty string if that attribute does not have a
   *     specified or default value
   */
  @JsOverlay
  public final String getAttribute(String name) {
    String value = Js.<HTMLElement>uncheckedCast(this).getAttribute(name);
    return value != null ? value : "";
  }

  /**
   * The class attribute of the element. This attribute has been renamed due to conflicts with the
   * "class" keyword exposed by many languages.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#adef-class">W3C
   *     HTML Specification</a>
   * @return the element's class attribute value or an empty string.
   */
  @JsOverlay
  public final String getClassName() {
    String className = Js.<HTMLElement>uncheckedCast(this).className;
    return className == null ? "" : className;
  };

  /**
   * Returns the inner height of an element in pixels, including padding but not the horizontal
   * scrollbar height, border, or margin.
   *
   * @return the element's client height
   */
  @JsOverlay
  public final int getClientHeight() {
    return toInt32(getSubPixelClientHeight());
  }

  /**
   * Returns the inner width of an element in pixels, including padding but not the vertical
   * scrollbar width, border, or margin.
   *
   * @return the element's client width
   */
  @JsOverlay
  public final int getClientWidth() {
    return toInt32(getSubPixelClientWidth());
  }

  /**
   * Specifies the base direction of directionally neutral text and the directionality of tables.
   *
   * @return the element's base direction
   */
  @JsProperty
  public final native String getDir();

  /**
   * Returns the draggable attribute of this element.
   *
   * @return one of {@link #DRAGGABLE_AUTO}, {@link #DRAGGABLE_FALSE}, or {@link #DRAGGABLE_TRUE}
   */
  @JsOverlay
  public final String getDraggable() {
    return Js.isTruthy(this.draggable) ? this.draggable : null;
  }

  /**
   * Returns a NodeList of all descendant Elements with a given tag name, in the order in which they
   * are encountered in a preorder traversal of this Element tree.
   *
   * @param name The name of the tag to match on. The special value "*" matches all tags
   * @return A list of matching Element nodes
   */
  public final native NodeList<Element> getElementsByTagName(String name);

  /**
   * The first child of element this element. If there is no such element, this returns null.
   *
   * @return the first child element of this element, if any
   */
  @JsOverlay
  public final Element getFirstChildElement() {
    elemental2.dom.Node child = Js.<HTMLElement>uncheckedCast(this).firstChild;
    while (child != null && child.nodeType != 1) child = child.nextSibling;
    return Js.uncheckedCast(child);
  }

  /**
   * The element's identifier.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#adef-id">W3C
   *     HTML Specification</a>
   * @return the element's id attribute
   */
  @JsProperty
  public final native String getId();

  /**
   * All of the markup and content within a given element.
   *
   * @return the element's innerHTML value
   */
  @JsOverlay
  public final String getInnerHTML() {
    return Js.<HTMLElement>uncheckedCast(this).innerHTML;
  }

  /**
   * The text between the start and end tags of the object.
   *
   * @return the element's innerText value
   */
  @JsOverlay
  public final String getInnerText() {
    /*
     * textContent is used over innerText for two reasons:
     * 1 - It is consistent across browsers. textContent
     *     does not convert <br>'s to new lines.
     * 2 - textContent is faster on retreival because WebKit
     *     does not recalculate styles as it does for innerText.
     */
    return Js.<HTMLElement>uncheckedCast(this).textContent;
  }

  /**
   * Language code defined in RFC 1766.
   *
   * @return the element's lang value
   */
  @JsProperty
  public final native String getLang();

  /**
   * The element immediately following this element. If there is no such element, this returns null.
   *
   * @return the element after this one in this node's parent, if any
   */
  @JsOverlay
  public final Element getNextSiblingElement() {
    elemental2.dom.Node sib = Js.<HTMLElement>uncheckedCast(this).nextSibling;
    while (sib != null && sib.nodeType != 1) {
      sib = sib.nextSibling;
    }
    return Js.uncheckedCast(sib);
  }

  /**
   * The height of an element relative to the layout.
   *
   * @return the element's offset height
   */
  @JsOverlay
  public final int getOffsetHeight() {
    return toInt32(getSubPixelOffsetHeight());
  }

  /**
   * The number of pixels that the upper left corner of the current element is offset to the left
   * within the offsetParent node.
   *
   * @return the element's offset left position
   */
  @JsOverlay
  public final int getOffsetLeft() {
    return toInt32(getSubPixelOffsetLeft());
  }

  /**
   * Returns a reference to the object which is the closest (nearest in the containment hierarchy)
   * positioned containing element.
   *
   * @return the element's offset parent
   */
  @JsProperty
  public final native Element getOffsetParent();

  /**
   * The number of pixels that the upper top corner of the current element is offset to the top
   * within the offsetParent node.
   *
   * @return the element's offset top
   */
  @JsOverlay
  public final int getOffsetTop() {
    return toInt32(getSubPixelOffsetTop());
  }

  /**
   * The width of an element relative to the layout.
   *
   * @return the element's offset width
   */
  @JsOverlay
  public final int getOffsetWidth() {
    return toInt32(getSubPixelOffsetWidth());
  }

  /**
   * The element immediately preceding this element. If there is no such element, this returns null.
   *
   * @return the element before this one in this node's parent, if any
   */
  @JsOverlay
  public final Element getPreviousSiblingElement() {
    elemental2.dom.Node sib = Js.<HTMLElement>uncheckedCast(this).previousSibling;
    while (sib != null && sib.nodeType != 1) sib = sib.previousSibling;
    return Js.uncheckedCast(sib);
  }

  /**
   * Gets a boolean property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final boolean getPropertyBoolean(String name) {
    return Js.isTruthy(Js.asPropertyMap(this).get(name));
  }

  /**
   * Gets a double property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final double getPropertyDouble(String name) {
    double value = Global.parseFloat(Js.asPropertyMap(this).get(name));
    return Double.isNaN(value) ? 0.0 : value;
  };

  /**
   * Gets an integer property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final int getPropertyInt(String name) {
    return Js.coerceToInt(Global.parseInt(Js.asPropertyMap(this).get(name), 10));
  }

  /**
   * Gets a JSO property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final JavaScriptObject getPropertyJSO(String name) {
    JavaScriptObject value = Js.uncheckedCast(Js.asPropertyMap(this).get(name));
    return Js.isTruthy(value) ? value : null;
  }

  /**
   * Gets an object property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final Object getPropertyObject(String name) {
    return Js.asPropertyMap(this).get(name);
  }

  /**
   * Gets a property from this element.
   *
   * @param name the name of the property to be retrieved
   * @return the property value
   */
  @JsOverlay
  public final String getPropertyString(String name) {
    Object value = Js.asPropertyMap(this).get(name);
    return value == null ? null : "" + value;
  }

  /**
   * The height of the scroll view of an element.
   *
   * @return the height of the scroll view of this element
   */
  @JsOverlay
  public final int getScrollHeight() {
    return toInt32(getSubPixelScrollHeight());
  }

  /**
   * The number of pixels that an element's content is scrolled from the left.
   *
   * <p>If the element is in RTL mode, this method will return a negative value of the number of
   * pixels scrolled from the right.
   *
   * @return the number of pixels that the element's content is scrolled from the left, or from the
   *     right if in RTL mode
   */
  @JsOverlay
  public final int getScrollLeft() {
    int scrollLeft = Js.coerceToInt(Js.<HTMLElement>uncheckedCast(this).scrollLeft);
    if (UserAgentHolder.IS_SAFARI) {
      if (!(hasTagName(BodyElement.TAG) || hasTagName("HTML")) && isRTLSafari()) {
        return scrollLeft - (getScrollWidth() - getClientWidth());
      }
    }
    return scrollLeft;
  }

  /**
   * The number of pixels that an element's content is scrolled from the top.
   *
   * @return the number of pixels that this element's content is scrolled from the top
   */
  @JsOverlay
  public final int getScrollTop() {
    return toInt32(getSubPixelScrollTop());
  }

  /**
   * The width of the scroll view of an element.
   *
   * @return the width of the scroll view of this element
   */
  @JsOverlay
  public final int getScrollWidth() {
    return toInt32(getSubPixelScrollWidth());
  }

  /**
   * Gets a string representation of this element (as outer HTML).
   *
   * <p>We do not override {@link #toString()} because it is final in {@link JavaScriptObject}.
   *
   * @return the string representation of this element
   */
  @JsOverlay
  public final String getString() {
    // TODO HTMLElement is missing outerHTML
    return Js.<JsPropertyMap<String>>uncheckedCast(this).get("outerHTML");
  }

  /**
   * Gets this element's {@link Style} object.
   *
   * @return the Style object for this element
   */
  @JsProperty
  public final native Style getStyle();

  /**
   * The index that represents the element's position in the tabbing order.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-tabindex">W3C
   *     HTML Specification</a>
   * @return the tab index of the element
   */
  @JsOverlay
  public final int getTabIndex() {
    return Js.<HTMLElement>uncheckedCast(this).tabIndex;
  }

  /**
   * Gets the element's full tag name, including the namespace-prefix if present.
   *
   * @return the element's tag name
   */
  @JsOverlay
  public final String getTagName() {
    return Js.<HTMLElement>uncheckedCast(this).tagName;
  }

  /**
   * The element's advisory title.
   *
   * @return the title attribute of this element
   */
  @JsProperty
  public final native String getTitle();

  /**
   * Determines whether an element has an attribute with a given name.
   *
   * <p>Note that IE, prior to version 8, will return false-positives for names that collide with
   * element properties (e.g., style, width, and so forth).
   *
   * @param name the name of the attribute
   * @return <code>true</code> if this element has the specified attribute
   */
  @JsOverlay
  public final boolean hasAttribute(String name) {
    return Js.<HTMLElement>uncheckedCast(this).hasAttribute(name);
  }

  /**
   * Checks if this element's class property contains specified class name.
   *
   * @param className the class name to be added
   * @return <code>true</code> if this element has the specified class name
   */
  @JsOverlay
  public final boolean hasClassName(String className) {
    className = trimClassName(className);
    int idx = indexOfName(getClassName(), className);
    return idx != -1;
  }

  /**
   * Determines whether this element has the given tag name.
   *
   * @param tagName the tag name, including namespace-prefix (if present)
   * @return <code>true</code> if the element has the given tag name
   */
  @JsOverlay
  public final boolean hasTagName(String tagName) {
    assert tagName != null : "tagName must not be null";
    return tagName.equalsIgnoreCase(getTagName());
  }

  /**
   * Removes an attribute by name.
   *
   * @param name the name of the attribute to remove
   */
  public final native void removeAttribute(String name);

  /**
   * Removes a name from this element's class property. If the name is not present, this method has
   * no effect.
   *
   * @param className the class name to be removed
   * @return <code>true</code> if this element had the specified class name
   * @see #setClassName(String)
   */
  @JsOverlay
  public final boolean removeClassName(String className) {
    className = trimClassName(className);

    // Get the current style string.
    String oldStyle = getClassName();
    int idx = indexOfName(oldStyle, className);

    // Don't try to remove the style if it's not there.
    if (idx != -1) {
      // Get the leading and trailing parts, without the removed name.
      String begin = oldStyle.substring(0, idx).trim();
      String end = oldStyle.substring(idx + className.length()).trim();

      // Some contortions to make sure we don't leave extra spaces.
      String newClassName;
      if (begin.length() == 0) {
        newClassName = end;
      } else if (end.length() == 0) {
        newClassName = begin;
      } else {
        newClassName = begin + " " + end;
      }

      setClassName(newClassName);
      return true;
    }
    return false;
  }

  /**
   * Returns the index of the first occurrence of name in a space-separated list of names, or -1 if
   * not found.
   *
   * @param nameList list of space delimited names
   * @param name a non-empty string. Should be already trimmed.
   */
  @JsOverlay
  static int indexOfName(String nameList, String name) {
    int idx = nameList.indexOf(name);

    // Calculate matching index.
    while (idx != -1) {
      if (idx == 0 || nameList.charAt(idx - 1) == ' ') {
        int last = idx + name.length();
        int lastPos = nameList.length();
        if ((last == lastPos) || ((last < lastPos) && (nameList.charAt(last) == ' '))) {
          break;
        }
      }
      idx = nameList.indexOf(name, idx + 1);
    }

    return idx;
  }

  @JsOverlay
  private static String trimClassName(String className) {
    assert (className != null) : "Unexpectedly null class name";
    className = className.trim();
    assert !className.isEmpty() : "Unexpectedly empty class name";
    return className;
  }

  /**
   * Add the class name if it doesn't exist or removes it if does.
   *
   * @param className the class name to be toggled
   */
  @JsOverlay
  public final void toggleClassName(String className) {
    boolean added = addClassName(className);
    if (!added) {
      removeClassName(className);
    }
  }

  /**
   * Replace one class name with another.
   *
   * @param oldClassName the class name to be replaced
   * @param newClassName the class name to replace it
   */
  @JsOverlay
  public final void replaceClassName(String oldClassName, String newClassName) {
    removeClassName(oldClassName);
    addClassName(newClassName);
  }

  /**
   * Scrolls this element into view.
   *
   * <p>This method crawls up the DOM hierarchy, adjusting the scrollLeft and scrollTop properties
   * of each scrollable element to ensure that the specified element is completely in view. It
   * adjusts each scroll position by the minimum amount necessary.
   */
  @JsOverlay
  public final void scrollIntoView() {
    HTMLElement e = Js.uncheckedCast(this);
    double left = e.offsetLeft, top = e.offsetTop;
    double width = e.offsetWidth, height = e.offsetHeight;

    if (e.parentNode != e.offsetParent && e.parentNode.nodeType == 1) {
      left -= Js.<HTMLElement>uncheckedCast(e.parentNode).offsetLeft;
      top -= Js.<HTMLElement>uncheckedCast(e.parentNode).offsetTop;
    }

    elemental2.dom.Node cur = e.parentNode;
    while (cur != null && (cur.nodeType == 1)) {
      HTMLElement curEl = Js.uncheckedCast(cur);
      if (left < curEl.scrollLeft) {
        curEl.scrollLeft = left;
      }
      if (left + width > curEl.scrollLeft + curEl.clientWidth) {
        curEl.scrollLeft = (left + width) - curEl.clientWidth;
      }
      if (top < curEl.scrollTop) {
        curEl.scrollTop = top;
      }
      if (top + height > curEl.scrollTop + curEl.clientHeight) {
        curEl.scrollTop = (top + height) - curEl.clientHeight;
      }

      double offsetLeft = curEl.offsetLeft, offsetTop = curEl.offsetTop;
      if (curEl.parentNode != curEl.offsetParent && curEl.parentNode.nodeType == 1) {
        offsetLeft -= Js.<HTMLElement>uncheckedCast(curEl.parentNode).offsetLeft;
        offsetTop -= Js.<HTMLElement>uncheckedCast(curEl.parentNode).offsetTop;
      }

      left += offsetLeft - curEl.scrollLeft;
      top += offsetTop - curEl.scrollTop;
      cur = curEl.parentNode;
    }
  }

  /**
   * Adds a new attribute. If an attribute with that name is already present in the element, its
   * value is changed to be that of the value parameter.
   *
   * @param name The name of the attribute to create or alter
   * @param value Value to set in string form
   */
  public final native void setAttribute(String name, String value);

  /**
   * The class attribute of the element. This attribute has been renamed due to conflicts with the
   * "class" keyword exposed by many languages.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#adef-class">W3C
   *     HTML Specification</a>
   * @param className the new value to set to the element's class attribute
   */
  @JsOverlay
  public final void setClassName(String className) {
    Js.<HTMLElement>uncheckedCast(this).className = className == null ? "" : className;
  }

  /**
   * Specifies the base direction of directionally neutral text and the directionality of tables.
   *
   * @param dir the value to set on the element's dir attribute
   */
  @JsProperty
  public final native void setDir(String dir);

  /**
   * Changes the draggable attribute to one of {@link #DRAGGABLE_AUTO}, {@link #DRAGGABLE_FALSE}, or
   * {@link #DRAGGABLE_TRUE}.
   *
   * @param draggable a String constants
   */
  @JsOverlay
  public final void setDraggable(String draggable) {
    // TODO this is at least less wrong than the current implementation...
    Js.<HTMLElement>uncheckedCast(this).draggable = DRAGGABLE_TRUE.equalsIgnoreCase(draggable);
  }

  /**
   * The element's identifier.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#adef-id">W3C
   *     HTML Specification</a>
   * @param id the value to set on the element's id attribute
   */
  @JsProperty
  public final native void setId(String id);

  /**
   * All of the markup and content within a given element.
   *
   * @param html the html string to use to replace the contents of this element
   */
  @JsOverlay
  public final void setInnerHTML(@IsSafeHtml String html) {
    Js.<HTMLElement>uncheckedCast(this).innerHTML = html == null ? "" : html;
  }

  /**
   * All of the markup and content within a given element.
   *
   * @param html the SafeHtml object to use to replace the contents of this element
   */
  @JsOverlay
  public final void setInnerSafeHtml(SafeHtml html) {
    setInnerHTML(html.asString());
  }

  /**
   * The text between the start and end tags of the object.
   *
   * @param text the text to use to replace the contents of this element
   */
  @JsOverlay
  public final void setInnerText(String text) {
    // See getInnerText for why textContent is used instead of innerText.
    Js.<HTMLElement>uncheckedCast(this).textContent = text != null ? text : "";
  }

  /**
   * Language code defined in RFC 1766.
   *
   * @param lang the lang property to set on this element
   */
  @JsProperty
  public final native void setLang(String lang);

  /**
   * Sets a boolean property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyBoolean(String name, boolean value) {
    Js.asPropertyMap(this).set(name, value);
  }

  /**
   * Sets a double property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyDouble(String name, double value) {
    Js.asPropertyMap(this).set(name, value);
  };

  /**
   * Sets an integer property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyInt(String name, int value) {
    Js.asPropertyMap(this).set(name, value);
  }

  /**
   * Sets a JSO property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyJSO(String name, JavaScriptObject value) {
    setPropertyObject(name, value);
  }

  /**
   * Sets an object property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyObject(String name, Object value) {
    Js.asPropertyMap(this).set(name, value);
  }

  /**
   * Sets a property on this element.
   *
   * @param name the name of the property to be set
   * @param value the new property value
   */
  @JsOverlay
  public final void setPropertyString(String name, String value) {
    Js.asPropertyMap(this).set(name, value);
  };

  /**
   * The number of pixels that an element's content is scrolled from the left.
   *
   * @param scrollLeft the number of pixels that the element's content should be scrolled from the
   *     left
   */
  @JsOverlay
  public final void setScrollLeft(int scrollLeft) {
    if (UserAgentHolder.IS_SAFARI) {
      if (!(hasTagName(BodyElement.TAG) || hasTagName("HTML")) && isRTLSafari()) {
        scrollLeft += getScrollWidth() - getClientWidth();
      }
    }
    Js.<HTMLElement>uncheckedCast(this).scrollLeft = scrollLeft;
  }

  /**
   * The number of pixels that an element's content is scrolled from the top.
   *
   * @param scrollTop the number of pixels that the element's content should be scrolled from the
   *     top
   */
  @JsProperty
  public final native void setScrollTop(int scrollTop);

  /**
   * The index that represents the element's position in the tabbing order.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-tabindex">W3C
   *     HTML Specification</a>
   * @param tabIndex the value to use for the tab index of the element
   */
  @JsProperty
  public final native void setTabIndex(int tabIndex);

  /**
   * The element's advisory title.
   *
   * @param title the value to use for the element's title attribute
   */
  @JsOverlay
  public final void setTitle(String title) {
    // Setting the title to null results in the string "null" being displayed
    // on some browsers.
    Js.<HTMLElement>uncheckedCast(this).title = title == null ? "" : title;
  }

  @JsOverlay
  private final double getSubPixelClientHeight() {
    return Js.<elemental2.dom.Element>uncheckedCast(this).clientHeight;
  }

  @JsOverlay
  private final double getSubPixelClientWidth() {
    return Js.<elemental2.dom.Element>uncheckedCast(this).clientWidth;
  }

  @JsOverlay
  private final double getSubPixelOffsetHeight() {
    double value = Js.<HTMLElement>uncheckedCast(this).offsetHeight;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelOffsetLeft() {
    double value = Js.<HTMLElement>uncheckedCast(this).offsetLeft;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelOffsetTop() {
    double value = Js.<HTMLElement>uncheckedCast(this).offsetTop;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelOffsetWidth() {
    double value = Js.<HTMLElement>uncheckedCast(this).offsetWidth;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelScrollHeight() {
    double value = Js.<elemental2.dom.Element>uncheckedCast(this).scrollHeight;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelScrollTop() {
    double value = Js.<elemental2.dom.Element>uncheckedCast(this).scrollTop;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private final double getSubPixelScrollWidth() {
    double value = Js.<elemental2.dom.Element>uncheckedCast(this).scrollWidth;
    return Js.isTruthy(value) ? value : 0d;
  }

  @JsOverlay
  private boolean isRTLSafari() {
    HTMLElement e = Js.uncheckedCast(this);
    // TODO when Document has defaultView, clean this up
    // TODO also see about not referencing a class which doesn't exist in the browser (ViewCSS)
    ViewCSS defaultView =
        Js.uncheckedCast(Js.<JsPropertyMap<?>>uncheckedCast(e.ownerDocument).get("defaultView"));
    return Objects.equals(defaultView.getComputedStyle(e, "").direction, "rtl");
  }
}

