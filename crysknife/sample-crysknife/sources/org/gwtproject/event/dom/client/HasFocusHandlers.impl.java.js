goog.module('org.gwtproject.event.dom.client.HasFocusHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let FocusHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasFocusHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addFocusHandler__org_gwtproject_event_dom_client_FocusHandler(/** FocusHandler */ handler) {}
 
 static $clinit() {
  HasFocusHandlers.$clinit = () =>{};
  HasFocusHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasFocusHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasFocusHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasFocusHandlers, 'org.gwtproject.event.dom.client.HasFocusHandlers');

HasFocusHandlers.$markImplementor(/** @type {Function} */ (HasFocusHandlers));

exports = HasFocusHandlers; 
//# sourceMappingURL=HasFocusHandlers.js.map
