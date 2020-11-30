goog.module('org.gwtproject.regexp.client.NativeRegExp$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const org_gwtproject_regexp_shared_RegExp = goog.require('org.gwtproject.regexp.shared.RegExp$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let JsRegExp_$Overlay = goog.forwardDeclare('elemental2.core.JsRegExp.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.core.JsString.$Overlay$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let NativeMatchResult = goog.forwardDeclare('org.gwtproject.regexp.client.NativeMatchResult$impl');
let NativeSplitResult = goog.forwardDeclare('org.gwtproject.regexp.client.NativeSplitResult$impl');
let MatchResult = goog.forwardDeclare('org.gwtproject.regexp.shared.MatchResult$impl');
let SplitResult = goog.forwardDeclare('org.gwtproject.regexp.shared.SplitResult$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {org_gwtproject_regexp_shared_RegExp}
  */
class NativeRegExp extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {RegExp}*/
  this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_;
 }
 //Factory method corresponding to constructor 'NativeRegExp(String)'.
 /** @return {!NativeRegExp} */
 static $create__java_lang_String(/** ?string */ pattern) {
  let $instance = new NativeRegExp();
  $instance.$ctor__org_gwtproject_regexp_client_NativeRegExp__java_lang_String(pattern);
  return $instance;
 }
 //Initialization from constructor 'NativeRegExp(String)'.
 
 $ctor__org_gwtproject_regexp_client_NativeRegExp__java_lang_String(/** ?string */ pattern) {
  this.$ctor__org_gwtproject_regexp_client_NativeRegExp__();
  this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.compile(pattern);
 }
 //Factory method corresponding to constructor 'NativeRegExp()'.
 /** @return {!NativeRegExp} */
 static $create__() {
  let $instance = new NativeRegExp();
  $instance.$ctor__org_gwtproject_regexp_client_NativeRegExp__();
  return $instance;
 }
 //Initialization from constructor 'NativeRegExp()'.
 
 $ctor__org_gwtproject_regexp_client_NativeRegExp__() {
  this.$ctor__java_lang_Object__();
  this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_ = new RegExp();
 }
 //Factory method corresponding to constructor 'NativeRegExp(String, String)'.
 /** @return {!NativeRegExp} */
 static $create__java_lang_String__java_lang_String(/** ?string */ pattern, /** ?string */ flags) {
  let $instance = new NativeRegExp();
  $instance.$ctor__org_gwtproject_regexp_client_NativeRegExp__java_lang_String__java_lang_String(pattern, flags);
  return $instance;
 }
 //Initialization from constructor 'NativeRegExp(String, String)'.
 
 $ctor__org_gwtproject_regexp_client_NativeRegExp__java_lang_String__java_lang_String(/** ?string */ pattern, /** ?string */ flags) {
  this.$ctor__org_gwtproject_regexp_client_NativeRegExp__();
  this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.compile(pattern, flags);
 }
 /** @return {org_gwtproject_regexp_shared_RegExp} */
 static m_compile__java_lang_String(/** ?string */ pattern) {
  NativeRegExp.$clinit();
  return NativeRegExp.$create__java_lang_String(pattern);
 }
 /** @return {org_gwtproject_regexp_shared_RegExp} */
 static m_compile__java_lang_String__java_lang_String(/** ?string */ pattern, /** ?string */ flags) {
  NativeRegExp.$clinit();
  return NativeRegExp.$create__java_lang_String__java_lang_String(pattern, flags);
 }
 /** @return {?string} */
 static m_quote__java_lang_String(/** ?string */ input) {
  NativeRegExp.$clinit();
  return $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(input), new RegExp("([.?*+^$[\\]\\\\(){}|-])", "g"), "\\$1");
 }
 /** @override @return {MatchResult} */
 m_exec__java_lang_String(/** ?string */ input) {
  let result = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.exec(input)));
  return Objects.m_isNull__java_lang_Object(result) ? null : NativeMatchResult.$create__elemental2_core_JsArray(/**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object(result), JsArray_$Overlay)));
 }
 /** @override @return {boolean} */
 m_getGlobal__() {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.global;
 }
 /** @override @return {boolean} */
 m_getIgnoreCase__() {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.ignoreCase;
 }
 /** @override @return {number} */
 m_getLastIndex__() {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.lastIndex;
 }
 /** @override @return {boolean} */
 m_getMultiline__() {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.multiline;
 }
 /** @override @return {?string} */
 m_getSource__() {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.source;
 }
 /** @override @return {?string} */
 m_replace__java_lang_String__java_lang_String(/** ?string */ input, /** ?string */ replacement) {
  return $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(input), this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_, replacement);
 }
 /** @override */
 m_setLastIndex__int(/** number */ lastIndex) {
  this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.lastIndex = lastIndex;
 }
 /** @override @return {SplitResult} */
 m_split__java_lang_String(/** ?string */ input) {
  return NativeSplitResult.$create__elemental2_core_JsArray(/**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object(new String(input).split(this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_)), JsArray_$Overlay)));
 }
 /** @override @return {SplitResult} */
 m_split__java_lang_String__int(/** ?string */ input, /** number */ limit) {
  return NativeSplitResult.$create__elemental2_core_JsArray(/**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object(new String(input).split(this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_, limit)), JsArray_$Overlay)));
 }
 /** @override @return {boolean} */
 m_test__java_lang_String(/** ?string */ input) {
  return this.f_jsRegExp__org_gwtproject_regexp_client_NativeRegExp_.test(input);
 }
 
 static $clinit() {
  NativeRegExp.$clinit = () =>{};
  NativeRegExp.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeRegExp;
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.core.JsString.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  NativeMatchResult = goog.module.get('org.gwtproject.regexp.client.NativeMatchResult$impl');
  NativeSplitResult = goog.module.get('org.gwtproject.regexp.client.NativeSplitResult$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeRegExp, 'org.gwtproject.regexp.client.NativeRegExp');

org_gwtproject_regexp_shared_RegExp.$markImplementor(NativeRegExp);

exports = NativeRegExp; 
//# sourceMappingURL=NativeRegExp.js.map
