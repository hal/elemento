goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeUriCastCheck {
 /** @return {SuppressIsSafeUriCastCheck} */
 static $adapt(/** ?function():Class<?> */ fn) {
  SuppressIsSafeUriCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SuppressIsSafeUriCastCheck.$clinit = () =>{};
  SuppressIsSafeUriCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsSafeUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck');

SuppressIsSafeUriCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsSafeUriCastCheck));

exports = SuppressIsSafeUriCastCheck; 
//# sourceMappingURL=SuppressIsSafeUriCastCheck.js.map
