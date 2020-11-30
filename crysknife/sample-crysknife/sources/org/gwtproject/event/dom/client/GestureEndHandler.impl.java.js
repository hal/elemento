goog.module('org.gwtproject.event.dom.client.GestureEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureEndHandler {
 /** @abstract */
 m_onGestureEnd__org_gwtproject_event_dom_client_GestureEndEvent(/** GestureEndEvent */ event) {}
 /** @return {GestureEndHandler} */
 static $adapt(/** ?function(GestureEndEvent):void */ fn) {
  GestureEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  GestureEndHandler.$clinit = () =>{};
  GestureEndHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_GestureEndHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureEndHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureEndHandler, 'org.gwtproject.event.dom.client.GestureEndHandler');

GestureEndHandler.$markImplementor(/** @type {Function} */ (GestureEndHandler));

exports = GestureEndHandler; 
//# sourceMappingURL=GestureEndHandler.js.map
