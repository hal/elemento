goog.module('org.gwtproject.event.dom.client.FocusHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class FocusHandler {
 /** @abstract */
 m_onFocus__org_gwtproject_event_dom_client_FocusEvent(/** FocusEvent */ event) {}
 /** @return {FocusHandler} */
 static $adapt(/** ?function(FocusEvent):void */ fn) {
  FocusHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FocusHandler.$clinit = () =>{};
  FocusHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_FocusHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_FocusHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(FocusHandler, 'org.gwtproject.event.dom.client.FocusHandler');

FocusHandler.$markImplementor(/** @type {Function} */ (FocusHandler));

exports = FocusHandler; 
//# sourceMappingURL=FocusHandler.js.map
