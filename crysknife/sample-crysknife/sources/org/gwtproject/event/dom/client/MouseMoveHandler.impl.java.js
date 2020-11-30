goog.module('org.gwtproject.event.dom.client.MouseMoveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseMoveHandler {
 /** @abstract */
 m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(/** MouseMoveEvent */ event) {}
 /** @return {MouseMoveHandler} */
 static $adapt(/** ?function(MouseMoveEvent):void */ fn) {
  MouseMoveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseMoveHandler.$clinit = () =>{};
  MouseMoveHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseMoveHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseMoveHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseMoveHandler, 'org.gwtproject.event.dom.client.MouseMoveHandler');

MouseMoveHandler.$markImplementor(/** @type {Function} */ (MouseMoveHandler));

exports = MouseMoveHandler; 
//# sourceMappingURL=MouseMoveHandler.js.map
