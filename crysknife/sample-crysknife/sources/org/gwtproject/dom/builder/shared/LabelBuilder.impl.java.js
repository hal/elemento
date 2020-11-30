goog.module('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LabelBuilder>}
 */
class LabelBuilder {
 /** @abstract @return {LabelBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {LabelBuilder} */
 m_htmlFor__java_lang_String(/** ?string */ htmlFor) {}
 
 static $clinit() {
  LabelBuilder.$clinit = () =>{};
  LabelBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_LabelBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LabelBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LabelBuilder, 'org.gwtproject.dom.builder.shared.LabelBuilder');

LabelBuilder.$markImplementor(/** @type {Function} */ (LabelBuilder));

exports = LabelBuilder; 
//# sourceMappingURL=LabelBuilder.js.map
