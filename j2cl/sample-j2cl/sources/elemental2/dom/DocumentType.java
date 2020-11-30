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
public class DocumentType extends Node {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AfterNodesUnionType {
    @JsOverlay
    static DocumentType.AfterNodesUnionType of(Object o) {
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
  public interface BeforeNodesUnionType {
    @JsOverlay
    static DocumentType.BeforeNodesUnionType of(Object o) {
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
  public interface ReplaceWithNodesUnionType {
    @JsOverlay
    static DocumentType.ReplaceWithNodesUnionType of(Object o) {
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

  public String name;
  public String publicId;
  public String systemId;

  public native void after(DocumentType.AfterNodesUnionType... nodes);

  @JsOverlay
  public final void after(Node... nodes) {
    after(Js.<DocumentType.AfterNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void after(String... nodes) {
    after(Js.<DocumentType.AfterNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void before(DocumentType.BeforeNodesUnionType... nodes);

  @JsOverlay
  public final void before(Node... nodes) {
    before(Js.<DocumentType.BeforeNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void before(String... nodes) {
    before(Js.<DocumentType.BeforeNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void remove();

  @JsOverlay
  public final void replaceWith(Node... nodes) {
    replaceWith(Js.<DocumentType.ReplaceWithNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void replaceWith(DocumentType.ReplaceWithNodesUnionType... nodes);

  @JsOverlay
  public final void replaceWith(String... nodes) {
    replaceWith(Js.<DocumentType.ReplaceWithNodesUnionType[]>uncheckedCast(nodes));
  }
}

