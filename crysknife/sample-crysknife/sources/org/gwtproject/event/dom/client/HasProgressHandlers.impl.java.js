goog.module('org.gwtproject.event.dom.client.HasProgressHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ProgressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasProgressHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addProgressHandler__org_gwtproject_event_dom_client_ProgressHandler(/** ProgressHandler */ handler) {}
 
 static $clinit() {
  HasProgressHandlers.$clinit = () =>{};
  HasProgressHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasProgressHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasProgressHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasProgressHandlers, 'org.gwtproject.event.dom.client.HasProgressHandlers');

HasProgressHandlers.$markImplementor(/** @type {Function} */ (HasProgressHandlers));

exports = HasProgressHandlers; 
//# sourceMappingURL=HasProgressHandlers.js.map
