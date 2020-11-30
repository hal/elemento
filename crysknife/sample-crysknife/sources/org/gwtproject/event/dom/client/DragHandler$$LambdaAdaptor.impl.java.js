goog.module('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragHandler = goog.require('org.gwtproject.event.dom.client.DragHandler$impl');

let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');

/**
 * @implements {DragHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragHandler_$JsFunction(/** ?function(DragEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor = fn;
 }
 
 m_onDrag__org_gwtproject_event_dom_client_DragEvent(/** DragEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragHandler$$LambdaAdaptor');

DragHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragHandler$$LambdaAdaptor.js.map
