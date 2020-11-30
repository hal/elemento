goog.module('org.gwtproject.event.dom.client.HasNativeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasNativeEvent {
 /** @abstract @return {Object} */
 m_getNativeEvent__() {}
 /** @return {HasNativeEvent} */
 static $adapt(/** ?function():Object */ fn) {
  HasNativeEvent.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasNativeEvent.$clinit = () =>{};
  HasNativeEvent.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasNativeEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasNativeEvent;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasNativeEvent, 'org.gwtproject.event.dom.client.HasNativeEvent');

HasNativeEvent.$markImplementor(/** @type {Function} */ (HasNativeEvent));

exports = HasNativeEvent; 
//# sourceMappingURL=HasNativeEvent.js.map
