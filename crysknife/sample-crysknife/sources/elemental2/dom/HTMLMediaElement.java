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

import elemental2.core.JsDate;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLMediaElement extends HTMLElement {
  @JsFunction
  public interface OnabortFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncanplayFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncanplaythroughFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OndurationchangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnemptiedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnendedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadeddataFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadedmetadataFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadstartFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnpauseFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnplayFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnplayingFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnprogressFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnratechangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnseekedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnseekingFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnstalledFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnsuspendFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OntimeupdateFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnvolumechangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnwaitingFn {
    Object onInvoke(Event p0);
  }

  @JsOverlay
  public static final int HAVE_CURRENT_DATA = HTMLMediaElement__Constants.HAVE_CURRENT_DATA;

  @JsOverlay
  public static final int HAVE_ENOUGH_DATA = HTMLMediaElement__Constants.HAVE_ENOUGH_DATA;

  @JsOverlay
  public static final int HAVE_FUTURE_DATA = HTMLMediaElement__Constants.HAVE_FUTURE_DATA;

  @JsOverlay public static final int HAVE_METADATA = HTMLMediaElement__Constants.HAVE_METADATA;
  @JsOverlay public static final int HAVE_NOTHING = HTMLMediaElement__Constants.HAVE_NOTHING;
  @JsOverlay public static final int NETWORK_EMPTY = HTMLMediaElement__Constants.NETWORK_EMPTY;
  @JsOverlay public static final int NETWORK_IDLE = HTMLMediaElement__Constants.NETWORK_IDLE;
  @JsOverlay public static final int NETWORK_LOADING = HTMLMediaElement__Constants.NETWORK_LOADING;

  @JsOverlay
  public static final int NETWORK_NO_SOURCE = HTMLMediaElement__Constants.NETWORK_NO_SOURCE;

  public boolean autobuffer;
  public boolean autoplay;
  public TimeRanges buffered;
  public boolean controls;
  public String crossOrigin;
  public String currentSrc;
  public double currentTime;
  public double defaultPlaybackRate;
  public double duration;
  public boolean ended;
  public MediaError error;
  public boolean loop;
  public boolean muted;
  public int networkState;
  public HTMLMediaElement.OnabortFn onabort;
  public HTMLMediaElement.OncanplayFn oncanplay;
  public HTMLMediaElement.OncanplaythroughFn oncanplaythrough;
  public HTMLMediaElement.OndurationchangeFn ondurationchange;
  public HTMLMediaElement.OnemptiedFn onemptied;
  public HTMLMediaElement.OnendedFn onended;
  public HTMLMediaElement.OnerrorFn onerror;
  public HTMLMediaElement.OnloadeddataFn onloadeddata;
  public HTMLMediaElement.OnloadedmetadataFn onloadedmetadata;
  public HTMLMediaElement.OnloadstartFn onloadstart;
  public HTMLMediaElement.OnpauseFn onpause;
  public HTMLMediaElement.OnplayFn onplay;
  public HTMLMediaElement.OnplayingFn onplaying;
  public HTMLMediaElement.OnprogressFn onprogress;
  public HTMLMediaElement.OnratechangeFn onratechange;
  public HTMLMediaElement.OnseekedFn onseeked;
  public HTMLMediaElement.OnseekingFn onseeking;
  public HTMLMediaElement.OnstalledFn onstalled;
  public HTMLMediaElement.OnsuspendFn onsuspend;
  public HTMLMediaElement.OntimeupdateFn ontimeupdate;
  public HTMLMediaElement.OnvolumechangeFn onvolumechange;
  public HTMLMediaElement.OnwaitingFn onwaiting;
  public boolean paused;
  public double playbackRate;
  public TimeRanges played;
  public String preload;
  public int readyState;
  public TimeRanges seekable;
  public boolean seeking;
  public String sinkId;
  public String src;
  public MediaStream srcObject;
  public TextTrackList textTracks;
  public double volume;

  public native TextTrack addTextTrack(String kind, String label, String language);

  public native TextTrack addTextTrack(String kind, String label);

  public native TextTrack addTextTrack(String kind);

  public native String canPlayType(String type);

  public native JsDate getStartDate();

  public native void load();

  public native void pause();

  public native Promise<Void> play();

  public native Promise<Void> setSinkId(String sinkId);
}

