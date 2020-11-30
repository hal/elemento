goog.module('org.gwtproject.event.dom.client.MouseUpHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseUpHandler {
 /** @abstract */
 m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(/** MouseUpEvent */ event) {}
 /** @return {MouseUpHandler} */
 static $adapt(/** ?function(MouseUpEvent):void */ fn) {
  MouseUpHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseUpHandler.$clinit = () =>{};
  MouseUpHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseUpHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseUpHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseUpHandler, 'org.gwtproject.event.dom.client.MouseUpHandler');

MouseUpHandler.$markImplementor(/** @type {Function} */ (MouseUpHandler));

exports = MouseUpHandler; 
//# sourceMappingURL=MouseUpHandler.js.map
