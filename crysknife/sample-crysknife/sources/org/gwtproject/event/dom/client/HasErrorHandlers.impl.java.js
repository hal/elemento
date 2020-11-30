goog.module('org.gwtproject.event.dom.client.HasErrorHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ErrorHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasErrorHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addErrorHandler__org_gwtproject_event_dom_client_ErrorHandler(/** ErrorHandler */ handler) {}
 
 static $clinit() {
  HasErrorHandlers.$clinit = () =>{};
  HasErrorHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasErrorHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasErrorHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasErrorHandlers, 'org.gwtproject.event.dom.client.HasErrorHandlers');

HasErrorHandlers.$markImplementor(/** @type {Function} */ (HasErrorHandlers));

exports = HasErrorHandlers; 
//# sourceMappingURL=HasErrorHandlers.js.map
