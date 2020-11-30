goog.module('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeStyles = goog.require('org.gwtproject.safecss.shared.SafeStyles$impl');

/**
 * @implements {SafeStyles}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor__org_gwtproject_safecss_shared_SafeStyles_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor__org_gwtproject_safecss_shared_SafeStyles_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_asString__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safecss_shared_SafeStyles_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safecss.shared.SafeStyles$$LambdaAdaptor');

SafeStyles.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SafeStyles$$LambdaAdaptor.js.map
