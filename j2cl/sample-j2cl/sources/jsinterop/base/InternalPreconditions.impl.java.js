goog.module('jsinterop.base.InternalPreconditions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class InternalPreconditions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_checkType__boolean(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_) {
   InternalPreconditions.m_checkCriticalType__boolean(expression);
  } else if (InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_) {
   try {
    InternalPreconditions.m_checkCriticalType__boolean(expression);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(e));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 
 static m_checkCriticalType__boolean(/** boolean */ expression) {
  InternalPreconditions.$clinit();
  if (!expression) {
   throw $Exceptions.toJs(ClassCastException.$create__());
  }
 }
 /** @return {!InternalPreconditions} */
 static $create__() {
  let $instance = new InternalPreconditions();
  $instance.$ctor__jsinterop_base_InternalPreconditions__();
  return $instance;
 }
 
 $ctor__jsinterop_base_InternalPreconditions__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  InternalPreconditions.$clinit = () =>{};
  InternalPreconditions.$loadModules();
  j_l_Object.$clinit();
  InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_ = j_l_String.m_equals__java_lang_String__java_lang_Object($Util.$getDefine("jsinterop.checks"), "ENABLED");
  InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_ = j_l_String.m_equals__java_lang_String__java_lang_Object($Util.$getDefine("jre.checkedMode"), "ENABLED");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalPreconditions;
 }
 
 static $loadModules() {
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(InternalPreconditions, 'jsinterop.base.InternalPreconditions');

/**@type {boolean}*/
InternalPreconditions.f_IS_TYPE_CHECKED__jsinterop_base_InternalPreconditions_ = false;
/**@type {boolean}*/
InternalPreconditions.f_IS_ASSERTED__jsinterop_base_InternalPreconditions_ = false;

/* NATIVE.JS EPILOG */

const jsinterop_base_InternalPreconditions = InternalPreconditions;

// Ensure that jsinterop @defines are included.
/** @suppress {extraRequire} */
const jsinterop = goog.require('jsinterop');



exports = InternalPreconditions; 
//# sourceMappingURL=InternalPreconditions.js.map
