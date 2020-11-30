goog.module('org.gwtproject.event.dom.client.HasMouseWheelHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseWheelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseWheelHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(/** MouseWheelHandler */ handler) {}
 
 static $clinit() {
  HasMouseWheelHandlers.$clinit = () =>{};
  HasMouseWheelHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseWheelHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseWheelHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseWheelHandlers, 'org.gwtproject.event.dom.client.HasMouseWheelHandlers');

HasMouseWheelHandlers.$markImplementor(/** @type {Function} */ (HasMouseWheelHandlers));

exports = HasMouseWheelHandlers; 
//# sourceMappingURL=HasMouseWheelHandlers.js.map
