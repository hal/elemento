goog.module('org.gwtproject.event.dom.client.TouchMoveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchMoveHandler {
 /** @abstract */
 m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(/** TouchMoveEvent */ event) {}
 /** @return {TouchMoveHandler} */
 static $adapt(/** ?function(TouchMoveEvent):void */ fn) {
  TouchMoveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TouchMoveHandler.$clinit = () =>{};
  TouchMoveHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_TouchMoveHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchMoveHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchMoveHandler, 'org.gwtproject.event.dom.client.TouchMoveHandler');

TouchMoveHandler.$markImplementor(/** @type {Function} */ (TouchMoveHandler));

exports = TouchMoveHandler; 
//# sourceMappingURL=TouchMoveHandler.js.map
