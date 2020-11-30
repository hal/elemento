goog.module('org.gwtproject.event.dom.client.BlurHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class BlurHandler {
 /** @abstract */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(/** BlurEvent */ event) {}
 /** @return {BlurHandler} */
 static $adapt(/** ?function(BlurEvent):void */ fn) {
  BlurHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BlurHandler.$clinit = () =>{};
  BlurHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_BlurHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_BlurHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BlurHandler, 'org.gwtproject.event.dom.client.BlurHandler');

BlurHandler.$markImplementor(/** @type {Function} */ (BlurHandler));

exports = BlurHandler; 
//# sourceMappingURL=BlurHandler.js.map
