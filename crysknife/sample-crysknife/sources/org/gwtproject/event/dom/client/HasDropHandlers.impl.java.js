goog.module('org.gwtproject.event.dom.client.HasDropHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DropHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDropHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(/** DropHandler */ handler) {}
 
 static $clinit() {
  HasDropHandlers.$clinit = () =>{};
  HasDropHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDropHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDropHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDropHandlers, 'org.gwtproject.event.dom.client.HasDropHandlers');

HasDropHandlers.$markImplementor(/** @type {Function} */ (HasDropHandlers));

exports = HasDropHandlers; 
//# sourceMappingURL=HasDropHandlers.js.map
