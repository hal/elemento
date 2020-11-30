goog.module('org.gwtproject.event.dom.client.HasLoadHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let LoadHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasLoadHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addLoadHandler__org_gwtproject_event_dom_client_LoadHandler(/** LoadHandler */ handler) {}
 
 static $clinit() {
  HasLoadHandlers.$clinit = () =>{};
  HasLoadHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasLoadHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasLoadHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasLoadHandlers, 'org.gwtproject.event.dom.client.HasLoadHandlers');

HasLoadHandlers.$markImplementor(/** @type {Function} */ (HasLoadHandlers));

exports = HasLoadHandlers; 
//# sourceMappingURL=HasLoadHandlers.js.map
