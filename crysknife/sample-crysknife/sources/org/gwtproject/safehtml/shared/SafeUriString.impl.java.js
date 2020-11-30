goog.module('org.gwtproject.safehtml.shared.SafeUriString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeUri = goog.require('org.gwtproject.safehtml.shared.SafeUri$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {SafeUri}
  */
class SafeUriString extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_;
 }
 //Factory method corresponding to constructor 'SafeUriString(String)'.
 /** @return {!SafeUriString} */
 static $create__java_lang_String(/** ?string */ uri) {
  SafeUriString.$clinit();
  let $instance = new SafeUriString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriString__java_lang_String(uri);
  return $instance;
 }
 //Initialization from constructor 'SafeUriString(String)'.
 
 $ctor__org_gwtproject_safehtml_shared_SafeUriString__java_lang_String(/** ?string */ uri) {
  this.$ctor__java_lang_Object__();
  if ($Equality.$same(uri, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("uri is null"));
  }
  this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_ = uri;
 }
 //Factory method corresponding to constructor 'SafeUriString()'.
 /** @return {!SafeUriString} */
 static $create__() {
  let $instance = new SafeUriString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriString__();
  return $instance;
 }
 //Initialization from constructor 'SafeUriString()'.
 
 $ctor__org_gwtproject_safehtml_shared_SafeUriString__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (!SafeUri.$isInstance(obj)) {
   return false;
  }
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_, /**@type {SafeUri}*/ ($Casts.$to(obj, SafeUri)).m_asString__());
 }
 /** @override @return {?string} */
 toString() {
  return "safe: \"" + j_l_String.m_valueOf__java_lang_Object(this.m_asString__()) + "\"";
 }
 /** @override @return {?string} */
 m_asString__() {
  return this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_;
 }
 
 static $clinit() {
  SafeUriString.$clinit = () =>{};
  SafeUriString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeUriString;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SafeUriString, 'org.gwtproject.safehtml.shared.SafeUriString');

SafeUri.$markImplementor(SafeUriString);

exports = SafeUriString; 
//# sourceMappingURL=SafeUriString.js.map
