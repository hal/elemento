goog.module('org.gwtproject.event.dom.client.ContextMenuHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ContextMenuEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ContextMenuHandler {
 /** @abstract */
 m_onContextMenu__org_gwtproject_event_dom_client_ContextMenuEvent(/** ContextMenuEvent */ event) {}
 /** @return {ContextMenuHandler} */
 static $adapt(/** ?function(ContextMenuEvent):void */ fn) {
  ContextMenuHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ContextMenuHandler.$clinit = () =>{};
  ContextMenuHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ContextMenuHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ContextMenuHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ContextMenuHandler, 'org.gwtproject.event.dom.client.ContextMenuHandler');

ContextMenuHandler.$markImplementor(/** @type {Function} */ (ContextMenuHandler));

exports = ContextMenuHandler; 
//# sourceMappingURL=ContextMenuHandler.js.map
