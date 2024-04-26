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

import elemental2.core.JsDate;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.logger.Level.DEBUG;
import static org.jboss.elemento.logger.Level.ERROR;
import static org.jboss.elemento.logger.Level.INFO;
import static org.jboss.elemento.logger.Level.WARN;

/**
 * Small wrapper around <code>console.log</code> that uses categories, {@linkplain Level log levels}, and a predefined log format.
 * <p>
 * The different log methods delegate to the corresponding methods in <code>console</code>:
 * <ol>
 *     <li>{@link #error(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error_static"><code>console.error()</code></a></li>
 *     <li>{@link #warn(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static"><code>console.warn()</code></a></li>
 *     <li>{@link #info(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/info_static"><code>console.info()</code></a></li>
 *     <li>{@link #debug(String, Object...)} → <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/debug_static"><code>console.debug()</code></a></li>
 * </ol>
 * <p>
 * To get a logger use {@link Logger#getLogger(String)}. <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions">String substitutions</a> are supported, and you can pass arbitrary parameters to the log methods. The log level is set globally for all categories using {@link Logger#setLevel(Level)}.
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

    private static Level level = INFO;
    private static final Map<String, Logger> loggers = new HashMap<>();

    public static Logger getLogger(String name) {
        Logger logger = loggers.get(name);
        if (logger == null) {
            logger = new Logger(name);
            loggers.put(name, logger);
        }
        return logger;
    }

    public static void setLevel(Level level) {
        Logger.level = level;
    }

    private final String category;

    private Logger(String category) {
        this.category = Category.format(category, 23);
    }

    public void debug(String message, Object... params) {
        if (level.ordinal() >= DEBUG.ordinal()) {
            if (params == null || params.length == 0) {
                console.debug(format(DEBUG, message));
            } else {
                console.debug(format(DEBUG, message), params);
            }
        }
    }

    public void info(String message, Object... params) {
        if (level.ordinal() >= INFO.ordinal()) {
            if (params == null || params.length == 0) {
                console.info(format(INFO, message));
            } else {
                console.info(format(INFO, message), params);
            }
        }
    }

    public void warn(String message, Object... params) {
        if (level.ordinal() >= WARN.ordinal()) {
            if (params == null || params.length == 0) {
                console.warn(format(WARN, message));
            } else {
                console.warn(format(WARN, message), params);
            }
        }
    }

    public void error(String message, Object... params) {
        if (params == null || params.length == 0) {
            console.error(format(ERROR, message));
        } else {
            console.error(format(ERROR, message), params);
        }
    }

    private String format(Level level, String message) {
        String iso = new JsDate().toISOString(); // 2011-10-05T14:48:00.000Z
        return iso.substring(11, 23) + " " + level.label + " [" + category + "] " + message;
    }
}
