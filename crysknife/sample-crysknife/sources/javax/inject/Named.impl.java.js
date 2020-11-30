goog.module('javax.inject.Named$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Named {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Named.$clinit = () =>{};
  Named.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_inject_Named = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Named;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Named, 'javax.inject.Named');

Named.$markImplementor(/** @type {Function} */ (Named));

exports = Named; 
//# sourceMappingURL=Named.js.map
