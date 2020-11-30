goog.module('org.gwtproject.event.dom.client.HasMouseOverHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseOverHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(/** MouseOverHandler */ handler) {}
 
 static $clinit() {
  HasMouseOverHandlers.$clinit = () =>{};
  HasMouseOverHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseOverHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseOverHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseOverHandlers, 'org.gwtproject.event.dom.client.HasMouseOverHandlers');

HasMouseOverHandlers.$markImplementor(/** @type {Function} */ (HasMouseOverHandlers));

exports = HasMouseOverHandlers; 
//# sourceMappingURL=HasMouseOverHandlers.js.map
