goog.module('org.gwtproject.event.dom.client.HasDragStartHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragStartHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDragStartHandler__org_gwtproject_event_dom_client_DragStartHandler(/** DragStartHandler */ handler) {}
 
 static $clinit() {
  HasDragStartHandlers.$clinit = () =>{};
  HasDragStartHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDragStartHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragStartHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragStartHandlers, 'org.gwtproject.event.dom.client.HasDragStartHandlers');

HasDragStartHandlers.$markImplementor(/** @type {Function} */ (HasDragStartHandlers));

exports = HasDragStartHandlers; 
//# sourceMappingURL=HasDragStartHandlers.js.map
