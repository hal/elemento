goog.module('javax.inject.Singleton$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Singleton.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Singleton {
 /** @return {Singleton} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Singleton.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Singleton.$clinit = () =>{};
  Singleton.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_inject_Singleton = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Singleton;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Singleton.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Singleton, 'javax.inject.Singleton');

Singleton.$markImplementor(/** @type {Function} */ (Singleton));

exports = Singleton; 
//# sourceMappingURL=Singleton.js.map
