goog.module('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyUpHandler = goog.require('org.gwtproject.event.dom.client.KeyUpHandler$impl');

let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');

/**
 * @implements {KeyUpHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(KeyUpEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(KeyUpEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyUpHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyUpHandler_$JsFunction(/** ?function(KeyUpEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor = fn;
 }
 
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(/** KeyUpEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_KeyUpHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.KeyUpHandler$$LambdaAdaptor');

KeyUpHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=KeyUpHandler$$LambdaAdaptor.js.map
