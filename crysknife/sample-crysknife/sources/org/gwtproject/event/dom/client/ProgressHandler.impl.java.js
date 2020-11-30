goog.module('org.gwtproject.event.dom.client.ProgressHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ProgressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ProgressHandler {
 /** @abstract */
 m_onProgress__org_gwtproject_event_dom_client_ProgressEvent(/** ProgressEvent */ event) {}
 /** @return {ProgressHandler} */
 static $adapt(/** ?function(ProgressEvent):void */ fn) {
  ProgressHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ProgressHandler.$clinit = () =>{};
  ProgressHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ProgressHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ProgressHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ProgressHandler, 'org.gwtproject.event.dom.client.ProgressHandler');

ProgressHandler.$markImplementor(/** @type {Function} */ (ProgressHandler));

exports = ProgressHandler; 
//# sourceMappingURL=ProgressHandler.js.map
