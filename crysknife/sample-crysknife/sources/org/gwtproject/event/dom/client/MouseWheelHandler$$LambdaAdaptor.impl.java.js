goog.module('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseWheelHandler = goog.require('org.gwtproject.event.dom.client.MouseWheelHandler$impl');

let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');

/**
 * @implements {MouseWheelHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseWheelEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseWheelEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseWheelHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseWheelHandler_$JsFunction(/** ?function(MouseWheelEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseWheel__org_gwtproject_event_dom_client_MouseWheelEvent(/** MouseWheelEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseWheelHandler$$LambdaAdaptor');

MouseWheelHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseWheelHandler$$LambdaAdaptor.js.map
