goog.module('org.gwtproject.event.dom.client.BlurHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BlurHandler = goog.require('org.gwtproject.event.dom.client.BlurHandler$impl');

let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');

/**
 * @implements {BlurHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(BlurEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(BlurEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_BlurHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_BlurHandler_$JsFunction(/** ?function(BlurEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor = fn;
 }
 
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(/** BlurEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_BlurHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.BlurHandler$$LambdaAdaptor');

BlurHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=BlurHandler$$LambdaAdaptor.js.map
