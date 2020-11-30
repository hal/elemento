goog.module('org.gwtproject.event.dom.client.GestureStartHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const GestureStartHandler = goog.require('org.gwtproject.event.dom.client.GestureStartHandler$impl');

let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');

/**
 * @implements {GestureStartHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(GestureStartEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(GestureStartEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_GestureStartHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_GestureStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureStartHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_GestureStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureStartHandler_$JsFunction(/** ?function(GestureStartEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_GestureStartHandler_$LambdaAdaptor = fn;
 }
 
 m_onGestureStart__org_gwtproject_event_dom_client_GestureStartEvent(/** GestureStartEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_GestureStartHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.GestureStartHandler$$LambdaAdaptor');

GestureStartHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=GestureStartHandler$$LambdaAdaptor.js.map
