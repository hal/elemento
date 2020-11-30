goog.module('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseMoveHandler = goog.require('org.gwtproject.event.dom.client.MouseMoveHandler$impl');

let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');

/**
 * @implements {MouseMoveHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseMoveEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseMoveEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseMoveHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseMoveHandler_$JsFunction(/** ?function(MouseMoveEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(/** MouseMoveEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseMoveHandler$$LambdaAdaptor');

MouseMoveHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseMoveHandler$$LambdaAdaptor.js.map
