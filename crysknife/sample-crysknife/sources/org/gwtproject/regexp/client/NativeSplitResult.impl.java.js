goog.module('org.gwtproject.regexp.client.NativeSplitResult$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SplitResult = goog.require('org.gwtproject.regexp.shared.SplitResult$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {SplitResult}
  */
class NativeSplitResult extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<?string>}*/
  this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_;
 }
 /** @return {!NativeSplitResult} */
 static $create__elemental2_core_JsArray(/** Array<?string> */ result) {
  NativeSplitResult.$clinit();
  let $instance = new NativeSplitResult();
  $instance.$ctor__org_gwtproject_regexp_client_NativeSplitResult__elemental2_core_JsArray(result);
  return $instance;
 }
 
 $ctor__org_gwtproject_regexp_client_NativeSplitResult__elemental2_core_JsArray(/** Array<?string> */ result) {
  this.$ctor__java_lang_Object__();
  this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_ = result;
 }
 /** @override @return {?string} */
 m_get__int(/** number */ index) {
  return /**@type {?string}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_, index), j_l_String));
 }
 /** @override @return {number} */
 m_length__() {
  return this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_.length;
 }
 /** @override */
 m_set__int__java_lang_String(/** number */ index, /** ?string */ value) {
  $Overlay.m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(this.f_jsArray__org_gwtproject_regexp_client_NativeSplitResult_, index, value);
 }
 
 static $clinit() {
  NativeSplitResult.$clinit = () =>{};
  NativeSplitResult.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeSplitResult;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeSplitResult, 'org.gwtproject.regexp.client.NativeSplitResult');

SplitResult.$markImplementor(NativeSplitResult);

exports = NativeSplitResult; 
//# sourceMappingURL=NativeSplitResult.js.map
