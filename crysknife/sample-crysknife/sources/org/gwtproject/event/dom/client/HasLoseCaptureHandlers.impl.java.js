goog.module('org.gwtproject.event.dom.client.HasLoseCaptureHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let LoseCaptureHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasLoseCaptureHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addLoseCaptureHandler__org_gwtproject_event_dom_client_LoseCaptureHandler(/** LoseCaptureHandler */ handler) {}
 
 static $clinit() {
  HasLoseCaptureHandlers.$clinit = () =>{};
  HasLoseCaptureHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasLoseCaptureHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasLoseCaptureHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasLoseCaptureHandlers, 'org.gwtproject.event.dom.client.HasLoseCaptureHandlers');

HasLoseCaptureHandlers.$markImplementor(/** @type {Function} */ (HasLoseCaptureHandlers));

exports = HasLoseCaptureHandlers; 
//# sourceMappingURL=HasLoseCaptureHandlers.js.map
