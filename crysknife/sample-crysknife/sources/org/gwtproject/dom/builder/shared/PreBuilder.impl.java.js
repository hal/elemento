goog.module('org.gwtproject.dom.builder.shared.PreBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<PreBuilder>}
 */
class PreBuilder {
 
 static $clinit() {
  PreBuilder.$clinit = () =>{};
  PreBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_PreBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_PreBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PreBuilder, 'org.gwtproject.dom.builder.shared.PreBuilder');

PreBuilder.$markImplementor(/** @type {Function} */ (PreBuilder));

exports = PreBuilder; 
//# sourceMappingURL=PreBuilder.js.map
