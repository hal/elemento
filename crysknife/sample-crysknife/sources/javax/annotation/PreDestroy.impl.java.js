goog.module('javax.annotation.PreDestroy$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.annotation.PreDestroy.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PreDestroy {
 /** @return {PreDestroy} */
 static $adapt(/** ?function():Class<?> */ fn) {
  PreDestroy.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PreDestroy.$clinit = () =>{};
  PreDestroy.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_annotation_PreDestroy = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_annotation_PreDestroy;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.annotation.PreDestroy.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PreDestroy, 'javax.annotation.PreDestroy');

PreDestroy.$markImplementor(/** @type {Function} */ (PreDestroy));

exports = PreDestroy; 
//# sourceMappingURL=PreDestroy.js.map
