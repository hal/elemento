goog.module('org.gwtproject.event.dom.client.HasAllGestureHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasGestureChangeHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureChangeHandlers$impl');
const HasGestureEndHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureEndHandlers$impl');
const HasGestureStartHandlers = goog.require('org.gwtproject.event.dom.client.HasGestureStartHandlers$impl');

/**
 * @interface
 * @extends {HasGestureStartHandlers}
 * @extends {HasGestureChangeHandlers}
 * @extends {HasGestureEndHandlers}
 */
class HasAllGestureHandlers {
 
 static $clinit() {
  HasAllGestureHandlers.$clinit = () =>{};
  HasAllGestureHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasGestureStartHandlers.$markImplementor(ctor);
  HasGestureChangeHandlers.$markImplementor(ctor);
  HasGestureEndHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasAllGestureHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllGestureHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllGestureHandlers, 'org.gwtproject.event.dom.client.HasAllGestureHandlers');

HasAllGestureHandlers.$markImplementor(/** @type {Function} */ (HasAllGestureHandlers));

exports = HasAllGestureHandlers; 
//# sourceMappingURL=HasAllGestureHandlers.js.map
