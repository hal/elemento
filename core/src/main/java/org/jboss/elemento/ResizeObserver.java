/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento;

import elemental2.dom.Element;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import static org.jboss.elemento.BoxModel.contentBox;

/**
 * The ResizeObserver interface reports changes to the dimensions of an Element's content or border box.
 *
 * @see <a href=
 * "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver">https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver</a>
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ResizeObserver {

    public ResizeObserver(ResizeObserverCallback callback) {
    }

    public native void disconnect();

    @JsOverlay
    public final void observe(Element element) {
        observe(element, contentBox);
    }

    @JsOverlay
    public final void observe(Element element, BoxModel boxModel) {
        ResizeObserverOptions options = new ResizeObserverOptions();
        options.box = boxModel.value;
        _observe(element, options);
    }

    public native void unobserve(Element element);

    @JsMethod(name = "observe")
    native void _observe(Element element, ResizeObserverOptions options);
}
