goog.module('org.gwtproject.regexp.shared.GwtIncompatible.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const GwtIncompatible = goog.require('org.gwtproject.regexp.shared.GwtIncompatible$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {GwtIncompatible}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_regexp_shared_GwtIncompatible_$LambdaAdaptor;
  this.$ctor__org_gwtproject_regexp_shared_GwtIncompatible_$LambdaAdaptor__org_gwtproject_regexp_shared_GwtIncompatible_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_regexp_shared_GwtIncompatible_$LambdaAdaptor__org_gwtproject_regexp_shared_GwtIncompatible_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_regexp_shared_GwtIncompatible_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_regexp_shared_GwtIncompatible_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.regexp.shared.GwtIncompatible$$LambdaAdaptor');

GwtIncompatible.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=GwtIncompatible$$LambdaAdaptor.js.map
