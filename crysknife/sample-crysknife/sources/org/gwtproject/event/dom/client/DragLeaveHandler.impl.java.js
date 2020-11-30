goog.module('org.gwtproject.event.dom.client.DragLeaveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragLeaveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragLeaveHandler {
 /** @abstract */
 m_onDragLeave__org_gwtproject_event_dom_client_DragLeaveEvent(/** DragLeaveEvent */ event) {}
 /** @return {DragLeaveHandler} */
 static $adapt(/** ?function(DragLeaveEvent):void */ fn) {
  DragLeaveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragLeaveHandler.$clinit = () =>{};
  DragLeaveHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragLeaveHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragLeaveHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragLeaveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragLeaveHandler, 'org.gwtproject.event.dom.client.DragLeaveHandler');

DragLeaveHandler.$markImplementor(/** @type {Function} */ (DragLeaveHandler));

exports = DragLeaveHandler; 
//# sourceMappingURL=DragLeaveHandler.js.map
