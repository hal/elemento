goog.module('org.gwtproject.safecss.shared.annotations.VisibleForTesting.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const VisibleForTesting = goog.require('org.gwtproject.safecss.shared.annotations.VisibleForTesting$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {VisibleForTesting}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$LambdaAdaptor__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$LambdaAdaptor__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safecss_shared_annotations_VisibleForTesting_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safecss.shared.annotations.VisibleForTesting$$LambdaAdaptor');

VisibleForTesting.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=VisibleForTesting$$LambdaAdaptor.js.map
