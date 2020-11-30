goog.module('org.gwtproject.event.dom.client.MouseWheelHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseWheelHandler {
 /** @abstract */
 m_onMouseWheel__org_gwtproject_event_dom_client_MouseWheelEvent(/** MouseWheelEvent */ event) {}
 /** @return {MouseWheelHandler} */
 static $adapt(/** ?function(MouseWheelEvent):void */ fn) {
  MouseWheelHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseWheelHandler.$clinit = () =>{};
  MouseWheelHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseWheelHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseWheelHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseWheelHandler, 'org.gwtproject.event.dom.client.MouseWheelHandler');

MouseWheelHandler.$markImplementor(/** @type {Function} */ (MouseWheelHandler));

exports = MouseWheelHandler; 
//# sourceMappingURL=MouseWheelHandler.js.map
