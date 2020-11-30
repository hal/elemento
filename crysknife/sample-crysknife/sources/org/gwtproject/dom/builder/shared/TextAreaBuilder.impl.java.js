goog.module('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TextAreaBuilder>}
 */
class TextAreaBuilder {
 /** @abstract @return {TextAreaBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {TextAreaBuilder} */
 m_cols__int(/** number */ cols) {}
 /** @abstract @return {TextAreaBuilder} */
 m_defaultValue__java_lang_String(/** ?string */ defaultValue) {}
 /** @abstract @return {TextAreaBuilder} */
 m_disabled__() {}
 /** @abstract @return {TextAreaBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {TextAreaBuilder} */
 m_readOnly__() {}
 /** @abstract @return {TextAreaBuilder} */
 m_rows__int(/** number */ rows) {}
 /** @abstract @return {TextAreaBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  TextAreaBuilder.$clinit = () =>{};
  TextAreaBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TextAreaBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TextAreaBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextAreaBuilder, 'org.gwtproject.dom.builder.shared.TextAreaBuilder');

TextAreaBuilder.$markImplementor(/** @type {Function} */ (TextAreaBuilder));

/**@const {?string}*/
TextAreaBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TextAreaBuilder = "TextArea elements do not support setting inner html.  Use text() instead.";

exports = TextAreaBuilder; 
//# sourceMappingURL=TextAreaBuilder.js.map
