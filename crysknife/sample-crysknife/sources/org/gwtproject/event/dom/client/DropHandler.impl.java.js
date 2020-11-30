goog.module('org.gwtproject.event.dom.client.DropHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DropHandler {
 /** @abstract */
 m_onDrop__org_gwtproject_event_dom_client_DropEvent(/** DropEvent */ event) {}
 /** @return {DropHandler} */
 static $adapt(/** ?function(DropEvent):void */ fn) {
  DropHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DropHandler.$clinit = () =>{};
  DropHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_DropHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DropHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DropHandler, 'org.gwtproject.event.dom.client.DropHandler');

DropHandler.$markImplementor(/** @type {Function} */ (DropHandler));

exports = DropHandler; 
//# sourceMappingURL=DropHandler.js.map
