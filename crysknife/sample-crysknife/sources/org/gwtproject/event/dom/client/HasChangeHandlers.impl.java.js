goog.module('org.gwtproject.event.dom.client.HasChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasChangeHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(/** ChangeHandler */ handler) {}
 
 static $clinit() {
  HasChangeHandlers.$clinit = () =>{};
  HasChangeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasChangeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasChangeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasChangeHandlers, 'org.gwtproject.event.dom.client.HasChangeHandlers');

HasChangeHandlers.$markImplementor(/** @type {Function} */ (HasChangeHandlers));

exports = HasChangeHandlers; 
//# sourceMappingURL=HasChangeHandlers.js.map
