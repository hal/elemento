goog.module('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchCancelHandler = goog.require('org.gwtproject.event.dom.client.TouchCancelHandler$impl');

let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');

/**
 * @implements {TouchCancelHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TouchCancelEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TouchCancelEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchCancelHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchCancelHandler_$JsFunction(/** ?function(TouchCancelEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor = fn;
 }
 
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(/** TouchCancelEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchCancelHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchCancelHandler$$LambdaAdaptor');

TouchCancelHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchCancelHandler$$LambdaAdaptor.js.map
