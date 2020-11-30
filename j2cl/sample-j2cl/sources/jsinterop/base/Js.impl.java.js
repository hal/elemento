goog.module('jsinterop.base.Js$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Any_$Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');
let InternalPreconditions = goog.forwardDeclare('jsinterop.base.InternalPreconditions$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsConstructorFn_$Overlay = goog.forwardDeclare('jsinterop.base.JsConstructorFn.$Overlay$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Js extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {?function(...*):void} */
 static m_asConstructorFn__java_lang_Class(/** Class<T> */ clazz) {
  Js.$clinit();
  let fn = /**@type {?function(...*):void}*/ (InternalJsUtil.toCtor(clazz));
  InternalPreconditions.m_checkType__boolean(!$Equality.$same(fn, null));
  return fn;
 }
 /** @return {*} */
 static m_asAny__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return /**@type {*}*/ (Js.m_uncheckedCast__java_lang_Object(obj));
 }
 /** @return {Object<string, *>} */
 static m_asPropertyMap__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return /**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object(obj));
 }
 /** @return {IArrayLike<*>} */
 static m_asArrayLike__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean($Equality.$same(obj, null) || InternalJsUtil.hasLength(obj));
  return /**@type {IArrayLike<*>}*/ (Js.m_uncheckedCast__java_lang_Object(obj));
 }
 /** @return {Array<*>} */
 static m_asArray__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean($Arrays.$instanceIsOfNative(obj));
  return /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(obj));
 }
 /** @return {?string} */
 static m_asString__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean($Equality.$same(typeof(obj), "string"));
  return /**@type {?string}*/ (Js.m_uncheckedCast__java_lang_Object(obj));
 }
 /** @return {boolean} */
 static m_asBoolean__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean($Equality.$same(typeof(obj), "boolean"));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asDouble__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean($Equality.$same(typeof(obj), "number"));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asFloat__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return Js.m_asDouble__java_lang_Object(obj);
 }
 /** @return {!$Long} */
 static m_asLong__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean(InternalJsUtil.isLong(obj));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asInt__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  InternalPreconditions.m_checkType__boolean(InternalJsUtil.isInt(obj));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asShort__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  let num = Js.m_asInt__java_lang_Object(obj);
  InternalPreconditions.m_checkType__boolean(num == $Primitives.$narrowIntToShort(num));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asChar__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  let num = Js.m_asInt__java_lang_Object(obj);
  InternalPreconditions.m_checkType__boolean(num == $Primitives.$narrowIntToChar(num));
  return InternalJsUtil.castToAny(obj);
 }
 /** @return {number} */
 static m_asByte__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  let num = Js.m_asInt__java_lang_Object(obj);
  InternalPreconditions.m_checkType__boolean(num == $Primitives.$narrowIntToByte(num));
  return InternalJsUtil.castToAny(obj);
 }
 /** @template T @return {T} */
 static m_cast__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return /**@type {T}*/ (obj);
 }
 /** @template T @return {T} */
 static m_uncheckedCast__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return /**@type {T}*/ (obj);
 }
 /** @return {boolean} */
 static m_isTruthy__java_lang_Object(/** * */ obj) {
  Js.$clinit();
  return !Js.isFalsy(obj);
 }
 // /** @return {boolean} */
 // native static isFalsy(/** * */ obj) 
 // /** @return {boolean} */
 // native static isTripleEqual(/** * */ o1, /** * */ o2) 
 // /** @return {number} */
 // native static coerceToDouble(/** * */ d) 
 /** @return {number} */
 static m_coerceToInt__java_lang_Object(/** * */ d) {
  Js.$clinit();
  return InternalJsUtil.castToAny(d) | 0;
 }
 /** @return {!Js} */
 static $create__() {
  let $instance = new Js();
  $instance.$ctor__jsinterop_base_Js__();
  return $instance;
 }
 
 $ctor__jsinterop_base_Js__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Js.$clinit = () =>{};
  Js.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Js;
 }
 
 static $loadModules() {
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
  InternalPreconditions = goog.module.get('jsinterop.base.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(Js, 'jsinterop.base.Js');

/* NATIVE.JS EPILOG */

const jsinterop_base_Js = Js;

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
 * @param {*} obj
 * @return {boolean}
 * @public
 */
Js.isFalsy = function(obj) {
  return !obj;
};

/**
 * @param {*} obj1
 * @param {*} obj2
 * @return {boolean}
 * @public
 */
Js.isTripleEqual = function(obj1, obj2) {
  return obj1 === obj2;
};

/**
 * @param {*} d
 * @return {number}
 * @public
 */
Js.coerceToDouble = function(d) {
  return +/** @type {?} */ (d);
};



exports = Js; 
//# sourceMappingURL=Js.js.map
