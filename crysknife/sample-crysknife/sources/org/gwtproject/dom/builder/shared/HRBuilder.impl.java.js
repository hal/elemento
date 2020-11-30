goog.module('org.gwtproject.dom.builder.shared.HRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<HRBuilder>}
 */
class HRBuilder {
 
 static $clinit() {
  HRBuilder.$clinit = () =>{};
  HRBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_HRBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_HRBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HRBuilder, 'org.gwtproject.dom.builder.shared.HRBuilder');

HRBuilder.$markImplementor(/** @type {Function} */ (HRBuilder));

exports = HRBuilder; 
//# sourceMappingURL=HRBuilder.js.map
