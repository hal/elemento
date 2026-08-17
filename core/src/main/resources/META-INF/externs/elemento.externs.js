// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols

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

/**
 * @fileoverview Externs for types used by elemento-core but missing from Closure Compiler's built-in externs.
 * @externs
 *
 * Known warnings that cannot be fixed via externs (Closure Compiler limitations):
 *
 * - ResizeObserver.observe options: Elemento passes a plain Object where Closure expects {box: string}.
 *   The built-in extern uses a @typedef which cannot be overridden. The warning is harmless —
 *   the Object always has the correct shape at runtime.
 *   See ResizeObserver.java and ResizeObserverOptions.java.
 */

/** @typedef {webCrypto.Crypto} */
var Crypto;
