goog.module('org.gwtproject.event.dom.client.DragEnterHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragEnterHandler {
 /** @abstract */
 m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(/** DragEnterEvent */ event) {}
 /** @return {DragEnterHandler} */
 static $adapt(/** ?function(DragEnterEvent):void */ fn) {
  DragEnterHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragEnterHandler.$clinit = () =>{};
  DragEnterHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragEnterHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEnterHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEnterHandler, 'org.gwtproject.event.dom.client.DragEnterHandler');

DragEnterHandler.$markImplementor(/** @type {Function} */ (DragEnterHandler));

exports = DragEnterHandler; 
//# sourceMappingURL=DragEnterHandler.js.map
