goog.module('jsinterop.base.InternalJsUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class');
let j_l_Class = goog.forwardDeclare('java.lang.Class$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsConstructorFn_$Overlay = goog.forwardDeclare('jsinterop.base.JsConstructorFn.$Overlay$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class InternalJsUtil extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 // /** @template T @return {Object<string, T>} */
 // native static emptyObjectLiteral() 
 // /** @return {*} */
 // native static getIndexed(/** * */ obj, /** ?string */ key) 
 // /** @return {boolean} */
 // native static hasIndexed(/** * */ obj, /** ?string */ key) 
 // /** @return {*} */
 // native static deleteIndexed(/** * */ obj, /** ?string */ key) 
 // 
 // native static setIndexed(/** * */ obj, /** ?string */ key, /** * */ value) 
 // /** @return {*} */
 // native static getIndexed(/** * */ obj, /** number */ key) 
 // /** @return {boolean} */
 // native static hasIndexed(/** * */ obj, /** number */ key) 
 // 
 // native static deleteIndexed(/** * */ obj, /** number */ key) 
 // 
 // native static setIndexed(/** * */ obj, /** number */ key, /** * */ value) 
 // 
 // native static forEach(/** * */ obj, /** ?function(?string):void */ cb) 
 // /** @return {boolean} */
 // native static castToAny(/** * */ obj) 
 // /** @return {number} */
 // native static castToAny(/** * */ obj) 
 // /** @return {number} */
 // native static castToAny(/** * */ obj) 
 // /** @return {number} */
 // native static castToAny(/** * */ obj) 
 // /** @return {number} */
 // native static castToAny(/** * */ obj) 
 // /** @return {number} */
 // native static castToAny(/** * */ obj) 
 // /** @return {!$Long} */
 // native static castToAny(/** * */ obj) 
 // /** @return {boolean} */
 // native static isLong(/** * */ obj) 
 // /** @return {boolean} */
 // native static isInt(/** * */ obj) 
 // /** @return {boolean} */
 // native static hasLength(/** * */ obj) 
 // /** @return {number} */
 // native static getLength(/** IArrayLike<?> */ obj) 
 // 
 // native static setLength(/** IArrayLike<?> */ obj, /** number */ length) 
 // /** @template T @return {?function(...*):void} */
 // native static toCtor(/** j_l_Class<T> */ clazz) 
 /** @return {!InternalJsUtil} */
 static $create__() {
  let $instance = new InternalJsUtil();
  $instance.$ctor__jsinterop_base_InternalJsUtil__();
  return $instance;
 }
 
 $ctor__jsinterop_base_InternalJsUtil__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  InternalJsUtil.$clinit = () =>{};
  InternalJsUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalJsUtil;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class');
 }
 
}
$Util.$setClassMetadata(InternalJsUtil, 'jsinterop.base.InternalJsUtil');

/* NATIVE.JS EPILOG */

const jsinterop_base_InternalJsUtil = InternalJsUtil;

/*
 * Copyright 2016 Google Inc.
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
 *
 */

/**
 * @return {Object}
 * @public
 */
InternalJsUtil.emptyObjectLiteral = function() {
  return {};
};

/**
 * @template T
 * @param {*} obj
 * @param {string|number} key
 * @return {T}
 * @public
 */
InternalJsUtil.getIndexed = function(obj, key) {
  return obj[key];
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @return {boolean}
 * @public
 */
InternalJsUtil.hasIndexed = function(obj, key) {
  return key in obj;
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @return {void}
 * @public
 */
InternalJsUtil.deleteIndexed = function(obj, key) {
  delete obj[key];
};

/**
 * @param {*} obj
 * @param {string|number} key
 * @param {*} value
 * @return {void}
 * @public
 */
InternalJsUtil.setIndexed = function(obj, key, value) {
  obj[key] = value;
};


/**
 * @param {*} obj
 * @param {function(?string):void} cb
 * @return {void}
 * @public
 */
InternalJsUtil.forEach = function(obj, cb) {
  for (let key in obj) {
    cb(key);
  }
};

/**
 * @template T
 * @param {*} obj
 * @return {T}
 * @public
 */
InternalJsUtil.castToAny = function(obj) {
  return obj;
};

const $Long_ = goog.require('nativebootstrap.Long');

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.isLong = function(obj) {
  return obj instanceof $Long_;
};

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.isInt = function(obj) {
  return ( /** @type {?} */ (obj) | 0) === obj;
};

/**
 * @param {*} obj
 * @return {boolean}
 * @public
 */
InternalJsUtil.hasLength = function(obj) {
  return typeof obj == 'object' && typeof obj.length == 'number';
};

/**
 * @param {IArrayLike} obj
 * @return {number}
 * @public
 */
InternalJsUtil.getLength = function(obj) {
  return obj.length;
};

/**
 * @param {IArrayLike} obj
 * @param {number} length
 * @public
 */
InternalJsUtil.setLength = function(obj, length) {
  obj.length = length;
};

const javaLangClass = goog.forwardDeclare('java.lang.Class');

/**
 * @param {javaLangClass<T>} clazz
 * @return {function(new:T)}
 * @template T
 * @public
 */
InternalJsUtil.toCtor = function(clazz) {
  return /** @type {?} */ (clazz.f_ctor__java_lang_Class_);
};



exports = InternalJsUtil; 
//# sourceMappingURL=InternalJsUtil.js.map
