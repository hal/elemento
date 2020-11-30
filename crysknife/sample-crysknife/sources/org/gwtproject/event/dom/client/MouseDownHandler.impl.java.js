goog.module('org.gwtproject.event.dom.client.MouseDownHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseDownHandler {
 /** @abstract */
 m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(/** MouseDownEvent */ event) {}
 /** @return {MouseDownHandler} */
 static $adapt(/** ?function(MouseDownEvent):void */ fn) {
  MouseDownHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseDownHandler.$clinit = () =>{};
  MouseDownHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseDownHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseDownHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseDownHandler, 'org.gwtproject.event.dom.client.MouseDownHandler');

MouseDownHandler.$markImplementor(/** @type {Function} */ (MouseDownHandler));

exports = MouseDownHandler; 
//# sourceMappingURL=MouseDownHandler.js.map
