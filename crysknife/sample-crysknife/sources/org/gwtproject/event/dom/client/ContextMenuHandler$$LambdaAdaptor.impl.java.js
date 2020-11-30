goog.module('org.gwtproject.event.dom.client.ContextMenuHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ContextMenuHandler = goog.require('org.gwtproject.event.dom.client.ContextMenuHandler$impl');

let ContextMenuEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuEvent$impl');

/**
 * @implements {ContextMenuHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ContextMenuEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ContextMenuEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ContextMenuHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_ContextMenuHandler_$JsFunction(/** ?function(ContextMenuEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor = fn;
 }
 
 m_onContextMenu__org_gwtproject_event_dom_client_ContextMenuEvent(/** ContextMenuEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_ContextMenuHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.ContextMenuHandler$$LambdaAdaptor');

ContextMenuHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ContextMenuHandler$$LambdaAdaptor.js.map
