goog.module('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DropHandler = goog.require('org.gwtproject.event.dom.client.DropHandler$impl');

let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');

/**
 * @implements {DropHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DropEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DropEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DropHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DropHandler_$JsFunction(/** ?function(DropEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor = fn;
 }
 
 m_onDrop__org_gwtproject_event_dom_client_DropEvent(/** DropEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DropHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DropHandler$$LambdaAdaptor');

DropHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DropHandler$$LambdaAdaptor.js.map
