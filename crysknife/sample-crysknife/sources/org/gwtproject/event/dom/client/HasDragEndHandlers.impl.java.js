goog.module('org.gwtproject.event.dom.client.HasDragEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragEndHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(/** DragEndHandler */ handler) {}
 
 static $clinit() {
  HasDragEndHandlers.$clinit = () =>{};
  HasDragEndHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDragEndHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragEndHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragEndHandlers, 'org.gwtproject.event.dom.client.HasDragEndHandlers');

HasDragEndHandlers.$markImplementor(/** @type {Function} */ (HasDragEndHandlers));

exports = HasDragEndHandlers; 
//# sourceMappingURL=HasDragEndHandlers.js.map
