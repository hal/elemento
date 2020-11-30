goog.module('org.gwtproject.event.dom.client.KeyUpHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyUpHandler {
 /** @abstract */
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(/** KeyUpEvent */ event) {}
 /** @return {KeyUpHandler} */
 static $adapt(/** ?function(KeyUpEvent):void */ fn) {
  KeyUpHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  KeyUpHandler.$clinit = () =>{};
  KeyUpHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_KeyUpHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyUpHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyUpHandler, 'org.gwtproject.event.dom.client.KeyUpHandler');

KeyUpHandler.$markImplementor(/** @type {Function} */ (KeyUpHandler));

exports = KeyUpHandler; 
//# sourceMappingURL=KeyUpHandler.js.map
