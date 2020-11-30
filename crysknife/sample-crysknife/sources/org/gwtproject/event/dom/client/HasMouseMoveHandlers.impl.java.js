goog.module('org.gwtproject.event.dom.client.HasMouseMoveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseMoveHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(/** MouseMoveHandler */ handler) {}
 
 static $clinit() {
  HasMouseMoveHandlers.$clinit = () =>{};
  HasMouseMoveHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseMoveHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseMoveHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseMoveHandlers, 'org.gwtproject.event.dom.client.HasMouseMoveHandlers');

HasMouseMoveHandlers.$markImplementor(/** @type {Function} */ (HasMouseMoveHandlers));

exports = HasMouseMoveHandlers; 
//# sourceMappingURL=HasMouseMoveHandlers.js.map
