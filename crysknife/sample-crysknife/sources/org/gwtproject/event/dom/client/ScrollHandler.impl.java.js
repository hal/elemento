goog.module('org.gwtproject.event.dom.client.ScrollHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ScrollHandler {
 /** @abstract */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(/** ScrollEvent */ event) {}
 /** @return {ScrollHandler} */
 static $adapt(/** ?function(ScrollEvent):void */ fn) {
  ScrollHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ScrollHandler.$clinit = () =>{};
  ScrollHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ScrollHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ScrollHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ScrollHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ScrollHandler, 'org.gwtproject.event.dom.client.ScrollHandler');

ScrollHandler.$markImplementor(/** @type {Function} */ (ScrollHandler));

exports = ScrollHandler; 
//# sourceMappingURL=ScrollHandler.js.map
