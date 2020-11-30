goog.module('org.gwtproject.dom.builder.shared.OptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<OptionBuilder>}
 */
class OptionBuilder {
 /** @abstract @return {OptionBuilder} */
 m_defaultSelected__() {}
 /** @abstract @return {OptionBuilder} */
 m_disabled__() {}
 /** @abstract @return {OptionBuilder} */
 m_label__java_lang_String(/** ?string */ label) {}
 /** @abstract @return {OptionBuilder} */
 m_selected__() {}
 /** @abstract @return {OptionBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  OptionBuilder.$clinit = () =>{};
  OptionBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_OptionBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_OptionBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OptionBuilder, 'org.gwtproject.dom.builder.shared.OptionBuilder');

OptionBuilder.$markImplementor(/** @type {Function} */ (OptionBuilder));

exports = OptionBuilder; 
//# sourceMappingURL=OptionBuilder.js.map
