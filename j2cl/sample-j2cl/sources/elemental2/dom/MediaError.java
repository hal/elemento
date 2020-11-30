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
public class MediaError {
  @JsOverlay public static final int MEDIA_ERR_ABORTED = MediaError__Constants.MEDIA_ERR_ABORTED;
  @JsOverlay public static final int MEDIA_ERR_DECODE = MediaError__Constants.MEDIA_ERR_DECODE;
  @JsOverlay public static final int MEDIA_ERR_NETWORK = MediaError__Constants.MEDIA_ERR_NETWORK;

  @JsOverlay
  public static final int MEDIA_ERR_SRC_NOT_SUPPORTED =
      MediaError__Constants.MEDIA_ERR_SRC_NOT_SUPPORTED;

  public int code;
  public String message;
}

