goog.module('org.gwtproject.regexp.shared.RegExp$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JavaRegExpFactory = goog.forwardDeclare('org.gwtproject.regexp.shared.JavaRegExpFactory$impl');
let MatchResult = goog.forwardDeclare('org.gwtproject.regexp.shared.MatchResult$impl');
let SplitResult = goog.forwardDeclare('org.gwtproject.regexp.shared.SplitResult$impl');

/**
 * @interface
 */
class RegExp {
 /** @return {RegExp} */
 static m_compile__java_lang_String(/** ?string */ pattern) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_compile__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern);
 }
 /** @return {RegExp} */
 static m_compile__java_lang_String__java_lang_String(/** ?string */ pattern, /** ?string */ flags) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_compile__java_lang_String__java_lang_String_$pp_org_gwtproject_regexp_shared(pattern, flags);
 }
 /** @return {?string} */
 static m_quote__java_lang_String(/** ?string */ input) {
  RegExp.$clinit();
  return JavaRegExpFactory.$create__().m_quote__java_lang_String_$pp_org_gwtproject_regexp_shared(input);
 }
 /** @abstract @return {MatchResult} */
 m_exec__java_lang_String(/** ?string */ input) {}
 /** @abstract @return {boolean} */
 m_getGlobal__() {}
 /** @abstract @return {boolean} */
 m_getIgnoreCase__() {}
 /** @abstract @return {number} */
 m_getLastIndex__() {}
 /** @abstract */
 m_setLastIndex__int(/** number */ lastIndex) {}
 /** @abstract @return {boolean} */
 m_getMultiline__() {}
 /** @abstract @return {?string} */
 m_getSource__() {}
 /** @abstract @return {?string} */
 m_replace__java_lang_String__java_lang_String(/** ?string */ input, /** ?string */ replacement) {}
 /** @abstract @return {SplitResult} */
 m_split__java_lang_String(/** ?string */ input) {}
 /** @abstract @return {SplitResult} */
 m_split__java_lang_String__int(/** ?string */ input, /** number */ limit) {}
 /** @abstract @return {boolean} */
 m_test__java_lang_String(/** ?string */ input) {}
 
 static $clinit() {
  RegExp.$clinit = () =>{};
  RegExp.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_regexp_shared_RegExp = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_RegExp;
 }
 
 static $loadModules() {
  JavaRegExpFactory = goog.module.get('org.gwtproject.regexp.shared.JavaRegExpFactory$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RegExp, 'org.gwtproject.regexp.shared.RegExp');

RegExp.$markImplementor(/** @type {Function} */ (RegExp));

exports = RegExp; 
//# sourceMappingURL=RegExp.js.map
