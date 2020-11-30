goog.module('org.gwtproject.event.dom.client.MouseOutHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseOutHandler {
 /** @abstract */
 m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(/** MouseOutEvent */ event) {}
 /** @return {MouseOutHandler} */
 static $adapt(/** ?function(MouseOutEvent):void */ fn) {
  MouseOutHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseOutHandler.$clinit = () =>{};
  MouseOutHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseOutHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseOutHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseOutHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseOutHandler, 'org.gwtproject.event.dom.client.MouseOutHandler');

MouseOutHandler.$markImplementor(/** @type {Function} */ (MouseOutHandler));

exports = MouseOutHandler; 
//# sourceMappingURL=MouseOutHandler.js.map
