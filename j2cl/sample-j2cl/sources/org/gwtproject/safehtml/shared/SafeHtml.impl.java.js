goog.module('org.gwtproject.safehtml.shared.SafeHtml$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Serializable}
 */
class SafeHtml {
 /** @abstract @return {?string} */
 m_asString__() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {boolean} */
 equals(/** * */ anObject) {}
 /** @return {SafeHtml} */
 static $adapt(/** ?function():?string */ fn) {
  SafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SafeHtml.$clinit = () =>{};
  SafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Serializable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_SafeHtml = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeHtml;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeHtml, 'org.gwtproject.safehtml.shared.SafeHtml');

SafeHtml.$markImplementor(/** @type {Function} */ (SafeHtml));

exports = SafeHtml; 
//# sourceMappingURL=SafeHtml.js.map
