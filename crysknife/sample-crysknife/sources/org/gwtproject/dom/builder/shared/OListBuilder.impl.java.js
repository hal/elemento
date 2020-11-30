goog.module('org.gwtproject.dom.builder.shared.OListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<OListBuilder>}
 */
class OListBuilder {
 
 static $clinit() {
  OListBuilder.$clinit = () =>{};
  OListBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_OListBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_OListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OListBuilder, 'org.gwtproject.dom.builder.shared.OListBuilder');

OListBuilder.$markImplementor(/** @type {Function} */ (OListBuilder));

exports = OListBuilder; 
//# sourceMappingURL=OListBuilder.js.map
