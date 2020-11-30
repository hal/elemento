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
public class CharacterData extends Node {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AfterNodesUnionType {
    @JsOverlay
    static CharacterData.AfterNodesUnionType of(Object o) {
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
    static CharacterData.BeforeNodesUnionType of(Object o) {
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
    static CharacterData.ReplaceWithNodesUnionType of(Object o) {
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

  public String data;
  public int length;
  public Element nextElementSibling;
  public Element previousElementSibling;

  public native void after(CharacterData.AfterNodesUnionType... nodes);

  @JsOverlay
  public final void after(Node... nodes) {
    after(Js.<CharacterData.AfterNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void after(String... nodes) {
    after(Js.<CharacterData.AfterNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void appendData(String arg);

  public native void before(CharacterData.BeforeNodesUnionType... nodes);

  @JsOverlay
  public final void before(Node... nodes) {
    before(Js.<CharacterData.BeforeNodesUnionType[]>uncheckedCast(nodes));
  }

  @JsOverlay
  public final void before(String... nodes) {
    before(Js.<CharacterData.BeforeNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void deleteData(int offset, int count);

  public native void insertData(int offset, String arg);

  public native void remove();

  public native void replaceData(int offset, int count, String arg);

  @JsOverlay
  public final void replaceWith(Node... nodes) {
    replaceWith(Js.<CharacterData.ReplaceWithNodesUnionType[]>uncheckedCast(nodes));
  }

  public native void replaceWith(CharacterData.ReplaceWithNodesUnionType... nodes);

  @JsOverlay
  public final void replaceWith(String... nodes) {
    replaceWith(Js.<CharacterData.ReplaceWithNodesUnionType[]>uncheckedCast(nodes));
  }

  public native String substringData(int offset, int count);
}

