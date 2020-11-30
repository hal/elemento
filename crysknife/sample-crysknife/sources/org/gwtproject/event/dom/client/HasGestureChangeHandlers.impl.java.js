goog.module('org.gwtproject.event.dom.client.HasGestureChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureChangeHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addGestureChangeHandler__org_gwtproject_event_dom_client_GestureChangeHandler(/** GestureChangeHandler */ handler) {}
 
 static $clinit() {
  HasGestureChangeHandlers.$clinit = () =>{};
  HasGestureChangeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureChangeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureChangeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureChangeHandlers, 'org.gwtproject.event.dom.client.HasGestureChangeHandlers');

HasGestureChangeHandlers.$markImplementor(/** @type {Function} */ (HasGestureChangeHandlers));

exports = HasGestureChangeHandlers; 
//# sourceMappingURL=HasGestureChangeHandlers.js.map
