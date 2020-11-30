goog.module('org.gwtproject.regexp.client.NativeMatchResult$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MatchResult = goog.require('org.gwtproject.regexp.shared.MatchResult$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {MatchResult}
  */
class NativeMatchResult extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<?string>}*/
  this.f_array__org_gwtproject_regexp_client_NativeMatchResult_;
 }
 /** @return {!NativeMatchResult} */
 static $create__elemental2_core_JsArray(/** Array<?string> */ results) {
  NativeMatchResult.$clinit();
  let $instance = new NativeMatchResult();
  $instance.$ctor__org_gwtproject_regexp_client_NativeMatchResult__elemental2_core_JsArray(results);
  return $instance;
 }
 
 $ctor__org_gwtproject_regexp_client_NativeMatchResult__elemental2_core_JsArray(/** Array<?string> */ results) {
  this.$ctor__java_lang_Object__();
  this.f_array__org_gwtproject_regexp_client_NativeMatchResult_ = results;
 }
 /** @override @return {?string} */
 m_getGroup__int(/** number */ index) {
  return /**@type {?string}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_array__org_gwtproject_regexp_client_NativeMatchResult_, index), j_l_String));
 }
 /** @override @return {number} */
 m_getGroupCount__() {
  return this.f_array__org_gwtproject_regexp_client_NativeMatchResult_.length;
 }
 /** @override @return {number} */
 m_getIndex__() {
  return this.f_array__org_gwtproject_regexp_client_NativeMatchResult_.index;
 }
 /** @override @return {?string} */
 m_getInput__() {
  return this.f_array__org_gwtproject_regexp_client_NativeMatchResult_.input;
 }
 
 static $clinit() {
  NativeMatchResult.$clinit = () =>{};
  NativeMatchResult.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeMatchResult;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeMatchResult, 'org.gwtproject.regexp.client.NativeMatchResult');

MatchResult.$markImplementor(NativeMatchResult);

exports = NativeMatchResult; 
//# sourceMappingURL=NativeMatchResult.js.map
