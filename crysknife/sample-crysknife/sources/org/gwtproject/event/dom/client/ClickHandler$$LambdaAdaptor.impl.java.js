goog.module('org.gwtproject.event.dom.client.ClickHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');

/**
 * @implements {ClickHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ClickEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ClickEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ClickHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ClickHandler_$JsFunction(/** ?function(ClickEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor = fn;
 }
 
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ClickHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ClickHandler$$LambdaAdaptor');

ClickHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ClickHandler$$LambdaAdaptor.js.map
