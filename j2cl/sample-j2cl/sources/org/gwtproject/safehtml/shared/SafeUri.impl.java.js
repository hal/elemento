goog.module('org.gwtproject.safehtml.shared.SafeUri$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SafeUri {
 /** @abstract @return {?string} */
 m_asString__() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {boolean} */
 equals(/** * */ anObject) {}
 /** @return {SafeUri} */
 static $adapt(/** ?function():?string */ fn) {
  SafeUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SafeUri.$clinit = () =>{};
  SafeUri.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_SafeUri = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeUri;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SafeUri, 'org.gwtproject.safehtml.shared.SafeUri');

SafeUri.$markImplementor(/** @type {Function} */ (SafeUri));

exports = SafeUri; 
//# sourceMappingURL=SafeUri.js.map
