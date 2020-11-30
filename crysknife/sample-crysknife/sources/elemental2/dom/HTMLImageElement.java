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

import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLImageElement extends HTMLElement {
  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadFn {
    Object onInvoke(Event p0);
  }

  public String align;
  public String alt;
  public String border;
  public boolean complete;
  public String crossOrigin;
  public String currentSrc;
  public String decoding;
  public int height;
  public int hspace;
  public boolean isMap;
  public String longDesc;
  public String lowSrc;
  public String name;
  public int naturalHeight;
  public int naturalWidth;
  public HTMLImageElement.OnerrorFn onerror;
  public HTMLImageElement.OnloadFn onload;
  public String sizes;
  public String src;
  public String srcset;
  public String useMap;
  public int vspace;
  public int width;

  public native Promise<Void> decode();
}

