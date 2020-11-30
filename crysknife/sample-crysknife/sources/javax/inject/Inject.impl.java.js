goog.module('javax.inject.Inject$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Inject.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Inject {
 /** @return {Inject} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Inject.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Inject.$clinit = () =>{};
  Inject.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_inject_Inject = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Inject;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Inject.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Inject, 'javax.inject.Inject');

Inject.$markImplementor(/** @type {Function} */ (Inject));

exports = Inject; 
//# sourceMappingURL=Inject.js.map
