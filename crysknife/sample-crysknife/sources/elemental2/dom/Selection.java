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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Selection {
  public Node anchorNode;
  public int anchorOffset;
  public Node focusNode;
  public int focusOffset;
  public boolean isCollapsed;
  public int rangeCount;
  public String type;

  public native void addRange(Range range);

  public native void collapse(Node node, int offset);

  public native void collapse(Node node);

  public native void collapseToEnd();

  public native void collapseToStart();

  public native boolean containsNode(Node node, boolean allowPartialContainment);

  public native boolean containsNode(Node node);

  public native void deleteFromDocument();

  public native void empty();

  public native void extend(Node node, int offset);

  public native void extend(Node node);

  public native Range getRangeAt(int index);

  public native void removeAllRanges();

  public native void removeRange(Range range);

  public native void selectAllChildren(Node node);

  public native void setBaseAndExtent(
      Node anchorNode, int anchorOffset, Node focusNode, int focusOffset);

  public native void setPosition(Node node, int offset);

  public native void setPosition(Node node);
}

