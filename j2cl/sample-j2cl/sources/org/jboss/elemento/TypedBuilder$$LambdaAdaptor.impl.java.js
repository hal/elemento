goog.module('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @template T, B
 * @implements {TypedBuilder<T, B>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():B */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():B}*/
  this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction(/** ?function():B */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor = fn;
 }
 /** @return {B} */
 m_that__() {
  let /** ?function():B */ $function;
  return ($function = this.f_$$fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.TypedBuilder$$LambdaAdaptor');

TypedBuilder.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TypedBuilder$$LambdaAdaptor.js.map
