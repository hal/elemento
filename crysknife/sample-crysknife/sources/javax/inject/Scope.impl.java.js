goog.module('javax.inject.Scope$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Scope.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Scope {
 /** @return {Scope} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Scope.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Scope.$clinit = () =>{};
  Scope.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_inject_Scope = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Scope;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Scope.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Scope, 'javax.inject.Scope');

Scope.$markImplementor(/** @type {Function} */ (Scope));

exports = Scope; 
//# sourceMappingURL=Scope.js.map
