goog.module('org.gwtproject.event.dom.client.DragHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragHandler {
 /** @abstract */
 m_onDrag__org_gwtproject_event_dom_client_DragEvent(/** DragEvent */ event) {}
 /** @return {DragHandler} */
 static $adapt(/** ?function(DragEvent):void */ fn) {
  DragHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragHandler.$clinit = () =>{};
  DragHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragHandler, 'org.gwtproject.event.dom.client.DragHandler');

DragHandler.$markImplementor(/** @type {Function} */ (DragHandler));

exports = DragHandler; 
//# sourceMappingURL=DragHandler.js.map
