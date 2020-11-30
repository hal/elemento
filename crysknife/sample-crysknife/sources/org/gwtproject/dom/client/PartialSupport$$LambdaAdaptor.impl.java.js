goog.module('org.gwtproject.dom.client.PartialSupport.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PartialSupport = goog.require('org.gwtproject.dom.client.PartialSupport$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {PartialSupport}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_dom_client_PartialSupport_$LambdaAdaptor;
  this.$ctor__org_gwtproject_dom_client_PartialSupport_$LambdaAdaptor__org_gwtproject_dom_client_PartialSupport_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_dom_client_PartialSupport_$LambdaAdaptor__org_gwtproject_dom_client_PartialSupport_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_dom_client_PartialSupport_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_dom_client_PartialSupport_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.dom.client.PartialSupport$$LambdaAdaptor');

PartialSupport.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=PartialSupport$$LambdaAdaptor.js.map
