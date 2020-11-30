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
public class HTMLVideoElement extends HTMLMediaElement {
  public int height;
  public String poster;
  public int videoHeight;
  public int videoWidth;
  public int webkitDecodedFrameCount;
  public boolean webkitDisplayingFullscreen;
  public int webkitDroppedFrameCount;
  public boolean webkitSupportsFullscreen;
  public int width;

  public native VideoPlaybackQuality getVideoPlaybackQuality();

  public native void webkitEnterFullScreen();

  public native void webkitEnterFullscreen();

  public native void webkitExitFullScreen();

  public native void webkitExitFullscreen();
}

