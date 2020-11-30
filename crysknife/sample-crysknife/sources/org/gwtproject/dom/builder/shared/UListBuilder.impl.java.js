goog.module('org.gwtproject.dom.builder.shared.UListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<UListBuilder>}
 */
class UListBuilder {
 
 static $clinit() {
  UListBuilder.$clinit = () =>{};
  UListBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_UListBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_UListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UListBuilder, 'org.gwtproject.dom.builder.shared.UListBuilder');

UListBuilder.$markImplementor(/** @type {Function} */ (UListBuilder));

exports = UListBuilder; 
//# sourceMappingURL=UListBuilder.js.map
