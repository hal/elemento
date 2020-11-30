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

import elemental2.core.JsArray;
import elemental2.core.JsObject;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLElement extends Element {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AttachShadowOptionsType {
    @JsOverlay
    static HTMLElement.AttachShadowOptionsType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getMode();

    @JsProperty
    void setMode(String mode);
  }

  @JsFunction
  public interface AttachedCallbackFn {
    Object onInvoke();
  }

  @JsFunction
  public interface ConnectedCallbackFn {
    Object onInvoke();
  }

  @JsFunction
  public interface CreatedCallbackFn {
    Object onInvoke();
  }

  @JsFunction
  public interface DetachedCallbackFn {
    Object onInvoke();
  }

  @JsFunction
  public interface DisconnectedCallbackFn {
    Object onInvoke();
  }

  public static JsArray<String> observedAttributes;
  public HTMLElement.AttachedCallbackFn attachedCallback;
  public String className;
  public HTMLElement.ConnectedCallbackFn connectedCallback;
  public Element contextMenu;
  public HTMLElement.CreatedCallbackFn createdCallback;
  public JsPropertyMap<String> dataset;
  public HTMLElement.DetachedCallbackFn detachedCallback;
  public String dir;
  public HTMLElement.DisconnectedCallbackFn disconnectedCallback;
  public boolean draggable;
  public JsObject dropzone;
  public boolean hidden;
  public String lang;
  public String nonce;
  public int offsetHeight;
  public int offsetLeft;
  public Element offsetParent;
  public int offsetTop;
  public int offsetWidth;
  public ShadowRoot shadowRoot;
  public boolean spellcheck;
  public CSSStyleDeclaration style;
  public int tabIndex;
  public String title;

  public native Object adoptedCallback(Document oldDocument, Document newDocument);

  public native ShadowRoot attachShadow(HTMLElement.AttachShadowOptionsType options);

  public native Object attributeChangedCallback(
      String attributeName, String oldValue, String newValue, String namespace);

  public native ShadowRoot createShadowRoot();

  public native NodeList<Node> getDestinationInsertionPoints();

  public native ShadowRoot webkitCreateShadowRoot();
}

