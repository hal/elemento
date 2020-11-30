goog.module('org.gwtproject.event.dom.client.DragStartHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragStartHandler = goog.require('org.gwtproject.event.dom.client.DragStartHandler$impl');

let DragStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartEvent$impl');

/**
 * @implements {DragStartHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragStartEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragStartEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragStartHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragStartHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragStartHandler_$JsFunction(/** ?function(DragStartEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragStartHandler_$LambdaAdaptor = fn;
 }
 
 m_onDragStart__org_gwtproject_event_dom_client_DragStartEvent(/** DragStartEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragStartHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragStartHandler$$LambdaAdaptor');

DragStartHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragStartHandler$$LambdaAdaptor.js.map
