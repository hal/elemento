goog.module('org.gwtproject.event.dom.client.HasDragEnterHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragEnterHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragEnterHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addDragEnterHandler__org_gwtproject_event_dom_client_DragEnterHandler(/** DragEnterHandler */ handler) {}
 
 static $clinit() {
  HasDragEnterHandlers.$clinit = () =>{};
  HasDragEnterHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasDragEnterHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragEnterHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragEnterHandlers, 'org.gwtproject.event.dom.client.HasDragEnterHandlers');

HasDragEnterHandlers.$markImplementor(/** @type {Function} */ (HasDragEnterHandlers));

exports = HasDragEnterHandlers; 
//# sourceMappingURL=HasDragEnterHandlers.js.map
