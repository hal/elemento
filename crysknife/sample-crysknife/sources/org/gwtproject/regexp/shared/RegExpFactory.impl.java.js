goog.module('org.gwtproject.regexp.shared.RegExpFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class RegExpFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!RegExpFactory} */
 static $create__() {
  RegExpFactory.$clinit();
  let $instance = new RegExpFactory();
  $instance.$ctor__org_gwtproject_regexp_shared_RegExpFactory__();
  return $instance;
 }
 
 $ctor__org_gwtproject_regexp_shared_RegExpFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {RegExp} */
 m_compile__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ pattern) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @return {RegExp} */
 m_compile__java_lang_String__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ pattern, /** ?string */ flags) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @return {?string} */
 m_quote__java_lang_String_$pp_org_gwtproject_regexp_shared(/** ?string */ input) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 static $clinit() {
  RegExpFactory.$clinit = () =>{};
  RegExpFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RegExpFactory;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(RegExpFactory, 'org.gwtproject.regexp.shared.RegExpFactory');

exports = RegExpFactory; 
//# sourceMappingURL=RegExpFactory.js.map
