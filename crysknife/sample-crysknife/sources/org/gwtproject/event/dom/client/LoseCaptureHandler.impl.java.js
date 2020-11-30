goog.module('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoseCaptureEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoseCaptureHandler {
 /** @abstract */
 m_onLoseCapture__org_gwtproject_event_dom_client_LoseCaptureEvent(/** LoseCaptureEvent */ event) {}
 /** @return {LoseCaptureHandler} */
 static $adapt(/** ?function(LoseCaptureEvent):void */ fn) {
  LoseCaptureHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LoseCaptureHandler.$clinit = () =>{};
  LoseCaptureHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_LoseCaptureHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoseCaptureHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoseCaptureHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoseCaptureHandler, 'org.gwtproject.event.dom.client.LoseCaptureHandler');

LoseCaptureHandler.$markImplementor(/** @type {Function} */ (LoseCaptureHandler));

exports = LoseCaptureHandler; 
//# sourceMappingURL=LoseCaptureHandler.js.map
