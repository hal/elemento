goog.module('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class TypeSourcePair extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Type<?>}*/
  this.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair;
  /**@type {*}*/
  this.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair;
 }
 /** @return {!TypeSourcePair} */
 static $create__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<?> */ type, /** * */ source) {
  TypeSourcePair.$clinit();
  let $instance = new TypeSourcePair();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, source);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<?> */ type, /** * */ source) {
  this.$ctor__java_lang_Object__();
  this.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair = type;
  this.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair = source;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(o, this)) {
   return true;
  }
  if (!TypeSourcePair.$isInstance(o)) {
   return false;
  }
  let pair = /**@type {TypeSourcePair}*/ ($Casts.$to(o, TypeSourcePair));
  return Objects.m_equals__java_lang_Object__java_lang_Object(this.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair, pair.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair) && Objects.m_equals__java_lang_Object__java_lang_Object(this.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair, pair.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair);
 }
 /** @override @return {number} */
 hashCode() {
  let hash = 7;
  hash = (hash * 31) + ($Equality.$same(this.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair, null) ? 0 : this.f_type__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair.hashCode());
  hash = (hash * 31) + ($Equality.$same(this.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair, null) ? 0 : $Objects.m_hashCode__java_lang_Object(this.f_source__org_gwtproject_event_shared_testing_CountingEventBus_TypeSourcePair));
  return hash;
 }
 
 static $clinit() {
  TypeSourcePair.$clinit = () =>{};
  TypeSourcePair.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypeSourcePair;
 }
 
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(TypeSourcePair, 'org.gwtproject.event.shared.testing.CountingEventBus$TypeSourcePair');

exports = TypeSourcePair; 
//# sourceMappingURL=CountingEventBus$TypeSourcePair.js.map
