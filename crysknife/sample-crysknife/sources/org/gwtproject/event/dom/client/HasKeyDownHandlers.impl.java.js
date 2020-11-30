goog.module('org.gwtproject.event.dom.client.HasKeyDownHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasKeyDownHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(/** KeyDownHandler */ handler) {}
 
 static $clinit() {
  HasKeyDownHandlers.$clinit = () =>{};
  HasKeyDownHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasKeyDownHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasKeyDownHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyDownHandlers, 'org.gwtproject.event.dom.client.HasKeyDownHandlers');

HasKeyDownHandlers.$markImplementor(/** @type {Function} */ (HasKeyDownHandlers));

exports = HasKeyDownHandlers; 
//# sourceMappingURL=HasKeyDownHandlers.js.map
