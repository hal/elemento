goog.module('javax.enterprise.context.NormalScope$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class NormalScope {
 /** @abstract @return {boolean} */
 m_passivating__() {}
 
 static $clinit() {
  NormalScope.$clinit = () =>{};
  NormalScope.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_context_NormalScope = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_NormalScope;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NormalScope, 'javax.enterprise.context.NormalScope');

NormalScope.$markImplementor(/** @type {Function} */ (NormalScope));

exports = NormalScope; 
//# sourceMappingURL=NormalScope.js.map
