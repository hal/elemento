goog.module('org.gwtproject.event.legacy.shared.EventHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @deprecated
 */
class EventHandler {
 
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_legacy_shared_EventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_legacy_shared_EventHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventHandler, 'org.gwtproject.event.legacy.shared.EventHandler');

EventHandler.$markImplementor(/** @type {Function} */ (EventHandler));

exports = EventHandler; 
//# sourceMappingURL=EventHandler.js.map
