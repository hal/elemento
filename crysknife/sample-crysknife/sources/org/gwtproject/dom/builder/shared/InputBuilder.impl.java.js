goog.module('org.gwtproject.dom.builder.shared.InputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<InputBuilder>}
 */
class InputBuilder {
 /** @abstract @return {InputBuilder} */
 m_accept__java_lang_String(/** ?string */ accept) {}
 /** @abstract @return {InputBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {InputBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {}
 /** @abstract @return {InputBuilder} */
 m_checked__() {}
 /** @abstract @return {InputBuilder} */
 m_defaultChecked__() {}
 /** @abstract @return {InputBuilder} */
 m_defaultValue__java_lang_String(/** ?string */ defaultValue) {}
 /** @abstract @return {InputBuilder} */
 m_disabled__() {}
 /** @abstract @return {InputBuilder} */
 m_maxLength__int(/** number */ maxLength) {}
 /** @abstract @return {InputBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {InputBuilder} */
 m_readOnly__() {}
 /** @abstract @return {InputBuilder} */
 m_size__int(/** number */ size) {}
 /** @abstract @return {InputBuilder} */
 m_src__java_lang_String(/** ?string */ src) {}
 /** @abstract @return {InputBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  InputBuilder.$clinit = () =>{};
  InputBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_InputBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_InputBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InputBuilder, 'org.gwtproject.dom.builder.shared.InputBuilder');

InputBuilder.$markImplementor(/** @type {Function} */ (InputBuilder));

exports = InputBuilder; 
//# sourceMappingURL=InputBuilder.js.map
