goog.module('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEndHandler = goog.require('org.gwtproject.event.dom.client.TouchEndHandler$impl');

let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');

/**
 * @implements {TouchEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(TouchEndEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(TouchEndEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchEndHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchEndHandler_$JsFunction(/** ?function(TouchEndEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor = fn;
 }
 
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(/** TouchEndEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchEndHandler$$LambdaAdaptor');

TouchEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchEndHandler$$LambdaAdaptor.js.map
