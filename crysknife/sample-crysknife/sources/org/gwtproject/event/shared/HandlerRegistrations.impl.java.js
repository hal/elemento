goog.module('org.gwtproject.event.shared.HandlerRegistrations$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrationCollection = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations.HandlerRegistrationCollection$impl');

class HandlerRegistrations extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {HandlerRegistration} */
 static m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration(/** Array<HandlerRegistration> */ handlers) {
  HandlerRegistrations.$clinit();
  return HandlerRegistrationCollection.$create__arrayOf_org_gwtproject_event_shared_HandlerRegistration(handlers);
 }
 /** @return {!HandlerRegistrations} */
 static $create__() {
  let $instance = new HandlerRegistrations();
  $instance.$ctor__org_gwtproject_event_shared_HandlerRegistrations__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_HandlerRegistrations__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HandlerRegistrations.$clinit = () =>{};
  HandlerRegistrations.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerRegistrations;
 }
 
 static $loadModules() {
  HandlerRegistrationCollection = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations.HandlerRegistrationCollection$impl');
 }
 
}
$Util.$setClassMetadata(HandlerRegistrations, 'org.gwtproject.event.shared.HandlerRegistrations');

exports = HandlerRegistrations; 
//# sourceMappingURL=HandlerRegistrations.js.map
