goog.module('org.gwtproject.event.dom.client.HasTouchStartHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchStartHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addTouchStartHandler__org_gwtproject_event_dom_client_TouchStartHandler(/** TouchStartHandler */ handler) {}
 
 static $clinit() {
  HasTouchStartHandlers.$clinit = () =>{};
  HasTouchStartHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchStartHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchStartHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchStartHandlers, 'org.gwtproject.event.dom.client.HasTouchStartHandlers');

HasTouchStartHandlers.$markImplementor(/** @type {Function} */ (HasTouchStartHandlers));

exports = HasTouchStartHandlers; 
//# sourceMappingURL=HasTouchStartHandlers.js.map
