goog.module('org.gwtproject.event.dom.client.HasKeyPressHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasKeyPressHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(/** KeyPressHandler */ handler) {}
 
 static $clinit() {
  HasKeyPressHandlers.$clinit = () =>{};
  HasKeyPressHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasKeyPressHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasKeyPressHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyPressHandlers, 'org.gwtproject.event.dom.client.HasKeyPressHandlers');

HasKeyPressHandlers.$markImplementor(/** @type {Function} */ (HasKeyPressHandlers));

exports = HasKeyPressHandlers; 
//# sourceMappingURL=HasKeyPressHandlers.js.map
