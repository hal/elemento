goog.module('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressHandler = goog.require('org.gwtproject.event.dom.client.ProgressHandler$impl');

let ProgressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressEvent$impl');

/**
 * @implements {ProgressHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ProgressEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ProgressEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ProgressHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ProgressHandler_$JsFunction(/** ?function(ProgressEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor = fn;
 }
 
 m_onProgress__org_gwtproject_event_dom_client_ProgressEvent(/** ProgressEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ProgressHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ProgressHandler$$LambdaAdaptor');

ProgressHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ProgressHandler$$LambdaAdaptor.js.map
