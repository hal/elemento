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
package org.jboss.elemento.logger;

import java.util.HashMap;
import java.util.Map;

import elemental2.core.JsArray;
import elemental2.core.JsDate;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.logger.Level.DEBUG;
import static org.jboss.elemento.logger.Level.ERROR;
import static org.jboss.elemento.logger.Level.INFO;
import static org.jboss.elemento.logger.Level.WARN;

/**
 * Small wrapper around <code>console.log</code> that uses categories, {@linkplain Level log levels}, and a predefined log
 * format.
 * <p>
 * The different log methods delegate to the corresponding methods in <code>console</code>:
 * <ol>
 *     <li>{@link #error(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error_static"><code>console.error()</code></a></li>
 *     <li>{@link #warn(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static"><code>console.warn()</code></a></li>
 *     <li>{@link #info(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/info_static"><code>console.info()</code></a></li>
 *     <li>{@link #debug(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/debug_static"><code>console.debug()</code></a></li>
 * </ol>
 * <p>
 * To get a logger use {@link Logger#getLogger(String)}. You can use an arbitrary string as category. If you use a fully qualified class name as category the package names are shortened. In any case the category is trimmed, and right aligned. <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions">String substitutions</a> are supported, and you can pass arbitrary parameters to the log methods.
 * <p>
 * The log level is set globally for all categories using {@link Logger#setLevel(Level)}.
 * <p>
 * The log format is predefined as
 * <pre>
 * HH:mm:ss,SSS &lt;level&gt; [&lt;category&gt;] &lt;message&gt;
 * </pre>
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/log_static">https://developer.mozilla.org/en-US/docs/Web/API/console/log_static</a>
 */
public class Logger {

    private static final int CATEGORY_LENGTH = 23;
    private static final String ROOT_CATEGORY = "root";
    private static final Map<String, Logger> loggers = new HashMap<>();
    private static Level level = INFO;

    public static Logger getLogger(String name) {
        String safeName = name == null || name.isEmpty() ? ROOT_CATEGORY : name;
        Logger logger = loggers.get(safeName);
        if (logger == null) {
            logger = new Logger(safeName);
            loggers.put(safeName, logger);
        }
        return logger;
    }

    public static void setLevel(Level level) {
        Logger.level = level;
    }

    private final String category;

    private Logger(String category) {
        this.category = Category.format(category, CATEGORY_LENGTH);
    }

    public void debug(String message, Object... params) {
        if (level.ordinal() >= DEBUG.ordinal()) {
            String formatted = format(DEBUG, message);
            if (params == null || params.length == 0) {
                console.debug(formatted);
            } else {
                // I wish there was another way to pass the variable arguments to console.log()
                // But just passing 'params' does not work :-(
                // @formatter:off
                switch (params.length) {
                    case 1: console.debug(formatted, params[0]); break;
                    case 2: console.debug(formatted, params[0], params[1]); break;
                    case 3: console.debug(formatted, params[0], params[1], params[2]); break;
                    case 4: console.debug(formatted, params[0], params[1], params[2], params[3]); break;
                    case 5: console.debug(formatted, params[0], params[1], params[2], params[3], params[4]); break;
                    case 6: console.debug(formatted, params[0], params[1], params[2], params[3], params[4], params[5]); break;
                    case 7: console.debug(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6]); break;
                    case 8: console.debug(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7]); break;
                    case 9: console.debug(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8]); break;
                    case 10: console.debug(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]); break;
                    default: console.debug(formatted, asJsArray());
                }
                // @formatter:on
            }
        }
    }

    public void info(String message, Object... params) {
        if (level.ordinal() >= INFO.ordinal()) {
            String formatted = format(INFO, message);
            if (params == null || params.length == 0) {
                console.info(formatted);
            } else {
                // @formatter:off
                switch (params.length) {
                    case 1: console.info(formatted, params[0]); break;
                    case 2: console.info(formatted, params[0], params[1]); break;
                    case 3: console.info(formatted, params[0], params[1], params[2]); break;
                    case 4: console.info(formatted, params[0], params[1], params[2], params[3]); break;
                    case 5: console.info(formatted, params[0], params[1], params[2], params[3], params[4]); break;
                    case 6: console.info(formatted, params[0], params[1], params[2], params[3], params[4], params[5]); break;
                    case 7: console.info(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6]); break;
                    case 8: console.info(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7]); break;
                    case 9: console.info(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8]); break;
                    case 10: console.info(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]); break;
                    default: console.info(formatted, asJsArray());
                }
                // @formatter:on
            }
        }
    }

    public void warn(String message, Object... params) {
        if (level.ordinal() >= WARN.ordinal()) {
            String formatted = format(WARN, message);
            if (params == null || params.length == 0) {
                console.warn(formatted);
            } else {
                // @formatter:off
                switch (params.length) {
                    case 1: console.warn(formatted, params[0]); break;
                    case 2: console.warn(formatted, params[0], params[1]); break;
                    case 3: console.warn(formatted, params[0], params[1], params[2]); break;
                    case 4: console.warn(formatted, params[0], params[1], params[2], params[3]); break;
                    case 5: console.warn(formatted, params[0], params[1], params[2], params[3], params[4]); break;
                    case 6: console.warn(formatted, params[0], params[1], params[2], params[3], params[4], params[5]); break;
                    case 7: console.warn(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6]); break;
                    case 8: console.warn(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7]); break;
                    case 9: console.warn(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8]); break;
                    case 10: console.warn(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]); break;
                    default: console.warn(formatted, asJsArray());
                }
                // @formatter:on
            }
        }
    }

    public void error(String message, Object... params) {
        String formatted = format(ERROR, message);
        if (params == null || params.length == 0) {
            console.error(formatted);
        } else {
            // @formatter:off
            switch (params.length) {
                case 1: console.error(formatted, params[0]); break;
                case 2: console.error(formatted, params[0], params[1]); break;
                case 3: console.error(formatted, params[0], params[1], params[2]); break;
                case 4: console.error(formatted, params[0], params[1], params[2], params[3]); break;
                case 5: console.error(formatted, params[0], params[1], params[2], params[3], params[4]); break;
                case 6: console.error(formatted, params[0], params[1], params[2], params[3], params[4], params[5]); break;
                case 7: console.error(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6]); break;
                case 8: console.error(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7]); break;
                case 9: console.error(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8]); break;
                case 10: console.error(formatted, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]); break;
                default: console.error(formatted, asJsArray());
            }
            // @formatter:on
        }
    }

    private String format(Level level, String message) {
        String iso = new JsDate().toISOString(); // 2011-10-05T14:48:00.000Z
        return iso.substring(11, 23) + " " + level.label + " [" + category + "] " + message;
    }

    private JsArray<Object> asJsArray(Object... params) {
        JsArray<Object> array = new JsArray<>();
        for (Object obj : params) {
            array.push(obj);
        }
        return array;
    }
}
