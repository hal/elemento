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
public interface NodeFilter {
  @JsOverlay double FILTER_ACCEPT = NodeFilter__Constants.FILTER_ACCEPT;
  @JsOverlay double FILTER_REJECT = NodeFilter__Constants.FILTER_REJECT;
  @JsOverlay double FILTER_SKIP = NodeFilter__Constants.FILTER_SKIP;
  @JsOverlay double SHOW_ALL = NodeFilter__Constants.SHOW_ALL;
  @JsOverlay double SHOW_ATTRIBUTE = NodeFilter__Constants.SHOW_ATTRIBUTE;
  @JsOverlay double SHOW_CDATA_SECTION = NodeFilter__Constants.SHOW_CDATA_SECTION;
  @JsOverlay double SHOW_COMMENT = NodeFilter__Constants.SHOW_COMMENT;
  @JsOverlay double SHOW_DOCUMENT = NodeFilter__Constants.SHOW_DOCUMENT;
  @JsOverlay double SHOW_DOCUMENT_FRAGMENT = NodeFilter__Constants.SHOW_DOCUMENT_FRAGMENT;
  @JsOverlay double SHOW_DOCUMENT_TYPE = NodeFilter__Constants.SHOW_DOCUMENT_TYPE;
  @JsOverlay double SHOW_ELEMENT = NodeFilter__Constants.SHOW_ELEMENT;
  @JsOverlay double SHOW_ENTITY = NodeFilter__Constants.SHOW_ENTITY;
  @JsOverlay double SHOW_ENTITY_REFERENCE = NodeFilter__Constants.SHOW_ENTITY_REFERENCE;
  @JsOverlay double SHOW_NOTATION = NodeFilter__Constants.SHOW_NOTATION;
  @JsOverlay double SHOW_PROCESSING_INSTRUCTION = NodeFilter__Constants.SHOW_PROCESSING_INSTRUCTION;
  @JsOverlay double SHOW_TEXT = NodeFilter__Constants.SHOW_TEXT;

  double acceptNode(Node n);
}

