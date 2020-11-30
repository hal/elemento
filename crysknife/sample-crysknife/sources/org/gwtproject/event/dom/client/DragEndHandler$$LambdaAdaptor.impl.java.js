goog.module('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DragEndHandler = goog.require('org.gwtproject.event.dom.client.DragEndHandler$impl');

let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');

/**
 * @implements {DragEndHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(DragEndEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(DragEndEvent):void}*/
  this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEndHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_DragEndHandler_$JsFunction(/** ?function(DragEndEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor = fn;
 }
 
 m_onDragEnd__org_gwtproject_event_dom_client_DragEndEvent(/** DragEndEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_DragEndHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.DragEndHandler$$LambdaAdaptor');

DragEndHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DragEndHandler$$LambdaAdaptor.js.map
