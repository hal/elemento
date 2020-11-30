goog.module('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasNativeEvent = goog.require('org.gwtproject.event.dom.client.HasNativeEvent$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');

/**
 * @implements {HasNativeEvent}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Object */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Object}*/
  this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor__org_gwtproject_event_dom_client_HasNativeEvent_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor__org_gwtproject_event_dom_client_HasNativeEvent_$JsFunction(/** ?function():Object */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor = fn;
 }
 /** @return {Object} */
 m_getNativeEvent__() {
  let /** ?function():Object */ $function;
  return ($function = this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.HasNativeEvent$$LambdaAdaptor');

HasNativeEvent.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasNativeEvent$$LambdaAdaptor.js.map
