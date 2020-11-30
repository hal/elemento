goog.module('org.gwtproject.event.dom.client.HasKeyUpHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasKeyUpHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(/** KeyUpHandler */ handler) {}
 
 static $clinit() {
  HasKeyUpHandlers.$clinit = () =>{};
  HasKeyUpHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasKeyUpHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasKeyUpHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyUpHandlers, 'org.gwtproject.event.dom.client.HasKeyUpHandlers');

HasKeyUpHandlers.$markImplementor(/** @type {Function} */ (HasKeyUpHandlers));

exports = HasKeyUpHandlers; 
//# sourceMappingURL=HasKeyUpHandlers.js.map
