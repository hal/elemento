goog.module('org.gwtproject.regexp.shared.GwtIncompatible$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.regexp.shared.GwtIncompatible.$LambdaAdaptor$impl');

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
  ctor.prototype.$implements__org_gwtproject_regexp_shared_GwtIncompatible = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_GwtIncompatible;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.regexp.shared.GwtIncompatible.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GwtIncompatible, 'org.gwtproject.regexp.shared.GwtIncompatible');

GwtIncompatible.$markImplementor(/** @type {Function} */ (GwtIncompatible));

exports = GwtIncompatible; 
//# sourceMappingURL=GwtIncompatible.js.map
