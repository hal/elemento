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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SQLTransaction {
  @JsFunction
  public interface ExecuteSqlErrorCallbackFn {
    boolean onInvoke(SQLTransaction p0, SQLError p1);
  }

  public native void executeSql(
      String sqlStatement,
      JsArray<Object> queryArgs,
      SQLStatementCallback callback,
      SQLTransaction.ExecuteSqlErrorCallbackFn errorCallback);

  public native void executeSql(
      String sqlStatement, JsArray<Object> queryArgs, SQLStatementCallback callback);

  public native void executeSql(String sqlStatement, JsArray<Object> queryArgs);

  @JsOverlay
  public final void executeSql(
      String sqlStatement,
      Object[] queryArgs,
      SQLStatementCallback callback,
      SQLTransaction.ExecuteSqlErrorCallbackFn errorCallback) {
    executeSql(sqlStatement, Js.<JsArray<Object>>uncheckedCast(queryArgs), callback, errorCallback);
  }

  @JsOverlay
  public final void executeSql(
      String sqlStatement, Object[] queryArgs, SQLStatementCallback callback) {
    executeSql(sqlStatement, Js.<JsArray<Object>>uncheckedCast(queryArgs), callback);
  }

  @JsOverlay
  public final void executeSql(String sqlStatement, Object[] queryArgs) {
    executeSql(sqlStatement, Js.<JsArray<Object>>uncheckedCast(queryArgs));
  }

  public native void executeSql(String sqlStatement);
}

