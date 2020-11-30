goog.module('org.gwtproject.event.dom.client.HasMouseOutHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseOutHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(/** MouseOutHandler */ handler) {}
 
 static $clinit() {
  HasMouseOutHandlers.$clinit = () =>{};
  HasMouseOutHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseOutHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseOutHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseOutHandlers, 'org.gwtproject.event.dom.client.HasMouseOutHandlers');

HasMouseOutHandlers.$markImplementor(/** @type {Function} */ (HasMouseOutHandlers));

exports = HasMouseOutHandlers; 
//# sourceMappingURL=HasMouseOutHandlers.js.map
