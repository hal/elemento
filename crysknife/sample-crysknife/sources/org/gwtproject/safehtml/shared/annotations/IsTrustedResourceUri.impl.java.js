goog.module('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsTrustedResourceUri {
 /** @return {IsTrustedResourceUri} */
 static $adapt(/** ?function():Class<?> */ fn) {
  IsTrustedResourceUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsTrustedResourceUri.$clinit = () =>{};
  IsTrustedResourceUri.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsTrustedResourceUri, 'org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri');

IsTrustedResourceUri.$markImplementor(/** @type {Function} */ (IsTrustedResourceUri));

exports = IsTrustedResourceUri; 
//# sourceMappingURL=IsTrustedResourceUri.js.map
