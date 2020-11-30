goog.module('org.gwtproject.event.dom.client.EndedHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let EndedEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class EndedHandler {
 /** @abstract */
 m_onEnded__org_gwtproject_event_dom_client_EndedEvent(/** EndedEvent */ event) {}
 /** @return {EndedHandler} */
 static $adapt(/** ?function(EndedEvent):void */ fn) {
  EndedHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EndedHandler.$clinit = () =>{};
  EndedHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_EndedHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_EndedHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EndedHandler, 'org.gwtproject.event.dom.client.EndedHandler');

EndedHandler.$markImplementor(/** @type {Function} */ (EndedHandler));

exports = EndedHandler; 
//# sourceMappingURL=EndedHandler.js.map
