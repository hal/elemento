goog.module('org.gwtproject.regexp.shared.MatchResult$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class MatchResult {
 /** @abstract @return {?string} */
 m_getGroup__int(/** number */ index) {}
 /** @abstract @return {number} */
 m_getGroupCount__() {}
 /** @abstract @return {number} */
 m_getIndex__() {}
 /** @abstract @return {?string} */
 m_getInput__() {}
 
 static $clinit() {
  MatchResult.$clinit = () =>{};
  MatchResult.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_regexp_shared_MatchResult = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_regexp_shared_MatchResult;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MatchResult, 'org.gwtproject.regexp.shared.MatchResult');

MatchResult.$markImplementor(/** @type {Function} */ (MatchResult));

exports = MatchResult; 
//# sourceMappingURL=MatchResult.js.map
