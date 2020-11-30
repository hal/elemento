goog.module('org.gwtproject.dom.builder.shared.FormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FormBuilder>}
 */
class FormBuilder {
 /** @abstract @return {FormBuilder} */
 m_acceptCharset__java_lang_String(/** ?string */ acceptCharset) {}
 /** @abstract @return {FormBuilder} */
 m_action__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ action) {}
 /** @abstract @return {FormBuilder} */
 m_action__java_lang_String(/** ?string */ action) {}
 /** @abstract @return {FormBuilder} */
 m_enctype__java_lang_String(/** ?string */ enctype) {}
 /** @abstract @return {FormBuilder} */
 m_method__java_lang_String(/** ?string */ method) {}
 /** @abstract @return {FormBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {FormBuilder} */
 m_target__java_lang_String(/** ?string */ target) {}
 
 static $clinit() {
  FormBuilder.$clinit = () =>{};
  FormBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_FormBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FormBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormBuilder, 'org.gwtproject.dom.builder.shared.FormBuilder');

FormBuilder.$markImplementor(/** @type {Function} */ (FormBuilder));

exports = FormBuilder; 
//# sourceMappingURL=FormBuilder.js.map
