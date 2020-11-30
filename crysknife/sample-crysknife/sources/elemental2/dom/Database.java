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

import elemental2.core.Function;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Database {
  @JsFunction
  public interface ChangeVersionCallbackFn {
    void onInvoke(SQLTransaction p0);
  }

  @JsFunction
  public interface ChangeVersionErrorCallbackFn {
    void onInvoke(SQLError p0);
  }

  @JsFunction
  public interface ReadTransactionCallbackFn {
    void onInvoke(SQLTransaction p0);
  }

  @JsFunction
  public interface ReadTransactionErrorCallbackFn {
    void onInvoke(SQLError p0);
  }

  @JsFunction
  public interface TransactionCallbackFn {
    void onInvoke(SQLTransaction p0);
  }

  @JsFunction
  public interface TransactionErrorCallbackFn {
    void onInvoke(SQLError p0);
  }

  public String version;

  public native void changeVersion(
      String oldVersion,
      String newVersion,
      Database.ChangeVersionCallbackFn callback,
      Database.ChangeVersionErrorCallbackFn errorCallback,
      Function successCallback);

  public native void readTransaction(
      Database.ReadTransactionCallbackFn callback,
      Database.ReadTransactionErrorCallbackFn errorCallback,
      Function Callback);

  public native void readTransaction(
      Database.ReadTransactionCallbackFn callback,
      Database.ReadTransactionErrorCallbackFn errorCallback);

  public native void readTransaction(Database.ReadTransactionCallbackFn callback);

  public native void transaction(
      Database.TransactionCallbackFn callback,
      Database.TransactionErrorCallbackFn errorCallback,
      Function Callback);

  public native void transaction(
      Database.TransactionCallbackFn callback, Database.TransactionErrorCallbackFn errorCallback);

  public native void transaction(Database.TransactionCallbackFn callback);
}

