goog.module('org.gwtproject.event.dom.client.TouchStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchStartHandler {
 /** @abstract */
 m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(/** TouchStartEvent */ event) {}
 /** @return {TouchStartHandler} */
 static $adapt(/** ?function(TouchStartEvent):void */ fn) {
  TouchStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TouchStartHandler.$clinit = () =>{};
  TouchStartHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_TouchStartHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchStartHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchStartHandler, 'org.gwtproject.event.dom.client.TouchStartHandler');

TouchStartHandler.$markImplementor(/** @type {Function} */ (TouchStartHandler));

exports = TouchStartHandler; 
//# sourceMappingURL=TouchStartHandler.js.map
