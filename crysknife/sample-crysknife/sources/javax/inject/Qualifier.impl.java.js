goog.module('javax.inject.Qualifier$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Qualifier.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Qualifier {
 /** @return {Qualifier} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Qualifier.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Qualifier.$clinit = () =>{};
  Qualifier.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_inject_Qualifier = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Qualifier;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Qualifier.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Qualifier, 'javax.inject.Qualifier');

Qualifier.$markImplementor(/** @type {Function} */ (Qualifier));

exports = Qualifier; 
//# sourceMappingURL=Qualifier.js.map
