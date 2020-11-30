goog.module('org.gwtproject.regexp.shared.SplitResult$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SplitResult {
 /** @abstract @return {?string} */
 m_get__int(/** number */ index) {}
 /** @abstract @return {number} */
 m_length__() {}
 /** @abstract */
 m_set__int__java_lang_String(/** number */ index, /** ?string */ value) {}
 
 static $clinit() {
  SplitResult.$clinit = () =>{};
  SplitResult.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_regexp_shared_SplitResult = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_SplitResult;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SplitResult, 'org.gwtproject.regexp.shared.SplitResult');

SplitResult.$markImplementor(/** @type {Function} */ (SplitResult));

exports = SplitResult; 
//# sourceMappingURL=SplitResult.js.map
