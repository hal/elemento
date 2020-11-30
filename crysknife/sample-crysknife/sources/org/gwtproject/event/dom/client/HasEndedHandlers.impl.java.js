goog.module('org.gwtproject.event.dom.client.HasEndedHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let EndedHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasEndedHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addEndedHandler__org_gwtproject_event_dom_client_EndedHandler(/** EndedHandler */ handler) {}
 
 static $clinit() {
  HasEndedHandlers.$clinit = () =>{};
  HasEndedHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasEndedHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasEndedHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasEndedHandlers, 'org.gwtproject.event.dom.client.HasEndedHandlers');

HasEndedHandlers.$markImplementor(/** @type {Function} */ (HasEndedHandlers));

exports = HasEndedHandlers; 
//# sourceMappingURL=HasEndedHandlers.js.map
