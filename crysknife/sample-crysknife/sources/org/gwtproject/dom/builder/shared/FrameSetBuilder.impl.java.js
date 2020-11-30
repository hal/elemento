goog.module('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FrameSetBuilder>}
 */
class FrameSetBuilder {
 /** @abstract @return {FrameSetBuilder} */
 m_cols__java_lang_String(/** ?string */ cols) {}
 /** @abstract @return {FrameSetBuilder} */
 m_rows__java_lang_String(/** ?string */ rows) {}
 
 static $clinit() {
  FrameSetBuilder.$clinit = () =>{};
  FrameSetBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_FrameSetBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FrameSetBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FrameSetBuilder, 'org.gwtproject.dom.builder.shared.FrameSetBuilder');

FrameSetBuilder.$markImplementor(/** @type {Function} */ (FrameSetBuilder));

exports = FrameSetBuilder; 
//# sourceMappingURL=FrameSetBuilder.js.map
