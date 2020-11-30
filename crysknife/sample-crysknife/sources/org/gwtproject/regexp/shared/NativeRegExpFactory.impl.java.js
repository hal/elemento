goog.module('org.gwtproject.regexp.shared.NativeRegExpFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegExpFactory = goog.require('org.gwtproject.regexp.shared.RegExpFactory$impl');

let NativeRegExp = goog.forwardDeclare('org.gwtproject.regexp.client.NativeRegExp$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');

class NativeRegExpFactory extends RegExpFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeRegExpFactory} */
 static $create__() {
  NativeRegExpFactory.$clinit();
  let $instance = new NativeRegExpFactory();
  $instance.$ctor__org_gwtproject_regexp_shared_NativeRegExpFactory__();
  return $instance;
 }
 
 $ctor__org_gwtproject_regexp_shared_NativeRegExpFactory__() {
  this.$ctor__org_gwtproject_regexp_shared_RegExpFactory__();
 }
 /** @override @return {RegExp} */
 m_compile__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ pattern) {
  return NativeRegExp.m_compile__java_lang_String(pattern);
 }
 /** @override @return {RegExp} */
 m_compile__java_lang_String__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ pattern, /** ?string */ flags) {
  return NativeRegExp.m_compile__java_lang_String__java_lang_String(pattern, flags);
 }
 /** @override @return {?string} */
 m_quote__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ input) {
  return NativeRegExp.m_quote__java_lang_String(input);
 }
 
 static $clinit() {
  NativeRegExpFactory.$clinit = () =>{};
  NativeRegExpFactory.$loadModules();
  RegExpFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeRegExpFactory;
 }
 
 static $loadModules() {
  NativeRegExp = goog.module.get('org.gwtproject.regexp.client.NativeRegExp$impl');
 }
 
}
$Util.$setClassMetadata(NativeRegExpFactory, 'org.gwtproject.regexp.shared.NativeRegExpFactory');

exports = NativeRegExpFactory; 
//# sourceMappingURL=NativeRegExpFactory.js.map
