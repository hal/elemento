goog.module('org.gwtproject.event.shared.UmbrellaException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class UmbrellaException extends RuntimeException {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<Throwable>}*/
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_;
 }
 /** @return {Throwable} */
 static m_makeCause__java_util_Set(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  return causes.isEmpty() ? null : /**@type {Throwable}*/ ($Casts.$to(causes.m_iterator__().m_next__(), Throwable));
 }
 /** @return {?string} */
 static m_makeMessage__java_util_Set(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  let count = causes.size();
  if (count == 0) {
   return null;
  }
  let b = StringBuilder.$create__java_lang_String(count == 1 ? UmbrellaException.f_ONE__org_gwtproject_event_shared_UmbrellaException : count + j_l_String.m_valueOf__java_lang_Object(UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException));
  let first = true;
  for (let $iterator = causes.m_iterator__(); $iterator.m_hasNext__(); ) {
   let t = /**@type {Throwable}*/ ($Casts.$to($iterator.m_next__(), Throwable));
   if (first) {
    first = false;
   } else {
    b.m_append__java_lang_String("; ");
   }
   b.m_append__java_lang_String(t.m_getMessage__());
  }
  return b.toString();
 }
 //Factory method corresponding to constructor 'UmbrellaException(Set)'.
 /** @return {!UmbrellaException} */
 static $create__java_util_Set(/** Set<Throwable> */ causes) {
  UmbrellaException.$clinit();
  let $instance = new UmbrellaException();
  $instance.$ctor__org_gwtproject_event_shared_UmbrellaException__java_util_Set(causes);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UmbrellaException(Set)'.
 
 $ctor__org_gwtproject_event_shared_UmbrellaException__java_util_Set(/** Set<Throwable> */ causes) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable(UmbrellaException.m_makeMessage__java_util_Set(causes), UmbrellaException.m_makeCause__java_util_Set(causes));
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_ = causes;
  let i = 0;
  for (let $iterator = causes.m_iterator__(); $iterator.m_hasNext__(); ) {
   let cause = /**@type {Throwable}*/ ($Casts.$to($iterator.m_next__(), Throwable));
   if (i++ == 0) {
    continue;
   }
   this.m_addSuppressed__java_lang_Throwable(cause);
  }
 }
 //Factory method corresponding to constructor 'UmbrellaException()'.
 /** @return {!UmbrellaException} */
 static $create__() {
  UmbrellaException.$clinit();
  let $instance = new UmbrellaException();
  $instance.$ctor__org_gwtproject_event_shared_UmbrellaException__();
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UmbrellaException()'.
 
 $ctor__org_gwtproject_event_shared_UmbrellaException__() {
  this.$ctor__java_lang_RuntimeException__java_lang_String(UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException);
  this.f_causes__org_gwtproject_event_shared_UmbrellaException_ = /**@type {Set<Throwable>}*/ (Collections.m_emptySet__());
 }
 /** @return {Set<Throwable>} */
 m_getCauses__() {
  return this.f_causes__org_gwtproject_event_shared_UmbrellaException_;
 }
 
 static $clinit() {
  UmbrellaException.$clinit = () =>{};
  UmbrellaException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UmbrellaException;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(UmbrellaException, 'org.gwtproject.event.shared.UmbrellaException');

/**@const {?string}*/
UmbrellaException.f_MULTIPLE__org_gwtproject_event_shared_UmbrellaException = " exceptions caught: ";
/**@const {?string}*/
UmbrellaException.f_ONE__org_gwtproject_event_shared_UmbrellaException = "Exception caught: ";

exports = UmbrellaException; 
//# sourceMappingURL=UmbrellaException.js.map
