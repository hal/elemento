goog.module('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EndedHandler = goog.require('org.gwtproject.event.dom.client.EndedHandler$impl');

let EndedEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedEvent$impl');

/**
 * @implements {EndedHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(EndedEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(EndedEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_EndedHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_EndedHandler_$JsFunction(/** ?function(EndedEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor = fn;
 }
 
 m_onEnded__org_gwtproject_event_dom_client_EndedEvent(/** EndedEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.EndedHandler$$LambdaAdaptor');

EndedHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EndedHandler$$LambdaAdaptor.js.map
