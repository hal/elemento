goog.module('org.gwtproject.event.dom.client.HasLoadedMetadataHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let LoadedMetadataHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasLoadedMetadataHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addLoadedMetadataHandler__org_gwtproject_event_dom_client_LoadedMetadataHandler(/** LoadedMetadataHandler */ handler) {}
 
 static $clinit() {
  HasLoadedMetadataHandlers.$clinit = () =>{};
  HasLoadedMetadataHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasLoadedMetadataHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasLoadedMetadataHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasLoadedMetadataHandlers, 'org.gwtproject.event.dom.client.HasLoadedMetadataHandlers');

HasLoadedMetadataHandlers.$markImplementor(/** @type {Function} */ (HasLoadedMetadataHandlers));

exports = HasLoadedMetadataHandlers; 
//# sourceMappingURL=HasLoadedMetadataHandlers.js.map
