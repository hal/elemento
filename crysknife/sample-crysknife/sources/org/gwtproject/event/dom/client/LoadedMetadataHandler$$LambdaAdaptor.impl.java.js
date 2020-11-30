goog.module('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadedMetadataHandler = goog.require('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');

let LoadedMetadataEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');

/**
 * @implements {LoadedMetadataHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LoadedMetadataEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LoadedMetadataEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$JsFunction(/** ?function(LoadedMetadataEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor = fn;
 }
 
 m_onLoadedMetadata__org_gwtproject_event_dom_client_LoadedMetadataEvent(/** LoadedMetadataEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.LoadedMetadataHandler$$LambdaAdaptor');

LoadedMetadataHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadedMetadataHandler$$LambdaAdaptor.js.map
