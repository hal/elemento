goog.module('org.gwtproject.event.shared.HandlerRegistrations.HandlerRegistrationCollection$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @implements {HandlerRegistration}
  */
class HandlerRegistrationCollection extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<HandlerRegistration>}*/
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_;
 }
 /** @return {!HandlerRegistrationCollection} */
 static $create__arrayOf_org_gwtproject_event_shared_HandlerRegistration(/** Array<HandlerRegistration> */ handlers) {
  HandlerRegistrationCollection.$clinit();
  let $instance = new HandlerRegistrationCollection();
  $instance.$ctor__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection__arrayOf_org_gwtproject_event_shared_HandlerRegistration(handlers);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection__arrayOf_org_gwtproject_event_shared_HandlerRegistration(/** Array<HandlerRegistration> */ handlers) {
  this.$ctor__java_lang_Object__();
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_ = handlers;
 }
 /** @override */
 m_removeHandler__() {
  if ($Equality.$same(this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_, null)) {
   return;
  }
  for (let $array = this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_, $index = 0; $index < $array.length; $index++) {
   let hr = $array[$index];
   hr.m_removeHandler__();
  }
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_ = null;
 }
 
 static $clinit() {
  HandlerRegistrationCollection.$clinit = () =>{};
  HandlerRegistrationCollection.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerRegistrationCollection;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(HandlerRegistrationCollection, 'org.gwtproject.event.shared.HandlerRegistrations$HandlerRegistrationCollection');

HandlerRegistration.$markImplementor(HandlerRegistrationCollection);

exports = HandlerRegistrationCollection; 
//# sourceMappingURL=HandlerRegistrations$HandlerRegistrationCollection.js.map
