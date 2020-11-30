goog.module('org.gwtproject.event.dom.client.ChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.gwtproject.event.dom.client.ChangeHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');

/**
 * @implements {ChangeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ChangeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ChangeEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_ChangeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ChangeHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ChangeHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_ChangeHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ChangeHandler_$JsFunction(/** ?function(ChangeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ChangeHandler_$LambdaAdaptor = fn;
 }
 
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(/** ChangeEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ChangeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ChangeHandler$$LambdaAdaptor');

ChangeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ChangeHandler$$LambdaAdaptor.js.map
