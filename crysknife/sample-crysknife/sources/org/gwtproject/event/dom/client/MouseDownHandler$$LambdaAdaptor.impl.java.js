goog.module('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseDownHandler = goog.require('org.gwtproject.event.dom.client.MouseDownHandler$impl');

let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');

/**
 * @implements {MouseDownHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MouseDownEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MouseDownEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseDownHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseDownHandler_$JsFunction(/** ?function(MouseDownEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor = fn;
 }
 
 m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(/** MouseDownEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseDownHandler$$LambdaAdaptor');

MouseDownHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseDownHandler$$LambdaAdaptor.js.map
