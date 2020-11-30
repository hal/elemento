goog.module('org.gwtproject.dom.builder.shared.LegendBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LegendBuilder>}
 */
class LegendBuilder {
 /** @abstract @return {LegendBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 
 static $clinit() {
  LegendBuilder.$clinit = () =>{};
  LegendBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_LegendBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LegendBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LegendBuilder, 'org.gwtproject.dom.builder.shared.LegendBuilder');

LegendBuilder.$markImplementor(/** @type {Function} */ (LegendBuilder));

exports = LegendBuilder; 
//# sourceMappingURL=LegendBuilder.js.map
