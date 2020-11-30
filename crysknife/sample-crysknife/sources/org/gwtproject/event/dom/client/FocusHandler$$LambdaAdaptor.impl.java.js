goog.module('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FocusHandler = goog.require('org.gwtproject.event.dom.client.FocusHandler$impl');

let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');

/**
 * @implements {FocusHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(FocusEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(FocusEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_FocusHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_FocusHandler_$JsFunction(/** ?function(FocusEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor = fn;
 }
 
 m_onFocus__org_gwtproject_event_dom_client_FocusEvent(/** FocusEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_FocusHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.FocusHandler$$LambdaAdaptor');

FocusHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FocusHandler$$LambdaAdaptor.js.map
