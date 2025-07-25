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
package org.jboss.elemento.mathml;

import elemental2.dom.CSSStyleDeclaration;
import elemental2.dom.Element;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

/**
 * All the MAthML DOM interfaces that correspond directly to elements in the SVG language derive from the SVGElement interface.
 *
 * @see <a href=
 * "https://developer.mozilla.org/en-US/docs/Web/API/MathMLElement">https://developer.mozilla.org/en-US/docs/Web/API/MathMLElement</a>
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MathMLElement extends Element {

    @JsOverlay
    public static final String NAMESPACE = "http://www.w3.org/1998/Math/MathML";

    public String className;
    public JsPropertyMap<String> dataset;
    public boolean displaystyle;
    public CSSStyleDeclaration style;
    public int tabIndex;
}
