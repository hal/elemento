goog.module('org.gwtproject.event.dom.client.TouchEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchEndHandler {
 /** @abstract */
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(/** TouchEndEvent */ event) {}
 /** @return {TouchEndHandler} */
 static $adapt(/** ?function(TouchEndEvent):void */ fn) {
  TouchEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TouchEndHandler.$clinit = () =>{};
  TouchEndHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_TouchEndHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchEndHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchEndHandler, 'org.gwtproject.event.dom.client.TouchEndHandler');

TouchEndHandler.$markImplementor(/** @type {Function} */ (TouchEndHandler));

exports = TouchEndHandler; 
//# sourceMappingURL=TouchEndHandler.js.map
