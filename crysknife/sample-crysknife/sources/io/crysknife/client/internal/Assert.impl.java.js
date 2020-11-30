goog.module('io.crysknife.client.internal.Assert$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Assert extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Assert} */
 static $create__() {
  let $instance = new Assert();
  $instance.$ctor__io_crysknife_client_internal_Assert__();
  return $instance;
 }
 
 $ctor__io_crysknife_client_internal_Assert__() {
  this.$ctor__java_lang_Object__();
 }
 /** @template V @return {V} */
 static m_notNull__java_lang_String__java_lang_Object(/** ?string */ errorMessage, /** V */ value) {
  Assert.$clinit();
  if ($Equality.$same(value, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String(errorMessage));
  }
  return value;
 }
 /** @template V @return {V} */
 static m_notNull__java_lang_Object(/** V */ value) {
  Assert.$clinit();
  if ($Equality.$same(value, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  return value;
 }
 
 static $clinit() {
  Assert.$clinit = () =>{};
  Assert.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Assert;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Assert, 'io.crysknife.client.internal.Assert');

exports = Assert; 
//# sourceMappingURL=Assert.js.map
