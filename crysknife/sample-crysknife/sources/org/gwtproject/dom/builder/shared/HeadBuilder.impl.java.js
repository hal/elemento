goog.module('org.gwtproject.dom.builder.shared.HeadBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<HeadBuilder>}
 */
class HeadBuilder {
 
 static $clinit() {
  HeadBuilder.$clinit = () =>{};
  HeadBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_HeadBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_HeadBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeadBuilder, 'org.gwtproject.dom.builder.shared.HeadBuilder');

HeadBuilder.$markImplementor(/** @type {Function} */ (HeadBuilder));

exports = HeadBuilder; 
//# sourceMappingURL=HeadBuilder.js.map
