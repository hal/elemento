goog.module('org.gwtproject.event.dom.client.LoadHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadHandler = goog.require('org.gwtproject.event.dom.client.LoadHandler$impl');

let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');

/**
 * @implements {LoadHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LoadEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LoadEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadHandler_$JsFunction(/** ?function(LoadEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor = fn;
 }
 
 m_onLoad__org_gwtproject_event_dom_client_LoadEvent(/** LoadEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_LoadHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.LoadHandler$$LambdaAdaptor');

LoadHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadHandler$$LambdaAdaptor.js.map
