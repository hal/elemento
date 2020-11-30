goog.module('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CanPlayThroughHandler = goog.require('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');

let CanPlayThroughEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');

/**
 * @implements {CanPlayThroughHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(CanPlayThroughEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(CanPlayThroughEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_CanPlayThroughHandler_$JsFunction(/** ?function(CanPlayThroughEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor = fn;
 }
 
 m_onCanPlayThrough__org_gwtproject_event_dom_client_CanPlayThroughEvent(/** CanPlayThroughEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_CanPlayThroughHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.CanPlayThroughHandler$$LambdaAdaptor');

CanPlayThroughHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CanPlayThroughHandler$$LambdaAdaptor.js.map
