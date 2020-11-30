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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/** The Text interface represents textual content. */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class Text extends Node {

  /**
   * Assert that the given {@link Node} is of type {@link Node#TEXT_NODE} and automatically typecast
   * it.
   *
   * @param node the node to assert is a text node
   * @return the node, cast to a Text node
   */
  @JsOverlay
  public static Text as(Node node) {
    assert node.getNodeType() == Node.TEXT_NODE;
    return (Text) node;
  }

  protected Text() {}

  /** Deletes data at the given [offset, length] range. */
  public final native void deleteData(int offset, int length);

  /** The character data of this text node. */
  @JsProperty
  public final native String getData();

  /** The number of characters available through the data property. */
  @JsProperty
  public final native int getLength();

  /** Inserts character data at the given offset. */
  public final native void insertData(int offset, String data);

  /** Replaces data at the given [offset, length] range with the given string. */
  public final native void replaceData(int offset, int length, String data);

  /** The character data of this text node. */
  @JsProperty
  public final native void setData(String data);

  /**
   * Splits the data in this node into two separate text nodes. The text before the split offset is
   * kept in this node, and a new sibling node is created to contain the text after the offset.
   */
  public final native Text splitText(int offset);
}

