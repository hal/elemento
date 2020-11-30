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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class XPathResult {
  @JsOverlay public static final int ANY_TYPE = XPathResult__Constants.ANY_TYPE;

  @JsOverlay
  public static final int ANY_UNORDERED_NODE_TYPE = XPathResult__Constants.ANY_UNORDERED_NODE_TYPE;

  @JsOverlay public static final int BOOLEAN_TYPE = XPathResult__Constants.BOOLEAN_TYPE;

  @JsOverlay
  public static final int FIRST_ORDERED_NODE_TYPE = XPathResult__Constants.FIRST_ORDERED_NODE_TYPE;

  @JsOverlay public static final int NUMBER_TYPE = XPathResult__Constants.NUMBER_TYPE;

  @JsOverlay
  public static final int ORDERED_NODE_ITERATOR_TYPE =
      XPathResult__Constants.ORDERED_NODE_ITERATOR_TYPE;

  @JsOverlay
  public static final int ORDERED_NODE_SNAPSHOT_TYPE =
      XPathResult__Constants.ORDERED_NODE_SNAPSHOT_TYPE;

  @JsOverlay public static final int STRING_TYPE = XPathResult__Constants.STRING_TYPE;

  @JsOverlay
  public static final int UNORDERED_NODE_ITERATOR_TYPE =
      XPathResult__Constants.UNORDERED_NODE_ITERATOR_TYPE;

  @JsOverlay
  public static final int UNORDERED_NODE_SNAPSHOT_TYPE =
      XPathResult__Constants.UNORDERED_NODE_SNAPSHOT_TYPE;

  public boolean booleanValue;
  public boolean invalidInteratorState;
  public double numberValue;
  public int resultType;
  public Node singleNodeValue;
  public int snapshotLength;
  public String stringValue;

  public native Node iterateNext();

  public native Node snapshotItem(int index);
}

