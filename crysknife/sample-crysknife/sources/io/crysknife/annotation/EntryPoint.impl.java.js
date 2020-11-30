goog.module('io.crysknife.annotation.EntryPoint$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('io.crysknife.annotation.EntryPoint.$LambdaAdaptor$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EntryPoint {
 /** @return {EntryPoint} */
 static $adapt(/** ?function():Class<?> */ fn) {
  EntryPoint.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EntryPoint.$clinit = () =>{};
  EntryPoint.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_annotation_EntryPoint = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_annotation_EntryPoint;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('io.crysknife.annotation.EntryPoint.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EntryPoint, 'io.crysknife.annotation.EntryPoint');

EntryPoint.$markImplementor(/** @type {Function} */ (EntryPoint));

exports = EntryPoint; 
//# sourceMappingURL=EntryPoint.js.map
