goog.module('org.gwtproject.event.dom.client.HasDragOverHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragOverHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDragOverHandler__org_gwtproject_event_dom_client_DragOverHandler(/** DragOverHandler */ handler) {}
 
 static $clinit() {
  HasDragOverHandlers.$clinit = () =>{};
  HasDragOverHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDragOverHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragOverHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragOverHandlers, 'org.gwtproject.event.dom.client.HasDragOverHandlers');

HasDragOverHandlers.$markImplementor(/** @type {Function} */ (HasDragOverHandlers));

exports = HasDragOverHandlers; 
//# sourceMappingURL=HasDragOverHandlers.js.map
