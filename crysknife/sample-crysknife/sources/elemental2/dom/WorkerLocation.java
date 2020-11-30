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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface WorkerLocation {
  @JsProperty
  String getHash();

  @JsProperty
  String getHost();

  @JsProperty
  String getHostname();

  @JsProperty
  String getHref();

  @JsProperty
  String getOrigin();

  @JsProperty
  String getPathname();

  @JsProperty
  String getPort();

  @JsProperty
  String getProtocol();

  @JsProperty
  String getSearch();

  @JsProperty
  void setHash(String hash);

  @JsProperty
  void setHost(String host);

  @JsProperty
  void setHostname(String hostname);

  @JsProperty
  void setHref(String href);

  @JsProperty
  void setOrigin(String origin);

  @JsProperty
  void setPathname(String pathname);

  @JsProperty
  void setPort(String port);

  @JsProperty
  void setProtocol(String protocol);

  @JsProperty
  void setSearch(String search);
}

