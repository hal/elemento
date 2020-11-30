goog.module('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEnterClickHandler = goog.require('org.gwtproject.event.dom.client.DragEnterClickHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @implements {DragEnterClickHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragEnterEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragEnterEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterClickHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEnterClickHandler_$JsFunction(/** ?function(DragEnterEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor = fn;
 }
 
 m_onDoubleClick__org_gwtproject_event_dom_client_DragEnterEvent(/** DragEnterEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEnterClickHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEnterClickHandler$$LambdaAdaptor');

DragEnterClickHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEnterClickHandler$$LambdaAdaptor.js.map
