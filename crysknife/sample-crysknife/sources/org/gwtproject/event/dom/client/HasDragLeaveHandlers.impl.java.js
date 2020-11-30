goog.module('org.gwtproject.event.dom.client.HasDragLeaveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragLeaveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragLeaveHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(/** DragLeaveHandler */ handler) {}
 
 static $clinit() {
  HasDragLeaveHandlers.$clinit = () =>{};
  HasDragLeaveHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDragLeaveHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragLeaveHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragLeaveHandlers, 'org.gwtproject.event.dom.client.HasDragLeaveHandlers');

HasDragLeaveHandlers.$markImplementor(/** @type {Function} */ (HasDragLeaveHandlers));

exports = HasDragLeaveHandlers; 
//# sourceMappingURL=HasDragLeaveHandlers.js.map
