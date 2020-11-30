goog.module('org.gwtproject.event.dom.client.DragOverHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragOverHandler {
 /** @abstract */
 m_onDragOver__org_gwtproject_event_dom_client_DragOverEvent(/** DragOverEvent */ event) {}
 /** @return {DragOverHandler} */
 static $adapt(/** ?function(DragOverEvent):void */ fn) {
  DragOverHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragOverHandler.$clinit = () =>{};
  DragOverHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragOverHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragOverHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragOverHandler, 'org.gwtproject.event.dom.client.DragOverHandler');

DragOverHandler.$markImplementor(/** @type {Function} */ (DragOverHandler));

exports = DragOverHandler; 
//# sourceMappingURL=DragOverHandler.js.map
