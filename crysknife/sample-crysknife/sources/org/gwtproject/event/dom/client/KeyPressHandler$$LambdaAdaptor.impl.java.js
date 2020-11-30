goog.module('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyPressHandler = goog.require('org.gwtproject.event.dom.client.KeyPressHandler$impl');

let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');

/**
 * @implements {KeyPressHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(KeyPressEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(KeyPressEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyPressHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_KeyPressHandler_$JsFunction(/** ?function(KeyPressEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor = fn;
 }
 
 m_onKeyPress__org_gwtproject_event_dom_client_KeyPressEvent(/** KeyPressEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_KeyPressHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.KeyPressHandler$$LambdaAdaptor');

KeyPressHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=KeyPressHandler$$LambdaAdaptor.js.map
