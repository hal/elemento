goog.module('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let CanPlayThroughEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class CanPlayThroughHandler {
 /** @abstract */
 m_onCanPlayThrough__org_gwtproject_event_dom_client_CanPlayThroughEvent(/** CanPlayThroughEvent */ event) {}
 /** @return {CanPlayThroughHandler} */
 static $adapt(/** ?function(CanPlayThroughEvent):void */ fn) {
  CanPlayThroughHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CanPlayThroughHandler.$clinit = () =>{};
  CanPlayThroughHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_CanPlayThroughHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_CanPlayThroughHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CanPlayThroughHandler, 'org.gwtproject.event.dom.client.CanPlayThroughHandler');

CanPlayThroughHandler.$markImplementor(/** @type {Function} */ (CanPlayThroughHandler));

exports = CanPlayThroughHandler; 
//# sourceMappingURL=CanPlayThroughHandler.js.map
