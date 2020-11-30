goog.module('org.gwtproject.safecss.shared.SafeStyles$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Serializable}
 */
class SafeStyles {
 /** @abstract @return {?string} */
 m_asString__() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {boolean} */
 equals(/** * */ anObject) {}
 /** @return {SafeStyles} */
 static $adapt(/** ?function():?string */ fn) {
  SafeStyles.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SafeStyles.$clinit = () =>{};
  SafeStyles.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Serializable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safecss_shared_SafeStyles = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safecss_shared_SafeStyles;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safecss.shared.SafeStyles.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeStyles, 'org.gwtproject.safecss.shared.SafeStyles');

SafeStyles.$markImplementor(/** @type {Function} */ (SafeStyles));

exports = SafeStyles; 
//# sourceMappingURL=SafeStyles.js.map
