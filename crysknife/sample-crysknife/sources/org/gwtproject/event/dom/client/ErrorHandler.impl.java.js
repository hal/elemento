goog.module('org.gwtproject.event.dom.client.ErrorHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ErrorEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ErrorHandler {
 /** @abstract */
 m_onError__org_gwtproject_event_dom_client_ErrorEvent(/** ErrorEvent */ event) {}
 /** @return {ErrorHandler} */
 static $adapt(/** ?function(ErrorEvent):void */ fn) {
  ErrorHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ErrorHandler.$clinit = () =>{};
  ErrorHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_ErrorHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ErrorHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ErrorHandler, 'org.gwtproject.event.dom.client.ErrorHandler');

ErrorHandler.$markImplementor(/** @type {Function} */ (ErrorHandler));

exports = ErrorHandler; 
//# sourceMappingURL=ErrorHandler.js.map
