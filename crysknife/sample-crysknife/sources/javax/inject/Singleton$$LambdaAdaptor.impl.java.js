goog.module('javax.inject.Singleton.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Singleton = goog.require('javax.inject.Singleton$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Singleton}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_inject_Singleton_$LambdaAdaptor;
  this.$ctor__javax_inject_Singleton_$LambdaAdaptor__javax_inject_Singleton_$JsFunction(fn);
 }
 
 $ctor__javax_inject_Singleton_$LambdaAdaptor__javax_inject_Singleton_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_inject_Singleton_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_inject_Singleton_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.inject.Singleton$$LambdaAdaptor');

Singleton.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Singleton$$LambdaAdaptor.js.map
