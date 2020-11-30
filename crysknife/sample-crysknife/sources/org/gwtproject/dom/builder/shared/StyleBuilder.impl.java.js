goog.module('org.gwtproject.dom.builder.shared.StyleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<StyleBuilder>}
 */
class StyleBuilder {
 /** @abstract @return {StyleBuilder} */
 m_cssText__java_lang_String(/** ?string */ cssText) {}
 /** @abstract @return {StyleBuilder} */
 m_disabled__() {}
 /** @abstract @override @return {StyleBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {}
 /** @abstract @return {StyleBuilder} */
 m_media__java_lang_String(/** ?string */ media) {}
 /** @abstract @override @return {StyleBuilder} */
 m_text__java_lang_String(/** ?string */ text) {}
 /** @abstract @return {StyleBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 
 static $clinit() {
  StyleBuilder.$clinit = () =>{};
  StyleBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_StyleBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_StyleBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleBuilder, 'org.gwtproject.dom.builder.shared.StyleBuilder');

StyleBuilder.$markImplementor(/** @type {Function} */ (StyleBuilder));

/**@const {?string}*/
StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder = "Style elements do not support setting inner html or inner text.  Use cssText() instead.";

exports = StyleBuilder; 
//# sourceMappingURL=StyleBuilder.js.map
