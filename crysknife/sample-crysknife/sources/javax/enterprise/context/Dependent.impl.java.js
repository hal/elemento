goog.module('javax.enterprise.context.Dependent$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.context.Dependent.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Dependent {
 /** @return {Dependent} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Dependent.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Dependent.$clinit = () =>{};
  Dependent.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_context_Dependent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_Dependent;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.context.Dependent.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Dependent, 'javax.enterprise.context.Dependent');

Dependent.$markImplementor(/** @type {Function} */ (Dependent));

exports = Dependent; 
//# sourceMappingURL=Dependent.js.map
