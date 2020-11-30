goog.module('org.gwtproject.event.dom.client.GestureStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureStartHandler {
 /** @abstract */
 m_onGestureStart__org_gwtproject_event_dom_client_GestureStartEvent(/** GestureStartEvent */ event) {}
 /** @return {GestureStartHandler} */
 static $adapt(/** ?function(GestureStartEvent):void */ fn) {
  GestureStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  GestureStartHandler.$clinit = () =>{};
  GestureStartHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_GestureStartHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureStartHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureStartHandler, 'org.gwtproject.event.dom.client.GestureStartHandler');

GestureStartHandler.$markImplementor(/** @type {Function} */ (GestureStartHandler));

exports = GestureStartHandler; 
//# sourceMappingURL=GestureStartHandler.js.map
