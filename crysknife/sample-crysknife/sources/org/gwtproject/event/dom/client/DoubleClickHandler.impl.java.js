goog.module('org.gwtproject.event.dom.client.DoubleClickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DoubleClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DoubleClickHandler {
 /** @abstract */
 m_onDoubleClick__org_gwtproject_event_dom_client_DoubleClickEvent(/** DoubleClickEvent */ event) {}
 /** @return {DoubleClickHandler} */
 static $adapt(/** ?function(DoubleClickEvent):void */ fn) {
  DoubleClickHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DoubleClickHandler.$clinit = () =>{};
  DoubleClickHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DoubleClickHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DoubleClickHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DoubleClickHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DoubleClickHandler, 'org.gwtproject.event.dom.client.DoubleClickHandler');

DoubleClickHandler.$markImplementor(/** @type {Function} */ (DoubleClickHandler));

exports = DoubleClickHandler; 
//# sourceMappingURL=DoubleClickHandler.js.map
