goog.module('javax.enterprise.inject.Default.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Default = goog.require('javax.enterprise.inject.Default$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Default}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_enterprise_inject_Default_$LambdaAdaptor;
  this.$ctor__javax_enterprise_inject_Default_$LambdaAdaptor__javax_enterprise_inject_Default_$JsFunction(fn);
 }
 
 $ctor__javax_enterprise_inject_Default_$LambdaAdaptor__javax_enterprise_inject_Default_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_enterprise_inject_Default_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_enterprise_inject_Default_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.enterprise.inject.Default$$LambdaAdaptor');

Default.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Default$$LambdaAdaptor.js.map
