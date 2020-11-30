goog.module('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchStartHandler = goog.require('org.gwtproject.event.dom.client.TouchStartHandler$impl');

let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');

/**
 * @implements {TouchStartHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TouchStartEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TouchStartEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchStartHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchStartHandler_$JsFunction(/** ?function(TouchStartEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor = fn;
 }
 
 m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(/** TouchStartEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchStartHandler$$LambdaAdaptor');

TouchStartHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchStartHandler$$LambdaAdaptor.js.map
