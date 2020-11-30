goog.module('javax.inject.Scope.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Scope = goog.require('javax.inject.Scope$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Scope}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_inject_Scope_$LambdaAdaptor;
  this.$ctor__javax_inject_Scope_$LambdaAdaptor__javax_inject_Scope_$JsFunction(fn);
 }
 
 $ctor__javax_inject_Scope_$LambdaAdaptor__javax_inject_Scope_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_inject_Scope_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_inject_Scope_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.inject.Scope$$LambdaAdaptor');

Scope.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Scope$$LambdaAdaptor.js.map
