goog.module('org.gwtproject.event.dom.client.DragEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragEndHandler {
 /** @abstract */
 m_onDragEnd__org_gwtproject_event_dom_client_DragEndEvent(/** DragEndEvent */ event) {}
 /** @return {DragEndHandler} */
 static $adapt(/** ?function(DragEndEvent):void */ fn) {
  DragEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragEndHandler.$clinit = () =>{};
  DragEndHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragEndHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEndHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEndHandler, 'org.gwtproject.event.dom.client.DragEndHandler');

DragEndHandler.$markImplementor(/** @type {Function} */ (DragEndHandler));

exports = DragEndHandler; 
//# sourceMappingURL=DragEndHandler.js.map
