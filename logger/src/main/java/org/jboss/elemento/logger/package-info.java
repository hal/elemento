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
 * Provides a lightweight logging wrapper around {@code console.log} that uses categories, {@linkplain Level log levels}, and
 * a predefined log format.
 *
 * <h2>Getting Loggers</h2>
 * <p>
 * Retrieve a logger using {@link Logger#getLogger(String)} with an arbitrary category string. Using hierarchical categories
 * (such as fully qualified class names) enables level overrides for subcategories:
 *
 * {@snippet :
 * package org.acme;
 *
 * public class Foo {
 *     private static final Logger logger = Logger.getLogger(Foo.class.getName());
 *
 *     public void bar() {
 *         logger.info("Processing request");
 *         logger.debug("Request details: %s", request);
 *     }
 * }
 * }
 *
 * <h2>Log Methods</h2>
 * <p>
 * The logger provides four log levels, each delegating to the corresponding {@code console} method:
 * <ol>
 * <li>{@link Logger#error(String, Object...)} → <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/error_static">{@code console.error()}</a>
 * <li>{@link Logger#warn(String, Object...)} → <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static">{@code console.warn()}</a>
 * <li>{@link Logger#info(String, Object...)} → <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/info_static">{@code console.info()}</a>
 * <li>{@link Logger#debug(String, Object...)} → <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/debug_static">{@code console.debug()}</a>
 * </ol>
 *
 * <p>
 * All log methods support <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions">string
 * substitutions</a> and accept a variable list of parameters for formatting.
 *
 * <h2>Log Levels</h2>
 * <p>
 * The global log level is set using {@link Logger#setLevel(Level)}. Override the level for a specific category with
 * {@link Logger#setLevel(String, Level)}, or reset a category to the global level using {@link Logger#resetLevel(String)}.
 *
 * <p>
 * If a category contains {@code .}, it is interpreted hierarchically. For example, overriding {@code org.jboss} applies to all
 * subcategories like {@code org.jboss.elemento} (unless explicitly overridden otherwise).
 *
 * <h2>Log Format</h2>
 * <p>
 * The log format is predefined as:
 * <pre>
 * HH:mm:ss.SSS &lt;level&gt; [&lt;category&gt;] &lt;message&gt;
 * </pre>
 * and cannot be customized. Categories are trimmed and right-aligned. If the category is a fully qualified class name, package
 * names are shortened (e.g., {@code org.jboss.elemento.Logger} becomes {@code o.j.e.Logger}).
 *
 * <h2>JavaScript API</h2>
 * <p>
 * The logger exports methods to JavaScript (e.g., for use in browser dev tools) to control log levels:
 * <ul>
 * <li>{@code org.jboss.elemento.logger.Logger.setLevel(String level)} - sets the global log level
 * <li>{@code org.jboss.elemento.logger.Logger.setLevel(String category, String level)} - overrides the log level for one
 * category
 * <li>{@code org.jboss.elemento.logger.Logger.resetLevel(String category)} - resets the log level for the category to the
 * global log level
 * </ul>
 *
 * <p>
 * Please use the fully qualified name when calling these methods from JavaScript!
 *
 * <h2>Additional Features</h2>
 * <p>
 * The logger provides methods for:
 * <ul>
 * <li><strong>Grouping</strong> - {@link Logger#groupDebug(String, Object...)}, {@link Logger#groupInfo(String, Object...)},
 * {@link Logger#groupWarn(String, Object...)}, {@link Logger#groupError(String, Object...)}, {@link Logger#groupEnd()}
 * <li><strong>Timers</strong> - {@link Logger#timeDebug(String)}, {@link Logger#timeInfo(String)},
 * {@link Logger#timeWarn(String)}, {@link Logger#timeError(String)}, {@link Logger#timeEnd(String)}
 * <li><strong>Initialization from URL</strong> - {@link Logger#initFrom(elemental2.dom.Location)} to set the global log level
 * from a query parameter
 * </ul>
 *
 * @see Logger
 * @see Level
 */
package org.jboss.elemento.logger;
