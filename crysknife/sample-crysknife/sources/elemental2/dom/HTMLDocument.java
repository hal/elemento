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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLDocument extends Document {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface LinksHTMLCollectionTypeParameterUnionType {
    @JsOverlay
    static HTMLDocument.LinksHTMLCollectionTypeParameterUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default HTMLAnchorElement asHTMLAnchorElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLAreaElement asHTMLAreaElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isHTMLAnchorElement() {
      return (Object) this instanceof HTMLAnchorElement;
    }

    @JsOverlay
    default boolean isHTMLAreaElement() {
      return (Object) this instanceof HTMLAreaElement;
    }
  }

  public String URL;
  public HTMLCollection<HTMLAnchorElement> anchors;
  public HTMLCollection<HTMLAppletElement> applets;
  public HTMLBodyElement body;
  public String cookie;
  public String domain;
  public HTMLCollection<HTMLFormElement> forms;
  public HTMLCollection<HTMLImageElement> images;
  public HTMLCollection<HTMLDocument.LinksHTMLCollectionTypeParameterUnionType> links;
  public String referrer;
  public String title;

  public native NodeList<Element> getElementsByName(String elementName);

  public native void open();

  public native void open(String mimeType, String replace);

  public native void open(String mimeType);
}

