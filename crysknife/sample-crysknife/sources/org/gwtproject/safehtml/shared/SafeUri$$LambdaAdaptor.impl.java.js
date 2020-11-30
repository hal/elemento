goog.module('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeUri = goog.require('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {SafeUri}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_$$fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeUri_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeUri_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_asString__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.SafeUri$$LambdaAdaptor');

SafeUri.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SafeUri$$LambdaAdaptor.js.map
