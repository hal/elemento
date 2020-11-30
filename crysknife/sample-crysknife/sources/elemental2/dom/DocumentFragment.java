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
public class DocumentFragment extends Node {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AppendNodesUnionType {
    @JsOverlay
    static DocumentFragment.AppendNodesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Node asNode() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isNode() {
      return (Object) this instanceof Node;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PrependNodesUnionType {
    @JsOverlay
    static DocumentFragment.PrependNodesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Node asNode() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isNode() {
      return (Object) this instanceof Node;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public int childElementCount;
  public Element firstElementChild;
  public Element lastElementChild;

  public native void append(DocumentFragment.AppendNodesUnionType... nodes);

  @JsOverlay
  public final void append(Node... nodes) {
    append(Js.<DocumentFragment.AppendNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void append(String... nodes) {
    append(Js.<DocumentFragment.AppendNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void prepend(Node... nodes) {
    prepend(Js.<DocumentFragment.PrependNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void prepend(DocumentFragment.PrependNodesUnionType... nodes);

  @JsOverlay
  public final void prepend(String... nodes) {
    prepend(Js.<DocumentFragment.PrependNodesUnionType[]>uncheckedCast(nodes));
  }
}

