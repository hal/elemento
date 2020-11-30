goog.module('org.gwtproject.event.dom.client.HasContextMenuHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ContextMenuHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasContextMenuHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addContextMenuHandler__org_gwtproject_event_dom_client_ContextMenuHandler(/** ContextMenuHandler */ handler) {}
 
 static $clinit() {
  HasContextMenuHandlers.$clinit = () =>{};
  HasContextMenuHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasContextMenuHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasContextMenuHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasContextMenuHandlers, 'org.gwtproject.event.dom.client.HasContextMenuHandlers');

HasContextMenuHandlers.$markImplementor(/** @type {Function} */ (HasContextMenuHandlers));

exports = HasContextMenuHandlers; 
//# sourceMappingURL=HasContextMenuHandlers.js.map
