goog.module('org.gwtproject.event.dom.client.HasAllMediaHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCanPlayThroughHandlers = goog.require('org.gwtproject.event.dom.client.HasCanPlayThroughHandlers$impl');
const HasEndedHandlers = goog.require('org.gwtproject.event.dom.client.HasEndedHandlers$impl');
const HasLoadedMetadataHandlers = goog.require('org.gwtproject.event.dom.client.HasLoadedMetadataHandlers$impl');
const HasProgressHandlers = goog.require('org.gwtproject.event.dom.client.HasProgressHandlers$impl');

/**
 * @interface
 * @extends {HasEndedHandlers}
 * @extends {HasProgressHandlers}
 * @extends {HasCanPlayThroughHandlers}
 * @extends {HasLoadedMetadataHandlers}
 */
class HasAllMediaHandlers {
 
 static $clinit() {
  HasAllMediaHandlers.$clinit = () =>{};
  HasAllMediaHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasEndedHandlers.$markImplementor(ctor);
  HasProgressHandlers.$markImplementor(ctor);
  HasCanPlayThroughHandlers.$markImplementor(ctor);
  HasLoadedMetadataHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasAllMediaHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllMediaHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllMediaHandlers, 'org.gwtproject.event.dom.client.HasAllMediaHandlers');

HasAllMediaHandlers.$markImplementor(/** @type {Function} */ (HasAllMediaHandlers));

exports = HasAllMediaHandlers; 
//# sourceMappingURL=HasAllMediaHandlers.js.map
