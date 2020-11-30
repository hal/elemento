goog.module('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K
  */
class KeyedCounter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<K, Integer>}*/
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_;
 }
 /** @template K @return {!KeyedCounter<K>} */
 static $create__() {
  KeyedCounter.$clinit();
  let $instance = new KeyedCounter();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter();
 }
 /** @return {number} */
 m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  let count = /**@type {Integer}*/ ($Casts.$to(this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.get(key), Integer));
  return $Equality.$same(count, null) ? 0 : count.m_intValue__();
 }
 
 m_decrement__java_lang_Object_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.put(key, Integer.m_valueOf__int(this.m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(key) - 1));
 }
 
 m_increment__java_lang_Object_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.put(key, Integer.m_valueOf__int(this.m_getCount__java_lang_Object_$pp_org_gwtproject_event_shared_testing(key) + 1));
 }
 /** @private */
 $init___$p_org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter() {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_ = /**@type {!HashMap<K, Integer>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  KeyedCounter.$clinit = () =>{};
  KeyedCounter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeyedCounter;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(KeyedCounter, 'org.gwtproject.event.shared.testing.CountingEventBus$KeyedCounter');

exports = KeyedCounter; 
//# sourceMappingURL=CountingEventBus$KeyedCounter.js.map
