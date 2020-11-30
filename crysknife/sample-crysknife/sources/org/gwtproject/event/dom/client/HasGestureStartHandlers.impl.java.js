goog.module('org.gwtproject.event.dom.client.HasGestureStartHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureStartHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addGestureStartHandler__org_gwtproject_event_dom_client_GestureStartHandler(/** GestureStartHandler */ handler) {}
 
 static $clinit() {
  HasGestureStartHandlers.$clinit = () =>{};
  HasGestureStartHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureStartHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureStartHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureStartHandlers, 'org.gwtproject.event.dom.client.HasGestureStartHandlers');

HasGestureStartHandlers.$markImplementor(/** @type {Function} */ (HasGestureStartHandlers));

exports = HasGestureStartHandlers; 
//# sourceMappingURL=HasGestureStartHandlers.js.map
