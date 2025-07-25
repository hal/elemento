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
import elemental2.core.JsMap;
import elemental2.core.JsRegExp;
import elemental2.core.JsSet;
import elemental2.core.JsWeakMap;
import elemental2.core.JsWeakSet;
import elemental2.dom.Event;
import elemental2.dom.Location;
import elemental2.dom.Node;
import elemental2.dom.URLSearchParams;
import elemental2.dom.Window;
import jsinterop.annotations.JsMethod;
import jsinterop.base.Js;

import static elemental2.core.JsArray.asJsArray;
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
 * You can use an arbitrary string as a category. By using a hierarchical category, you can override subcategories.
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions">String substitutions</a>
 * are supported, and you can pass a variable list of parameters to the log methods.
 * <p>
 * The log level is set globally for all categories using {@link Logger#setLevel(Level)}.
 * You can override the level for one category using {@link Logger#setLevel(String, Level)}.
 * To reset a category, use {@link Logger#resetLevel(String)}. If the category contains <code>.</code>,
 * it is interpreted hierarchically. This means that if the category <code>org.jboss</code> is overridden,
 * this is also applied to all subcategories (unless overridden otherwise).
 * <p>
 * The log format is predefined as
 * <pre>
 * HH:mm:ss.SSS &lt;level&gt; [&lt;category&gt;] &lt;message&gt;
 * </pre>
 * and cannot be customized. If the category is a fully qualified class name, the package names are shortened.
 * In any case the category is trimmed and right-aligned.
 * <p>
 * The logger exports some methods with slightly adjusted signatures to JavaScript. You can use them, for instance,
 * in the browser dev tools to control the global and category-based log levels:
 * <ul>
 *     <li><code>org.jboss.elemento.logger.Logger.setLevel(String level)</code> - sets the global log level</li>
 *     <li><code>org.jboss.elemento.logger.Logger.setLevel(String category, String level)</code> - overrides the log level for one category</li>
 *     <li><code>org.jboss.elemento.logger.Logger.resetLevel(String category)</code> - resets the log level for the category to the global log level</li>
 * </ul>
 * Please use the fully qualified name!
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/console/log_static">https://developer.mozilla.org/en-US/docs/Web/API/console/log_static</a>
 */
public class Logger {

    public static final Level DEFAULT_LEVEL = INFO;
    public static final String LOG_LEVEL_PARAMETER = "log-level";
    private static final int CATEGORY_LENGTH = 23;
    private static final String ROOT_CATEGORY = "root";
    private static final Logger ROOT_LOGGER = new Logger(ROOT_CATEGORY);

    // package local because of unit tests
    static final Map<String, Logger> loggers = new HashMap<>();
    static final LevelOverrides levelOverrides = new LevelOverrides();
    static Level level = DEFAULT_LEVEL;

    static {
        loggers.put(ROOT_CATEGORY, ROOT_LOGGER);
    }

    // ------------------------------------------------------ static API

    /**
     * Sets the global log level from the {@value #LOG_LEVEL_PARAMETER} query parameter. If no query parameter was given, this
     * method does nothing.
     */
    public static void initFrom(Location location) {
        initFrom(location, LOG_LEVEL_PARAMETER);
    }

    /**
     * Sets the global log level from the specified query parameter. If no query parameter was given, this method does nothing.
     */
    public static void initFrom(Location location, String queryParameter) {
        if (!location.search.isEmpty()) {
            URLSearchParams query = new URLSearchParams(location.search);
            if (query.has(LOG_LEVEL_PARAMETER)) {
                String logLevel = query.get(queryParameter);
                try {
                    Level level = Level.valueOf(logLevel.toUpperCase());
                    Logger.setLevel(level);
                } catch (IllegalArgumentException e) {
                    console.error("Cannot init log level from query parameter '%s'. Invalid level: '%s'",
                            queryParameter, level);
                }
            }
        }
    }

    /**
     * Retrieves or creates a logger with the specified category.
     *
     * @param category the category of the logger
     * @return the logger instance
     */
    public static Logger getLogger(String category) {
        Logger logger;
        if (category == null || category.isEmpty()) {
            logger = ROOT_LOGGER;
        } else {
            logger = loggers.get(category);
            if (logger == null) {
                logger = new Logger(category);
                loggers.put(category, logger);
                applyOverrides();
            }
        }
        return logger;
    }

    /**
     * Sets the global log level.
     *
     * @param level the desired log level to be set
     */
    public static void setLevel(Level level) {
        Logger.level = level;
        console.info("Set global log level to %s", level.name());
    }

    /**
     * Sets the log level for a given category.
     *
     * @param category the category for which to set the log level
     * @param level    the log level to be set
     */
    public static void setLevel(String category, Level level) {
        levelOverrides.addLevel(category, level);
        applyOverrides();
        console.info("Set log level for %s to %s", category, level.name());
    }

    /**
     * Resets the log level for the specified category to the global log level.
     *
     * @param category the category for which the log level needs to be reset
     */
    @JsMethod
    public static void resetLevel(String category) {
        levelOverrides.removeLevel(category);
        applyOverrides();
        console.info("Log level for %s has been reset to global log level (%s)", category, Logger.level.name());
    }

    @JsMethod(name = "setLevel")
    // String-based variant for JavaScript only
    private static void jsSetLevel(String category, String level) {
        if (Js.typeof(level).equals("undefined")) {
            try {
                // just one parameter: category == level
                setLevel(Level.valueOf(category.toUpperCase()));
            } catch (IllegalArgumentException e) {
                console.error("Cannot set global log level. Invalid level: '%s'", category);
            }
        } else {
            try {
                setLevel(category, Level.valueOf(level.toUpperCase()));
            } catch (IllegalArgumentException e) {
                console.error("Cannot set log level for '%s'. Invalid level: '%s'", category, level);
            }
        }
    }

    private static void applyOverrides() {
        for (Map.Entry<String, Logger> entry : loggers.entrySet()) {
            String category = entry.getKey();
            Logger logger = entry.getValue();
            logger.customLevel = levelOverrides.overriddenLevel(category);
        }
    }

    // ------------------------------------------------------ instance

    private final String formattedCategory;
    private Level customLevel;

    private Logger(String category) {
        this.formattedCategory = Category.format(category, CATEGORY_LENGTH);
        this.customLevel = null;
    }

    // ------------------------------------------------------ log methods

    public void debug(String message, Object... params) {
        if (isEnabled(DEBUG)) {
            String formatted = format(DEBUG, message);
            if (params == null || params.length == 0) {
                console.debug(formatted);
            } else {
                // I wish there was another way to pass the variable arguments to console.debug()
                // But 'console.debug(formatted, params)' does not work as expected :-(
                Object[] p = adjustParams(params);
                switch (params.length) {
                    // @formatter:off
                    case  1: console.debug(formatted, p[0]); break;
                    case  2: console.debug(formatted, p[0], p[1]); break;
                    case  3: console.debug(formatted, p[0], p[1], p[2]); break;
                    case  4: console.debug(formatted, p[0], p[1], p[2], p[3]); break;
                    case  5: console.debug(formatted, p[0], p[1], p[2], p[3], p[4]); break;
                    case  6: console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                    case  7: console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                    case  8: console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                    case  9: console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                    case 10: console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                    default: console.debug(formatted, asJsArray(p));
                    // @formatter:on
                }
            }
        }
    }

    public void info(String message, Object... params) {
        if (isEnabled(INFO)) {
            String formatted = format(INFO, message);
            if (params == null || params.length == 0) {
                console.info(formatted);
            } else {
                Object[] p = adjustParams(params);
                switch (params.length) {
                    // @formatter:off
                    case  1: console.info(formatted, p[0]); break;
                    case  2: console.info(formatted, p[0], p[1]); break;
                    case  3: console.info(formatted, p[0], p[1], p[2]); break;
                    case  4: console.info(formatted, p[0], p[1], p[2], p[3]); break;
                    case  5: console.info(formatted, p[0], p[1], p[2], p[3], p[4]); break;
                    case  6: console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                    case  7: console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                    case  8: console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                    case  9: console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                    case 10: console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                    default: console.info(formatted, asJsArray(p));
                    // @formatter:on
                }
            }
        }
    }

    public void warn(String message, Object... params) {
        if (isEnabled(WARN)) {
            String formatted = format(WARN, message);
            if (params == null || params.length == 0) {
                console.warn(formatted);
            } else {
                Object[] p = adjustParams(params);
                switch (params.length) {
                    // @formatter:off
                    case  1: console.warn(formatted, p[0]); break;
                    case  2: console.warn(formatted, p[0], p[1]); break;
                    case  3: console.warn(formatted, p[0], p[1], p[2]); break;
                    case  4: console.warn(formatted, p[0], p[1], p[2], p[3]); break;
                    case  5: console.warn(formatted, p[0], p[1], p[2], p[3], p[4]); break;
                    case  6: console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                    case  7: console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                    case  8: console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                    case  9: console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                    case 10: console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                    default: console.warn(formatted, asJsArray(p));
                    // @formatter:on
                }
            }
        }
    }

    public void error(String message, Object... params) {
        if (isEnabled(ERROR)) {
            String formatted = format(ERROR, message);
            if (params == null || params.length == 0) {
                console.error(formatted);
            } else {
                Object[] p = adjustParams(params);
                switch (params.length) {
                    // @formatter:off
                    case  1: console.error(formatted, p[0]); break;
                    case  2: console.error(formatted, p[0], p[1]); break;
                    case  3: console.error(formatted, p[0], p[1], p[2]); break;
                    case  4: console.error(formatted, p[0], p[1], p[2], p[3]); break;
                    case  5: console.error(formatted, p[0], p[1], p[2], p[3], p[4]); break;
                    case  6: console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                    case  7: console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                    case  8: console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                    case  9: console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                    case 10: console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                    default: console.error(formatted, asJsArray(p));
                    // @formatter:on
                }
            }
        }
    }

    public boolean isEnabled(Level level) {
        Level effectiveLevel = customLevel != null ? customLevel : Logger.level;
        return effectiveLevel.ordinal() >= level.ordinal();
    }

    // ------------------------------------------------------ grouping

    public void groupDebug(String message, Object... params) {
        if (isEnabled(DEBUG)) {
            String formatted = format(DEBUG, message);
            group(formatted, params);
        }
    }

    public void groupInfo(String message, Object... params) {
        if (isEnabled(INFO)) {
            String formatted = format(INFO, message);
            group(formatted, params);
        }
    }

    public void groupWarn(String message, Object... params) {
        if (isEnabled(WARN)) {
            String formatted = format(WARN, message);
            group(formatted, params);
        }
    }

    public void groupError(String message, Object... params) {
        if (isEnabled(ERROR)) {
            String formatted = format(ERROR, message);
            group(formatted, params);
        }
    }

    public void groupEnd() {
        console.groupEnd();
    }

    private void group(String formatted, Object... params) {
        if (params == null || params.length == 0) {
            console.group(formatted);
        } else {
            // I wish there was another way to pass the variable arguments to console.group()
            // But 'console.group(formatted, params)' does not work as expected :-(
            Object[] p = adjustParams(params);
            switch (params.length) {
                // @formatter:off
                case  1: console.group(formatted, p[0]); break;
                case  2: console.group(formatted, p[0], p[1]); break;
                case  3: console.group(formatted, p[0], p[1], p[2]); break;
                case  4: console.group(formatted, p[0], p[1], p[2], p[3]); break;
                case  5: console.group(formatted, p[0], p[1], p[2], p[3], p[4]); break;
                case  6: console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                case  7: console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                case  8: console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                case  9: console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                case 10: console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                default: console.group(formatted, asJsArray(p));
                // @formatter:on
            }
        }
    }

    // ------------------------------------------------------ timers

    public String timeDebug(String message) {
        if (isEnabled(DEBUG)) {
            String timer = format(DEBUG, message);
            console.time(timer);
            return timer;
        }
        return null;
    }

    public void timeDebugLog(String timer, Object... params) {
        if (isEnabled(DEBUG)) {
            timeLog(timer, params);
        }
    }

    public String timeInfo(String message) {
        if (isEnabled(INFO)) {
            String timer = format(INFO, message);
            console.time(timer);
            return timer;
        }
        return null;
    }

    public void timeInfoLog(String timer, Object... params) {
        if (isEnabled(INFO)) {
            timeLog(timer, params);
        }
    }

    public String timeWarn(String message) {
        if (isEnabled(WARN)) {
            String timer = format(WARN, message);
            console.time(timer);
            return timer;
        }
        return null;
    }

    public void timeWarnLog(String timer, Object... params) {
        if (isEnabled(WARN)) {
            timeLog(timer, params);
        }
    }

    public String timeError(String message) {
        if (isEnabled(ERROR)) {
            String timer = format(ERROR, message);
            console.time(timer);
            return timer;
        }
        return null;
    }

    public void timeErrorLog(String timer, Object... params) {
        if (isEnabled(ERROR)) {
            timeLog(timer, params);
        }
    }

    public void timeEnd(String timer) {
        console.timeEnd(timer);
    }

    private void timeLog(String timer, Object... params) {
        if (params == null || params.length == 0) {
            console.timeLog(timer);
        } else {
            // I wish there was another way to pass the variable arguments to console.timeLog()
            // But 'console.timeLog(timer, params)' does not work as expected :-(
            Object[] p = adjustParams(params);
            switch (params.length) {
                // @formatter:off
                case  1: console.timeLog(timer, p[0]); break;
                case  2: console.timeLog(timer, p[0], p[1]); break;
                case  3: console.timeLog(timer, p[0], p[1], p[2]); break;
                case  4: console.timeLog(timer, p[0], p[1], p[2], p[3]); break;
                case  5: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4]); break;
                case  6: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5]); break;
                case  7: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6]); break;
                case  8: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]); break;
                case  9: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]); break;
                case 10: console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]); break;
                default: console.timeLog(timer, asJsArray(p));
                // @formatter:on
            }
        }
    }

    // ------------------------------------------------------ internal

    private String format(Level level, String message) {
        String iso = new JsDate().toISOString(); // 2011-10-05T14:48:00.000Z
        return iso.substring(11, 23) + " " + level.label + " [" + formattedCategory + "] " + message;
    }

    private Object[] adjustParams(Object[] params) {
        Object[] p = new Object[params.length];
        for (int i = 0; i < params.length; i++) {
            if (jsNative(params[i])) {
                p[i] = params[i];
            } else {
                try {
                    p[i] = String.valueOf(params[i]);
                } catch (Throwable t) {
                    p[i] = "error calling String.valueOf() of parameter #" + i + ": " + t.getMessage();
                }
            }
        }
        return p;
    }

    private boolean jsNative(Object object) {
        // Check for null, primitives, or known native JS types
        if (object == null || !Js.typeof(object).equals("object")) {
            return true;
        }

        // Use Object.prototype.toString.call(obj) to get the internal [[Class]] property
        // This is a more reliable way to detect native JS objects
        String objectType = getObjectType(object);
        return objectType.startsWith("[object ") &&
                !objectType.equals("[object Object]") &&
                !objectType.equals("[object Array]"); // Regular JS objects and arrays should be stringified
    }

    @JsMethod(namespace = "Object.prototype.toString")
    private static native String call(Object obj);

    private String getObjectType(Object obj) {
        try {
            return call(obj);
        } catch (Exception e) {
            // Fallback to the instanceof checks if the above method fails
            return isKnownNativeType(obj) ? "[object Native]" : "[object Object]";
        }
    }

    private boolean isKnownNativeType(Object object) {
        return object instanceof JsArray ||
                object instanceof JsSet ||
                object instanceof JsMap ||
                object instanceof JsWeakSet ||
                object instanceof JsWeakMap ||
                object instanceof JsRegExp ||
                object instanceof JsDate ||
                object instanceof Event ||
                object instanceof Window ||
                object instanceof Node;
    }
}
