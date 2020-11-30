goog.module('org.gwtproject.dom.builder.shared.BRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BRBuilder>}
 */
class BRBuilder {
 
 static $clinit() {
  BRBuilder.$clinit = () =>{};
  BRBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_BRBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BRBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BRBuilder, 'org.gwtproject.dom.builder.shared.BRBuilder');

BRBuilder.$markImplementor(/** @type {Function} */ (BRBuilder));

exports = BRBuilder; 
//# sourceMappingURL=BRBuilder.js.map
