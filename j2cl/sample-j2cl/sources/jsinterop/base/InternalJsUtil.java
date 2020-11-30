/*
 * Copyright 2016 Google Inc.
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
 *
 */
package jsinterop.base;

import com.google.gwt.core.client.UnsafeNativeLong;
import javaemul.internal.annotations.HasNoSideEffects;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;

/** Utilities used internally to interact with native code. */
class InternalJsUtil {

  @JsMethod
  public static native <T> JsPropertyMap<T> emptyObjectLiteral() /*-{
    return {};
  }-*/;

  @JsMethod(namespace = JsPackage.GLOBAL, name = "goog.getObjectByName")
  public static native Object getObjectByName(String qualifiedName, Object obj) /*-{
    var parts = qualifiedName.split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      cur = cur[parts[i]];
      if (cur == null) {
        return null;
      }
    }
    return cur;
  }-*/;

  @JsMethod(name="getIndexed")
  public static native Object get(Object obj, String key) /*-{
    return obj[key];
  }-*/;

  @JsMethod(name="hasIndexed")
  public static native boolean has(Object obj, String key) /*-{
    return key in obj;
  }-*/;

  @JsMethod(name="deleteIndexed")
  public static native Object delete(Object obj, String key) /*-{
    delete obj[key];
  }-*/;

  @JsMethod(name="setIndexed")
  public static native void set(Object obj, String key, Object value) /*-{
    obj[key] = value;
  }-*/;

  @JsMethod(name="getIndexed")
  public static native Object getAt(Object obj, int key) /*-{
    return obj[key];
  }-*/;

  @JsMethod(name="hasIndexed")
  public static native boolean hasAt(Object obj, int key) /*-{
    return key in obj;
  }-*/;

  @JsMethod(name="deleteIndexed")
  public static native void deleteAt(Object obj, int key) /*-{
    delete obj[key];
  }-*/;

  @JsMethod(name="setIndexed")
  public static native void setAt(Object obj, int key, Object value) /*-{
    obj[key] = value;
  }-*/;

  @JsMethod
  public static native void forEach(Object obj, JsForEachCallbackFn cb) /*-{
    for (var element in obj) {
      cb(element);
    }
  }-*/;

  @JsMethod(name="castToAny")
  public static native boolean asBoolean(Object obj) /*-{
   return obj;
  }-*/;

  @JsMethod(name="castToAny")
  public static native double asDouble(Object obj) /*-{
   return obj;
  }-*/;

  @JsMethod(name="castToAny")
  public static native int asInt(Object obj) /*-{
    return obj;
  }-*/;

  @JsMethod(name="castToAny")
  public static native short asShort(Object obj) /*-{
    return obj;
  }-*/;

  @JsMethod(name="castToAny")
  public static native char asChar(Object obj) /*-{
    return obj;
  }-*/;

  @JsMethod(name="castToAny")
  public static native byte asByte(Object obj) /*-{
    return obj;
  }-*/;

  @UnsafeNativeLong
  @JsMethod(name="castToAny")
  public static native long asLong(Object obj) /*-{
    return obj;
  }-*/;

  @JsMethod
  @HasNoSideEffects
  public static native boolean isLong(Object obj) /*-{
    if (typeof obj == 'number') {
      return @com.google.gwt.lang.LongLib::isSafeIntegerRange(*)(obj) && Math.floor(obj) === obj;
    }
    if (typeof obj == 'object' && obj) {
      return "h" in obj && "l" in obj && "m" in obj;
    }
    return false;
  }-*/;

  @JsMethod
  @HasNoSideEffects
  public static native boolean isInt(Object obj) /*-{
    return (obj|0) === obj;
  }-*/;

  @JsMethod
  @HasNoSideEffects
  public static native boolean hasLength(Object obj) /*-{
    return typeof obj == 'object' && typeof obj.length == 'number';
  }-*/;

  @JsMethod
  @HasNoSideEffects
  public static native int getLength(JsArrayLike<?> obj) /*-{
    return obj.length;
  }-*/;

  @JsMethod
  public static native void setLength(JsArrayLike<?> obj, int length) /*-{
    return obj.length = length;
  }-*/;

  @JsMethod
  public static native <T> JsConstructorFn<T> toCtor(Class<T> clazz) /*-{
    return clazz.@java.lang.Class::jsConstructor;
  }-*/;

  @JsMethod(namespace="java.lang.Class", name="$get")
  public static native <T> Class<T> toClass(JsConstructorFn<T> ctor) /*-{
    return ctor.prototype.@java.lang.Object::___clazz;
  }-*/;

  @JsMethod(namespace=jsinterop.annotations.JsPackage.GLOBAL, name="Reflect.construct")
  public static native <T> T construct(JsConstructorFn<T> ctor, Object[] args) /*-{
    return new (ctor.bind.apply(ctor, [null].concat(args)));
  }-*/;

  private InternalJsUtil() {} // Hide constructor for utility class.
}

