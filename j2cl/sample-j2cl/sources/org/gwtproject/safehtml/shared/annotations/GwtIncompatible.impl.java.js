goog.module('org.gwtproject.safehtml.shared.annotations.GwtIncompatible$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.GwtIncompatible.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GwtIncompatible {
 /** @return {GwtIncompatible} */
 static $adapt(/** ?function():Class<?> */ fn) {
  GwtIncompatible.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  GwtIncompatible.$clinit = () =>{};
  GwtIncompatible.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_GwtIncompatible = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_GwtIncompatible;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.GwtIncompatible.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GwtIncompatible, 'org.gwtproject.safehtml.shared.annotations.GwtIncompatible');

GwtIncompatible.$markImplementor(/** @type {Function} */ (GwtIncompatible));

exports = GwtIncompatible; 
//# sourceMappingURL=GwtIncompatible.js.map
