goog.module('org.gwtproject.event.dom.client.HasAllFocusHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBlurHandlers = goog.require('org.gwtproject.event.dom.client.HasBlurHandlers$impl');
const HasFocusHandlers = goog.require('org.gwtproject.event.dom.client.HasFocusHandlers$impl');

/**
 * @interface
 * @extends {HasFocusHandlers}
 * @extends {HasBlurHandlers}
 */
class HasAllFocusHandlers {
 
 static $clinit() {
  HasAllFocusHandlers.$clinit = () =>{};
  HasAllFocusHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasFocusHandlers.$markImplementor(ctor);
  HasBlurHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasAllFocusHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllFocusHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllFocusHandlers, 'org.gwtproject.event.dom.client.HasAllFocusHandlers');

HasAllFocusHandlers.$markImplementor(/** @type {Function} */ (HasAllFocusHandlers));

exports = HasAllFocusHandlers; 
//# sourceMappingURL=HasAllFocusHandlers.js.map
