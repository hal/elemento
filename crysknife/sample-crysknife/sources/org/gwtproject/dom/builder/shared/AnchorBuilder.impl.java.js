goog.module('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<AnchorBuilder>}
 */
class AnchorBuilder {
 /** @abstract @return {AnchorBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {AnchorBuilder} */
 m_href__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ href) {}
 /** @abstract @return {AnchorBuilder} */
 m_href__java_lang_String(/** ?string */ href) {}
 /** @abstract @return {AnchorBuilder} */
 m_hreflang__java_lang_String(/** ?string */ hreflang) {}
 /** @abstract @return {AnchorBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {AnchorBuilder} */
 m_rel__java_lang_String(/** ?string */ rel) {}
 /** @abstract @return {AnchorBuilder} */
 m_target__java_lang_String(/** ?string */ target) {}
 /** @abstract @return {AnchorBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 
 static $clinit() {
  AnchorBuilder.$clinit = () =>{};
  AnchorBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_AnchorBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_AnchorBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AnchorBuilder, 'org.gwtproject.dom.builder.shared.AnchorBuilder');

AnchorBuilder.$markImplementor(/** @type {Function} */ (AnchorBuilder));

exports = AnchorBuilder; 
//# sourceMappingURL=AnchorBuilder.js.map
