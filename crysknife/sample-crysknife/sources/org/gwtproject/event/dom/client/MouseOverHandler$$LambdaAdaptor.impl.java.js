goog.module('org.gwtproject.event.dom.client.MouseOverHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseOverHandler = goog.require('org.gwtproject.event.dom.client.MouseOverHandler$impl');

let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');

/**
 * @implements {MouseOverHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseOverEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseOverEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseOverHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseOverHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseOverHandler_$JsFunction(/** ?function(MouseOverEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseOverHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(/** MouseOverEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseOverHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseOverHandler$$LambdaAdaptor');

MouseOverHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseOverHandler$$LambdaAdaptor.js.map
