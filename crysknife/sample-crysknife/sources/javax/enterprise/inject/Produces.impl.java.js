goog.module('javax.enterprise.inject.Produces$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.inject.Produces.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Produces {
 /** @return {Produces} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Produces.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Produces.$clinit = () =>{};
  Produces.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_inject_Produces = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Produces;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.inject.Produces.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Produces, 'javax.enterprise.inject.Produces');

Produces.$markImplementor(/** @type {Function} */ (Produces));

exports = Produces; 
//# sourceMappingURL=Produces.js.map
