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
package org.jboss.elemento.flow;

import elemental2.promise.IThenable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsType;

// We redefine parts of the promise API
@JsType(isNative = true, name = "Promise", namespace = "<global>")
class FlowPromise {

    static native <V> Promise<Object[]> all(IThenable<? extends V>[] promises);

    static native <V> Promise<Object[]> allSettled(IThenable<? extends V>[] promises);
}
