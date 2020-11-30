goog.module('jsinterop.base.JsPropertyMap.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');

class JsPropertyMap_$Overlay {
 /** @template T @return {Object<string, T>} */
 static m_of__() {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {Object<string, T>}*/ (InternalJsUtil.emptyObjectLiteral());
 }
 /** @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object(/** ?string */ k, /** T */ v) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k, v);
  return map;
 }
 /** @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object(/** ?string */ k1, /** T */ v1, /** ?string */ k2, /** T */ v2) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k1, v1);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k2, v2);
  return map;
 }
 /** @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object(/** ?string */ k1, /** T */ v1, /** ?string */ k2, /** T */ v2, /** ?string */ k3, /** T */ v3) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k1, v1);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k2, v2);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k3, v3);
  return map;
 }
 /** @template T @return {T} */
 static m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {T}*/ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /** @template T @return {*} */
 static m_nestedGet__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ qualifiedName) {
  JsPropertyMap_$Overlay.$clinit();
  return goog.getObjectByName(qualifiedName, $thisArg);
 }
 /** @template T @return {*} @deprecated */
 static m_getAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return JsPropertyMap_$Overlay.m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName);
 }
 /** @template T @return {*} */
 static m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {*}*/ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /** @template T @return {*} */
 static m_nestedGetAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ qualifiedName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {*}*/ (goog.getObjectByName(qualifiedName, $thisArg));
 }
 /** @template T @return {boolean} */
 static m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return InternalJsUtil.hasIndexed($thisArg, propertyName);
 }
 /** @template T */
 static m_delete__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, propertyName);
 }
 /** @template T */
 static m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName, /** T */ value) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, propertyName, value);
 }
 /** @template T */
 static m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn(/** !Object<string, T> */ $thisArg, /** ?function(?string):void */ cb) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.forEach($thisArg, cb);
 }
 
 static $clinit() {
  JsPropertyMap_$Overlay.$clinit = () =>{};
  JsPropertyMap_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
 }
 
}

exports = JsPropertyMap_$Overlay; 
//# sourceMappingURL=JsPropertyMap$$Overlay.js.map
