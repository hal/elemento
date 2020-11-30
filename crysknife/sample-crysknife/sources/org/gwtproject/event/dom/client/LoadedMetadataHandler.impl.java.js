goog.module('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoadedMetadataEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoadedMetadataHandler {
 /** @abstract */
 m_onLoadedMetadata__org_gwtproject_event_dom_client_LoadedMetadataEvent(/** LoadedMetadataEvent */ event) {}
 /** @return {LoadedMetadataHandler} */
 static $adapt(/** ?function(LoadedMetadataEvent):void */ fn) {
  LoadedMetadataHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LoadedMetadataHandler.$clinit = () =>{};
  LoadedMetadataHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_LoadedMetadataHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoadedMetadataHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoadedMetadataHandler, 'org.gwtproject.event.dom.client.LoadedMetadataHandler');

LoadedMetadataHandler.$markImplementor(/** @type {Function} */ (LoadedMetadataHandler));

exports = LoadedMetadataHandler; 
//# sourceMappingURL=LoadedMetadataHandler.js.map
