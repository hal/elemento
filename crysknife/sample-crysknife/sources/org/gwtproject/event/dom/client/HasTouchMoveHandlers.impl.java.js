goog.module('org.gwtproject.event.dom.client.HasTouchMoveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchMoveHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addTouchMoveHandler__org_gwtproject_event_dom_client_TouchMoveHandler(/** TouchMoveHandler */ handler) {}
 
 static $clinit() {
  HasTouchMoveHandlers.$clinit = () =>{};
  HasTouchMoveHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchMoveHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchMoveHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchMoveHandlers, 'org.gwtproject.event.dom.client.HasTouchMoveHandlers');

HasTouchMoveHandlers.$markImplementor(/** @type {Function} */ (HasTouchMoveHandlers));

exports = HasTouchMoveHandlers; 
//# sourceMappingURL=HasTouchMoveHandlers.js.map
