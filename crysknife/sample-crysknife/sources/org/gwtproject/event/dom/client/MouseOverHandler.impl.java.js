goog.module('org.gwtproject.event.dom.client.MouseOverHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseOverHandler {
 /** @abstract */
 m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(/** MouseOverEvent */ event) {}
 /** @return {MouseOverHandler} */
 static $adapt(/** ?function(MouseOverEvent):void */ fn) {
  MouseOverHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MouseOverHandler.$clinit = () =>{};
  MouseOverHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_MouseOverHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseOverHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseOverHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseOverHandler, 'org.gwtproject.event.dom.client.MouseOverHandler');

MouseOverHandler.$markImplementor(/** @type {Function} */ (MouseOverHandler));

exports = MouseOverHandler; 
//# sourceMappingURL=MouseOverHandler.js.map
