goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsTrustedResourceUriCastCheck {
 /** @return {SuppressIsTrustedResourceUriCastCheck} */
 static $adapt(/** ?function():Class<?> */ fn) {
  SuppressIsTrustedResourceUriCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SuppressIsTrustedResourceUriCastCheck.$clinit = () =>{};
  SuppressIsTrustedResourceUriCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsTrustedResourceUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck');

SuppressIsTrustedResourceUriCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsTrustedResourceUriCastCheck));

exports = SuppressIsTrustedResourceUriCastCheck; 
//# sourceMappingURL=SuppressIsTrustedResourceUriCastCheck.js.map
