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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TraversalDocument {
  @JsFunction
  public interface CreateNodeIteratorFn {
    NodeIterator onInvoke(Node p0, double p1, NodeFilter p2, boolean p3);
  }

  @JsFunction
  public interface CreateTreeWalkerFn {
    TreeWalker onInvoke(Node p0, double p1, NodeFilter p2, boolean p3);
  }

  @JsOverlay
  static TraversalDocument create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  TraversalDocument.CreateNodeIteratorFn getCreateNodeIterator();

  @JsProperty
  TraversalDocument.CreateTreeWalkerFn getCreateTreeWalker();

  @JsProperty
  void setCreateNodeIterator(TraversalDocument.CreateNodeIteratorFn createNodeIterator);

  @JsProperty
  void setCreateTreeWalker(TraversalDocument.CreateTreeWalkerFn createTreeWalker);
}

