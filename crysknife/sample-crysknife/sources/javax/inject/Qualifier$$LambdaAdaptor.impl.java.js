goog.module('javax.inject.Qualifier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Qualifier = goog.require('javax.inject.Qualifier$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Qualifier}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_inject_Qualifier_$LambdaAdaptor;
  this.$ctor__javax_inject_Qualifier_$LambdaAdaptor__javax_inject_Qualifier_$JsFunction(fn);
 }
 
 $ctor__javax_inject_Qualifier_$LambdaAdaptor__javax_inject_Qualifier_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_inject_Qualifier_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_inject_Qualifier_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.inject.Qualifier$$LambdaAdaptor');

Qualifier.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Qualifier$$LambdaAdaptor.js.map
