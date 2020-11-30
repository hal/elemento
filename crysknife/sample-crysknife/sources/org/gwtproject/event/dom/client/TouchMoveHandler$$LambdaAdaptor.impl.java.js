goog.module('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchMoveHandler = goog.require('org.gwtproject.event.dom.client.TouchMoveHandler$impl');

let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');

/**
 * @implements {TouchMoveHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TouchMoveEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TouchMoveEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchMoveHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchMoveHandler_$JsFunction(/** ?function(TouchMoveEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor = fn;
 }
 
 m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(/** TouchMoveEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchMoveHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchMoveHandler$$LambdaAdaptor');

TouchMoveHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchMoveHandler$$LambdaAdaptor.js.map
