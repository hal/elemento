goog.module('javax.enterprise.context.ApplicationScoped.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ApplicationScoped = goog.require('javax.enterprise.context.ApplicationScoped$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {ApplicationScoped}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_enterprise_context_ApplicationScoped_$LambdaAdaptor;
  this.$ctor__javax_enterprise_context_ApplicationScoped_$LambdaAdaptor__javax_enterprise_context_ApplicationScoped_$JsFunction(fn);
 }
 
 $ctor__javax_enterprise_context_ApplicationScoped_$LambdaAdaptor__javax_enterprise_context_ApplicationScoped_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_enterprise_context_ApplicationScoped_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_enterprise_context_ApplicationScoped_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.enterprise.context.ApplicationScoped$$LambdaAdaptor');

ApplicationScoped.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ApplicationScoped$$LambdaAdaptor.js.map
