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

import elemental2.core.JsArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TrustTokenAttributeType {
  @JsOverlay
  static TrustTokenAttributeType create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<String> getAdditionalSignedHeaders();

  @JsProperty
  String getIssuer();

  @JsProperty
  String getRefreshPolicy();

  @JsProperty
  String getSignRequestData();

  @JsProperty
  String getType();

  @JsProperty
  boolean isIncludeTimestampHeader();

  @JsProperty
  void setAdditionalSignedHeaders(JsArray<String> additionalSignedHeaders);

  @JsOverlay
  default void setAdditionalSignedHeaders(String[] additionalSignedHeaders) {
    setAdditionalSignedHeaders(Js.<JsArray<String>>uncheckedCast(additionalSignedHeaders));
  }

  @JsProperty
  void setIncludeTimestampHeader(boolean includeTimestampHeader);

  @JsProperty
  void setIssuer(String issuer);

  @JsProperty
  void setRefreshPolicy(String refreshPolicy);

  @JsProperty
  void setSignRequestData(String signRequestData);

  @JsProperty
  void setType(String type);
}

