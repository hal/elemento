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
public class DOMException {
  @JsOverlay public static final int ABORT_ERR = DOMException__Constants.ABORT_ERR;
  @JsOverlay public static final int DATA_CLONE_ERR = DOMException__Constants.DATA_CLONE_ERR;

  @JsOverlay
  public static final int DOMSTRING_SIZE_ERR = DOMException__Constants.DOMSTRING_SIZE_ERR;

  @JsOverlay
  public static final int HIERARCHY_REQUEST_ERR = DOMException__Constants.HIERARCHY_REQUEST_ERR;

  @JsOverlay public static final int INDEX_SIZE_ERR = DOMException__Constants.INDEX_SIZE_ERR;

  @JsOverlay
  public static final int INUSE_ATTRIBUTE_ERR = DOMException__Constants.INUSE_ATTRIBUTE_ERR;

  @JsOverlay
  public static final int INVALID_ACCESS_ERR = DOMException__Constants.INVALID_ACCESS_ERR;

  @JsOverlay
  public static final int INVALID_CHARACTER_ERR = DOMException__Constants.INVALID_CHARACTER_ERR;

  @JsOverlay
  public static final int INVALID_MODIFICATION_ERR =
      DOMException__Constants.INVALID_MODIFICATION_ERR;

  @JsOverlay
  public static final int INVALID_NODE_TYPE_ERR = DOMException__Constants.INVALID_NODE_TYPE_ERR;

  @JsOverlay public static final int INVALID_STATE_ERR = DOMException__Constants.INVALID_STATE_ERR;
  @JsOverlay public static final int NAMESPACE_ERR = DOMException__Constants.NAMESPACE_ERR;
  @JsOverlay public static final int NETWORK_ERR = DOMException__Constants.NETWORK_ERR;
  @JsOverlay public static final int NOT_FOUND_ERR = DOMException__Constants.NOT_FOUND_ERR;
  @JsOverlay public static final int NOT_SUPPORTED_ERR = DOMException__Constants.NOT_SUPPORTED_ERR;

  @JsOverlay
  public static final int NO_DATA_ALLOWED_ERR = DOMException__Constants.NO_DATA_ALLOWED_ERR;

  @JsOverlay
  public static final int NO_MODIFICATION_ALLOWED_ERR =
      DOMException__Constants.NO_MODIFICATION_ALLOWED_ERR;

  @JsOverlay
  public static final int QUOTA_EXCEEDED_ERR = DOMException__Constants.QUOTA_EXCEEDED_ERR;

  @JsOverlay public static final int SECURITY_ERR = DOMException__Constants.SECURITY_ERR;
  @JsOverlay public static final int SYNTAX_ERR = DOMException__Constants.SYNTAX_ERR;
  @JsOverlay public static final int TIMEOUT_ERR = DOMException__Constants.TIMEOUT_ERR;
  @JsOverlay public static final int TYPE_MISMATCH_ERR = DOMException__Constants.TYPE_MISMATCH_ERR;
  @JsOverlay public static final int URL_MISMATCH_ERR = DOMException__Constants.URL_MISMATCH_ERR;
  @JsOverlay public static final int VALIDATION_ERR = DOMException__Constants.VALIDATION_ERR;

  @JsOverlay
  public static final int WRONG_DOCUMENT_ERR = DOMException__Constants.WRONG_DOCUMENT_ERR;

  public int code;
  public String message;
  public String name;

  public DOMException() {}

  public DOMException(String message, String name) {}

  public DOMException(String message) {}
}

