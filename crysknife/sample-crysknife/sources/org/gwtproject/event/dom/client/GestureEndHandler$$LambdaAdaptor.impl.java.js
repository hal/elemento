goog.module('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const GestureEndHandler = goog.require('org.gwtproject.event.dom.client.GestureEndHandler$impl');

let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');

/**
 * @implements {GestureEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(GestureEndEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(GestureEndEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureEndHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_GestureEndHandler_$JsFunction(/** ?function(GestureEndEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor = fn;
 }
 
 m_onGestureEnd__org_gwtproject_event_dom_client_GestureEndEvent(/** GestureEndEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_GestureEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.GestureEndHandler$$LambdaAdaptor');

GestureEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=GestureEndHandler$$LambdaAdaptor.js.map
