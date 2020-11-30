goog.module('org.gwtproject.event.dom.client.HasGestureEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureEndHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addGestureEndHandler__org_gwtproject_event_dom_client_GestureEndHandler(/** GestureEndHandler */ handler) {}
 
 static $clinit() {
  HasGestureEndHandlers.$clinit = () =>{};
  HasGestureEndHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureEndHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureEndHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureEndHandlers, 'org.gwtproject.event.dom.client.HasGestureEndHandlers');

HasGestureEndHandlers.$markImplementor(/** @type {Function} */ (HasGestureEndHandlers));

exports = HasGestureEndHandlers; 
//# sourceMappingURL=HasGestureEndHandlers.js.map
