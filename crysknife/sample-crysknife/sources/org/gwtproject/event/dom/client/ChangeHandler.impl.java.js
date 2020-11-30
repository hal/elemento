goog.module('org.gwtproject.event.dom.client.ChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ChangeHandler {
 /** @abstract */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(/** ChangeEvent */ event) {}
 /** @return {ChangeHandler} */
 static $adapt(/** ?function(ChangeEvent):void */ fn) {
  ChangeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ChangeHandler.$clinit = () =>{};
  ChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ChangeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ChangeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ChangeHandler, 'org.gwtproject.event.dom.client.ChangeHandler');

ChangeHandler.$markImplementor(/** @type {Function} */ (ChangeHandler));

exports = ChangeHandler; 
//# sourceMappingURL=ChangeHandler.js.map
