goog.module('org.gwtproject.safecss.shared.annotations.VisibleForTesting$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safecss.shared.annotations.VisibleForTesting.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class VisibleForTesting {
 /** @return {VisibleForTesting} */
 static $adapt(/** ?function():Class<?> */ fn) {
  VisibleForTesting.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  VisibleForTesting.$clinit = () =>{};
  VisibleForTesting.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safecss_shared_annotations_VisibleForTesting = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safecss_shared_annotations_VisibleForTesting;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safecss.shared.annotations.VisibleForTesting.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(VisibleForTesting, 'org.gwtproject.safecss.shared.annotations.VisibleForTesting');

VisibleForTesting.$markImplementor(/** @type {Function} */ (VisibleForTesting));

exports = VisibleForTesting; 
//# sourceMappingURL=VisibleForTesting.js.map
