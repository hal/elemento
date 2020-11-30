goog.module('org.gwtproject.event.dom.client.LoadHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoadHandler {
 /** @abstract */
 m_onLoad__org_gwtproject_event_dom_client_LoadEvent(/** LoadEvent */ event) {}
 /** @return {LoadHandler} */
 static $adapt(/** ?function(LoadEvent):void */ fn) {
  LoadHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LoadHandler.$clinit = () =>{};
  LoadHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_LoadHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoadHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoadHandler, 'org.gwtproject.event.dom.client.LoadHandler');

LoadHandler.$markImplementor(/** @type {Function} */ (LoadHandler));

exports = LoadHandler; 
//# sourceMappingURL=LoadHandler.js.map
