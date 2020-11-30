goog.module('io.crysknife.annotation.Application$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('io.crysknife.annotation.Application.$LambdaAdaptor$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Application {
 /** @return {Application} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Application.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Application.$clinit = () =>{};
  Application.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_annotation_Application = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_annotation_Application;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('io.crysknife.annotation.Application.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Application, 'io.crysknife.annotation.Application');

Application.$markImplementor(/** @type {Function} */ (Application));

exports = Application; 
//# sourceMappingURL=Application.js.map
