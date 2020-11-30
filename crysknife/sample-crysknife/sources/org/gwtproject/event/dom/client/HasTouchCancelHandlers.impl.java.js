goog.module('org.gwtproject.event.dom.client.HasTouchCancelHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchCancelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchCancelHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addTouchCancelHandler__org_gwtproject_event_dom_client_TouchCancelHandler(/** TouchCancelHandler */ handler) {}
 
 static $clinit() {
  HasTouchCancelHandlers.$clinit = () =>{};
  HasTouchCancelHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchCancelHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchCancelHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchCancelHandlers, 'org.gwtproject.event.dom.client.HasTouchCancelHandlers');

HasTouchCancelHandlers.$markImplementor(/** @type {Function} */ (HasTouchCancelHandlers));

exports = HasTouchCancelHandlers; 
//# sourceMappingURL=HasTouchCancelHandlers.js.map
