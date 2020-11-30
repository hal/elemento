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
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaStream implements EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorStreamOrTracksUnionType {
    @JsOverlay
    static MediaStream.ConstructorStreamOrTracksUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<MediaStreamTrack> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default MediaStream asMediaStream() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isMediaStream() {
      return (Object) this instanceof MediaStream;
    }
  }

  @JsFunction
  public interface OnactiveFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnaddtrackFn {
    Object onInvoke(MediaStreamTrackEvent p0);
  }

  @JsFunction
  public interface OnendedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OninactiveFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnremovetrackFn {
    Object onInvoke(MediaStreamTrackEvent p0);
  }

  public boolean active;
  @Deprecated public boolean ended;
  public String id;
  @Deprecated public String label;
  public MediaStream.OnactiveFn onactive;
  public MediaStream.OnaddtrackFn onaddtrack;
  @Deprecated public MediaStream.OnendedFn onended;
  public MediaStream.OninactiveFn oninactive;
  public MediaStream.OnremovetrackFn onremovetrack;

  public MediaStream() {}

  public MediaStream(MediaStream.ConstructorStreamOrTracksUnionType streamOrTracks) {}

  public MediaStream(JsArray<MediaStreamTrack> streamOrTracks) {}

  public MediaStream(MediaStream streamOrTracks) {}

  public MediaStream(MediaStreamTrack[] streamOrTracks) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType useCapture);

  public native void addEventListener(String type, EventListener listener);

  public native void addTrack(MediaStreamTrack track);

  @JsMethod(name = "clone")
  public native MediaStream clone_();

  public native boolean dispatchEvent(Event evt);

  public native JsArray<MediaStreamTrack> getAudioTracks();

  public native MediaStreamTrack getTrackById(String trackId);

  public native JsArray<MediaStreamTrack> getTracks();

  public native JsArray<MediaStreamTrack> getVideoTracks();

  public native void removeEventListener(
      String type,
      EventListener listener,
      EventTarget.RemoveEventListenerOptionsUnionType useCapture);

  public native void removeEventListener(String type, EventListener listener);

  public native void removeTrack(MediaStreamTrack track);

  @Deprecated
  public native void stop();
}

