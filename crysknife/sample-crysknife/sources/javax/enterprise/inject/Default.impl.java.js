goog.module('javax.enterprise.inject.Default$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.inject.Default.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Default {
 /** @return {Default} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Default.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Default.$clinit = () =>{};
  Default.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_inject_Default = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Default;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.inject.Default.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Default, 'javax.enterprise.inject.Default');

Default.$markImplementor(/** @type {Function} */ (Default));

exports = Default; 
//# sourceMappingURL=Default.js.map
