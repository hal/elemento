goog.module('org.gwtproject.event.dom.client.KeyDownHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyDownHandler {
 /** @abstract */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(/** KeyDownEvent */ event) {}
 /** @return {KeyDownHandler} */
 static $adapt(/** ?function(KeyDownEvent):void */ fn) {
  KeyDownHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  KeyDownHandler.$clinit = () =>{};
  KeyDownHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_KeyDownHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyDownHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyDownHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyDownHandler, 'org.gwtproject.event.dom.client.KeyDownHandler');

KeyDownHandler.$markImplementor(/** @type {Function} */ (KeyDownHandler));

exports = KeyDownHandler; 
//# sourceMappingURL=KeyDownHandler.js.map
