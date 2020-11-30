goog.module('org.gwtproject.event.shared.Event.Type$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template H
  */
class Type extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_index__org_gwtproject_event_shared_Event_Type_ = 0;
 }
 /** @template H @return {!Type<H>} */
 static $create__() {
  Type.$clinit();
  let $instance = new Type();
  $instance.$ctor__org_gwtproject_event_shared_Event_Type__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_Event_Type__() {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_event_shared_Event_Type_ = ++Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_index__org_gwtproject_event_shared_Event_Type_;
 }
 /** @override @return {?string} */
 toString() {
  return "Event type";
 }
 
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Type;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Type, 'org.gwtproject.event.shared.Event$Type');

/**@type {number}*/
Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_ = 0;

exports = Type; 
//# sourceMappingURL=Event$Type.js.map
