goog.module('org.gwtproject.event.dom.client.TouchCancelHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchCancelHandler {
 /** @abstract */
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(/** TouchCancelEvent */ event) {}
 /** @return {TouchCancelHandler} */
 static $adapt(/** ?function(TouchCancelEvent):void */ fn) {
  TouchCancelHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TouchCancelHandler.$clinit = () =>{};
  TouchCancelHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_TouchCancelHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchCancelHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchCancelHandler, 'org.gwtproject.event.dom.client.TouchCancelHandler');

TouchCancelHandler.$markImplementor(/** @type {Function} */ (TouchCancelHandler));

exports = TouchCancelHandler; 
//# sourceMappingURL=TouchCancelHandler.js.map
