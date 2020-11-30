goog.module('org.gwtproject.safehtml.shared.annotations.IsSafeUri$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.IsSafeUri.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsSafeUri {
 /** @return {IsSafeUri} */
 static $adapt(/** ?function():Class<?> */ fn) {
  IsSafeUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsSafeUri.$clinit = () =>{};
  IsSafeUri.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeUri = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeUri;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.IsSafeUri.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsSafeUri, 'org.gwtproject.safehtml.shared.annotations.IsSafeUri');

IsSafeUri.$markImplementor(/** @type {Function} */ (IsSafeUri));

exports = IsSafeUri; 
//# sourceMappingURL=IsSafeUri.js.map
