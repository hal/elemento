goog.module('org.gwtproject.dom.builder.shared.DListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<DListBuilder>}
 */
class DListBuilder {
 
 static $clinit() {
  DListBuilder.$clinit = () =>{};
  DListBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_DListBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_DListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DListBuilder, 'org.gwtproject.dom.builder.shared.DListBuilder');

DListBuilder.$markImplementor(/** @type {Function} */ (DListBuilder));

exports = DListBuilder; 
//# sourceMappingURL=DListBuilder.js.map
