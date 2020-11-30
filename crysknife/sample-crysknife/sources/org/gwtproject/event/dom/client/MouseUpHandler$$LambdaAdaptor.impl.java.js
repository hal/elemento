goog.module('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseUpHandler = goog.require('org.gwtproject.event.dom.client.MouseUpHandler$impl');

let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');

/**
 * @implements {MouseUpHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseUpEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseUpEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseUpHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseUpHandler_$JsFunction(/** ?function(MouseUpEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(/** MouseUpEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseUpHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseUpHandler$$LambdaAdaptor');

MouseUpHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseUpHandler$$LambdaAdaptor.js.map
