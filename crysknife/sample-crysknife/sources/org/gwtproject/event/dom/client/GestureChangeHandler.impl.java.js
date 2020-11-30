goog.module('org.gwtproject.event.dom.client.GestureChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureChangeHandler {
 /** @abstract */
 m_onGestureChange__org_gwtproject_event_dom_client_GestureChangeEvent(/** GestureChangeEvent */ event) {}
 /** @return {GestureChangeHandler} */
 static $adapt(/** ?function(GestureChangeEvent):void */ fn) {
  GestureChangeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  GestureChangeHandler.$clinit = () =>{};
  GestureChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_GestureChangeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureChangeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureChangeHandler, 'org.gwtproject.event.dom.client.GestureChangeHandler');

GestureChangeHandler.$markImplementor(/** @type {Function} */ (GestureChangeHandler));

exports = GestureChangeHandler; 
//# sourceMappingURL=GestureChangeHandler.js.map
