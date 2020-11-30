goog.module('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragOverHandler = goog.require('org.gwtproject.event.dom.client.DragOverHandler$impl');

let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');

/**
 * @implements {DragOverHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragOverEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragOverEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragOverHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragOverHandler_$JsFunction(/** ?function(DragOverEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor = fn;
 }
 
 m_onDragOver__org_gwtproject_event_dom_client_DragOverEvent(/** DragOverEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragOverHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragOverHandler$$LambdaAdaptor');

DragOverHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragOverHandler$$LambdaAdaptor.js.map
