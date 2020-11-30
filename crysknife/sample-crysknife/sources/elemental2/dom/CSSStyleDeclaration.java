/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.JsIterable;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CSSStyleDeclaration extends CSSProperties
    implements JsIterable<String>, JsArrayLike<String>, JsPropertyMap<String> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetAttributeUnionType {
    @JsOverlay
    static CSSStyleDeclaration.GetAttributeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetExpressionUnionType {
    @JsOverlay
    static CSSStyleDeclaration.GetExpressionUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public String cssText;
  public int length;
  public CSSRule parentRule;

  public native CSSStyleDeclaration.GetAttributeUnionType getAttribute(String name, double flags);

  public native CSSStyleDeclaration.GetAttributeUnionType getAttribute(String name);

  public native CSSStyleDeclaration.GetExpressionUnionType getExpression(String name);

  public native CSSValue getPropertyCSSValue(String propertyName);

  public native String getPropertyPriority(String propertyName);

  public native String getPropertyValue(String propertyName);

  public native String item(int index);

  public native boolean removeAttribute(String name, double flags);

  public native boolean removeAttribute(String name);

  public native boolean removeExpression(String name);

  public native String removeProperty(String propertyName);

  @Deprecated
  public native void setAttribute(String name, Object value, double flags);

  @Deprecated
  public native void setAttribute(String name, Object value);

  public native void setExpression(String name, String expr, String language);

  public native void setExpression(String name, String expr);

  public native void setProperty(String propertyName, String value, String priority);

  public native void setProperty(String propertyName, String value);
}

