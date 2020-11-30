goog.module('org.gwtproject.event.dom.client.HasMouseUpHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseUpHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addMouseUpHandler__org_gwtproject_event_dom_client_MouseUpHandler(/** MouseUpHandler */ handler) {}
 
 static $clinit() {
  HasMouseUpHandlers.$clinit = () =>{};
  HasMouseUpHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseUpHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseUpHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseUpHandlers, 'org.gwtproject.event.dom.client.HasMouseUpHandlers');

HasMouseUpHandlers.$markImplementor(/** @type {Function} */ (HasMouseUpHandlers));

exports = HasMouseUpHandlers; 
//# sourceMappingURL=HasMouseUpHandlers.js.map
