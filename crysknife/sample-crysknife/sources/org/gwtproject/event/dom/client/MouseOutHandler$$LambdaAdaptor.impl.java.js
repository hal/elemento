goog.module('org.gwtproject.event.dom.client.MouseOutHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseOutHandler = goog.require('org.gwtproject.event.dom.client.MouseOutHandler$impl');

let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');

/**
 * @implements {MouseOutHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseOutEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseOutEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseOutHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseOutHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseOutHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseOutHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseOutHandler_$JsFunction(/** ?function(MouseOutEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseOutHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(/** MouseOutEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseOutHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseOutHandler$$LambdaAdaptor');

MouseOutHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseOutHandler$$LambdaAdaptor.js.map
