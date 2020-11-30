goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeHtmlCastCheck {
 /** @return {SuppressIsSafeHtmlCastCheck} */
 static $adapt(/** ?function():Class<?> */ fn) {
  SuppressIsSafeHtmlCastCheck.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SuppressIsSafeHtmlCastCheck.$clinit = () =>{};
  SuppressIsSafeHtmlCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuppressIsSafeHtmlCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck');

SuppressIsSafeHtmlCastCheck.$markImplementor(/** @type {Function} */ (SuppressIsSafeHtmlCastCheck));

exports = SuppressIsSafeHtmlCastCheck; 
//# sourceMappingURL=SuppressIsSafeHtmlCastCheck.js.map
