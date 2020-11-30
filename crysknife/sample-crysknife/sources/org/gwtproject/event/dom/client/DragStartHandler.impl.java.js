goog.module('org.gwtproject.event.dom.client.DragStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragStartHandler {
 /** @abstract */
 m_onDragStart__org_gwtproject_event_dom_client_DragStartEvent(/** DragStartEvent */ event) {}
 /** @return {DragStartHandler} */
 static $adapt(/** ?function(DragStartEvent):void */ fn) {
  DragStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragStartHandler.$clinit = () =>{};
  DragStartHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragStartHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragStartHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragStartHandler, 'org.gwtproject.event.dom.client.DragStartHandler');

DragStartHandler.$markImplementor(/** @type {Function} */ (DragStartHandler));

exports = DragStartHandler; 
//# sourceMappingURL=DragStartHandler.js.map
