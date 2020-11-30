goog.module('org.gwtproject.event.dom.client.KeyPressHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyPressHandler {
 /** @abstract */
 m_onKeyPress__org_gwtproject_event_dom_client_KeyPressEvent(/** KeyPressEvent */ event) {}
 /** @return {KeyPressHandler} */
 static $adapt(/** ?function(KeyPressEvent):void */ fn) {
  KeyPressHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  KeyPressHandler.$clinit = () =>{};
  KeyPressHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_KeyPressHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyPressHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyPressHandler, 'org.gwtproject.event.dom.client.KeyPressHandler');

KeyPressHandler.$markImplementor(/** @type {Function} */ (KeyPressHandler));

exports = KeyPressHandler; 
//# sourceMappingURL=KeyPressHandler.js.map
