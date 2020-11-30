goog.module('org.gwtproject.event.dom.client.ClickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ClickHandler {
 /** @abstract */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {}
 /** @return {ClickHandler} */
 static $adapt(/** ?function(ClickEvent):void */ fn) {
  ClickHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClickHandler.$clinit = () =>{};
  ClickHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ClickHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ClickHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ClickHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ClickHandler, 'org.gwtproject.event.dom.client.ClickHandler');

ClickHandler.$markImplementor(/** @type {Function} */ (ClickHandler));

exports = ClickHandler; 
//# sourceMappingURL=ClickHandler.js.map
