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
public class Range {
  @JsOverlay public static final int END_TO_END = Range__Constants.END_TO_END;
  @JsOverlay public static final int END_TO_START = Range__Constants.END_TO_START;
  @JsOverlay public static final int START_TO_END = Range__Constants.START_TO_END;
  @JsOverlay public static final int START_TO_START = Range__Constants.START_TO_START;
  public boolean collapsed;
  public Node commonAncestorContainer;
  public Node endContainer;
  public int endOffset;
  public Node startContainer;
  public int startOffset;

  public native DocumentFragment cloneContents();

  public native Range cloneRange();

  public native void collapse(boolean toStart);

  public native int compareBoundaryPoints(int how, Range sourceRange);

  public native double deleteContents();

  public native void detach();

  public native DocumentFragment extractContents();

  public native DOMRect getBoundingClientRect();

  public native ClientRectList getClientRects();

  public native DocumentFragment insertNode(Node newNode);

  public native void selectNode(Node refNode);

  public native void selectNodeContents(Node refNode);

  public native void setEnd(Node refNode, int offset);

  public native void setEndAfter(Node refNode);

  public native void setEndBefore(Node refNode);

  public native void setStart(Node refNode, int offset);

  public native void setStartAfter(Node refNode);

  public native void setStartBefore(Node refNode);

  public native void surroundContents(Node newParent);
}

