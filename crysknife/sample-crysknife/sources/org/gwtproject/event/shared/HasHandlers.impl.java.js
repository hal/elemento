goog.module('org.gwtproject.event.shared.HasHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasHandlers {
 /** @abstract */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {}
 /** @return {HasHandlers} */
 static $adapt(/** ?function(Event<?>):void */ fn) {
  HasHandlers.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasHandlers.$clinit = () =>{};
  HasHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_shared_HasHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HasHandlers;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasHandlers, 'org.gwtproject.event.shared.HasHandlers');

HasHandlers.$markImplementor(/** @type {Function} */ (HasHandlers));

exports = HasHandlers; 
//# sourceMappingURL=HasHandlers.js.map
