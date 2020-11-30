goog.module('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ErrorHandler = goog.require('org.gwtproject.event.dom.client.ErrorHandler$impl');

let ErrorEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorEvent$impl');

/**
 * @implements {ErrorHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ErrorEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ErrorEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ErrorHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ErrorHandler_$JsFunction(/** ?function(ErrorEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor = fn;
 }
 
 m_onError__org_gwtproject_event_dom_client_ErrorEvent(/** ErrorEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ErrorHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ErrorHandler$$LambdaAdaptor');

ErrorHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ErrorHandler$$LambdaAdaptor.js.map
