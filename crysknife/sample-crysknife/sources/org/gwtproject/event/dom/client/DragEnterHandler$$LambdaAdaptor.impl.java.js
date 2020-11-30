goog.module('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEnterHandler = goog.require('org.gwtproject.event.dom.client.DragEnterHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @implements {DragEnterHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragEnterEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragEnterEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterHandler_$JsFunction(/** ?function(DragEnterEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor = fn;
 }
 
 m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(/** DragEnterEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEnterHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEnterHandler$$LambdaAdaptor');

DragEnterHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEnterHandler$$LambdaAdaptor.js.map
