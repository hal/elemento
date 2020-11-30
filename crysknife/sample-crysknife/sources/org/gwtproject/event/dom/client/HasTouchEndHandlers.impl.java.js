goog.module('org.gwtproject.event.dom.client.HasTouchEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchEndHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addTouchEndHandler__org_gwtproject_event_dom_client_TouchEndHandler(/** TouchEndHandler */ handler) {}
 
 static $clinit() {
  HasTouchEndHandlers.$clinit = () =>{};
  HasTouchEndHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchEndHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchEndHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchEndHandlers, 'org.gwtproject.event.dom.client.HasTouchEndHandlers');

HasTouchEndHandlers.$markImplementor(/** @type {Function} */ (HasTouchEndHandlers));

exports = HasTouchEndHandlers; 
//# sourceMappingURL=HasTouchEndHandlers.js.map
