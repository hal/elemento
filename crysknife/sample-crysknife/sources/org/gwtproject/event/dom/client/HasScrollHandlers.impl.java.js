goog.module('org.gwtproject.event.dom.client.HasScrollHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ScrollHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasScrollHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler(/** ScrollHandler */ handler) {}
 
 static $clinit() {
  HasScrollHandlers.$clinit = () =>{};
  HasScrollHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasScrollHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasScrollHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasScrollHandlers, 'org.gwtproject.event.dom.client.HasScrollHandlers');

HasScrollHandlers.$markImplementor(/** @type {Function} */ (HasScrollHandlers));

exports = HasScrollHandlers; 
//# sourceMappingURL=HasScrollHandlers.js.map
