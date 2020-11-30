goog.module('org.gwtproject.event.dom.client.DragEnterClickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');
let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @interface
 */
class DragEnterClickHandler {
 /** @abstract */
 m_onDoubleClick__org_gwtproject_event_dom_client_DragEnterEvent(/** DragEnterEvent */ event) {}
 /** @return {DragEnterClickHandler} */
 static $adapt(/** ?function(DragEnterEvent):void */ fn) {
  DragEnterClickHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DragEnterClickHandler.$clinit = () =>{};
  DragEnterClickHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DragEnterClickHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEnterClickHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEnterClickHandler, 'org.gwtproject.event.dom.client.DragEnterClickHandler');

DragEnterClickHandler.$markImplementor(/** @type {Function} */ (DragEnterClickHandler));

exports = DragEnterClickHandler; 
//# sourceMappingURL=DragEnterClickHandler.js.map
