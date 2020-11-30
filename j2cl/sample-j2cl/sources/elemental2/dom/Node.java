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

import elemental2.core.JsObject;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Node implements EventTarget {
  @JsOverlay public static final int ATTRIBUTE_NODE = Node__Constants.ATTRIBUTE_NODE;
  @JsOverlay public static final int CDATA_SECTION_NODE = Node__Constants.CDATA_SECTION_NODE;
  @JsOverlay public static final int COMMENT_NODE = Node__Constants.COMMENT_NODE;

  @JsOverlay
  public static final int DOCUMENT_FRAGMENT_NODE = Node__Constants.DOCUMENT_FRAGMENT_NODE;

  @JsOverlay public static final int DOCUMENT_NODE = Node__Constants.DOCUMENT_NODE;

  @JsOverlay
  public static final int DOCUMENT_POSITION_CONTAINED_BY =
      Node__Constants.DOCUMENT_POSITION_CONTAINED_BY;

  @JsOverlay
  public static final int DOCUMENT_POSITION_CONTAINS = Node__Constants.DOCUMENT_POSITION_CONTAINS;

  @JsOverlay
  public static final int DOCUMENT_POSITION_DISCONNECTED =
      Node__Constants.DOCUMENT_POSITION_DISCONNECTED;

  @JsOverlay
  public static final int DOCUMENT_POSITION_FOLLOWING = Node__Constants.DOCUMENT_POSITION_FOLLOWING;

  @JsOverlay
  public static final int DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC =
      Node__Constants.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;

  @JsOverlay
  public static final int DOCUMENT_POSITION_PRECEDING = Node__Constants.DOCUMENT_POSITION_PRECEDING;

  @JsOverlay public static final int DOCUMENT_TYPE_NODE = Node__Constants.DOCUMENT_TYPE_NODE;
  @JsOverlay public static final int ELEMENT_NODE = Node__Constants.ELEMENT_NODE;
  @JsOverlay public static final int ENTITY_NODE = Node__Constants.ENTITY_NODE;
  @JsOverlay public static final int ENTITY_REFERENCE_NODE = Node__Constants.ENTITY_REFERENCE_NODE;
  @JsOverlay public static final int NOTATION_NODE = Node__Constants.NOTATION_NODE;

  @JsOverlay
  public static final int PROCESSING_INSTRUCTION_NODE = Node__Constants.PROCESSING_INSTRUCTION_NODE;

  @JsOverlay public static final int TEXT_NODE = Node__Constants.TEXT_NODE;
  public HTMLSlotElement assignedSlot;
  public NamedNodeMap<Attr> attributes;
  public String baseURI;
  public NodeList<Node> childNodes;
  public Node firstChild;
  public boolean isConnected;
  public Node lastChild;
  public String localName;
  public String namespaceURI;
  public Node nextSibling;
  public String nodeName;
  public int nodeType;
  public String nodeValue;
  public Document ownerDocument;
  public Element parentElement;
  public Node parentNode;
  public String prefix;
  public Node previousSibling;
  public String textContent;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native Node appendChild(Node newChild);

  public native Node cloneNode(boolean deep);

  public native int compareDocumentPosition(Node other);

  public native boolean contains(Node n);

  public native boolean dispatchEvent(Event evt);

  public native JsObject getFeature(String feature, String version);

  public native Node getRootNode();

  public native Node getRootNode(GetRootNodeOptions options);

  public native JsObject getUserData(String key);

  public native boolean hasAttributes();

  public native boolean hasChildNodes();

  public native Element insertAdjacentElement(String where, Element element);

  public native Node insertBefore(Node newChild, Node refChild);

  public native boolean isDefaultNamespace(String namespaceURI);

  public native boolean isEqualNode(Node arg);

  public native boolean isSameNode(Node other);

  public native String lookupNamespaceURI(String prefix);

  public native String lookupPrefix(String namespaceURI);

  public native void normalize();

  public native Element querySelector(String query);

  public native NodeList<Element> querySelectorAll(String query);

  public native Node removeChild(Node oldChild);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native Node replaceChild(Node newChild, Node oldChild);
}

