goog.module('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<QuoteBuilder>}
 */
class QuoteBuilder {
 /** @abstract @return {QuoteBuilder} */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ cite) {}
 /** @abstract @return {QuoteBuilder} */
 m_cite__java_lang_String(/** ?string */ cite) {}
 
 static $clinit() {
  QuoteBuilder.$clinit = () =>{};
  QuoteBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_QuoteBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_QuoteBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(QuoteBuilder, 'org.gwtproject.dom.builder.shared.QuoteBuilder');

QuoteBuilder.$markImplementor(/** @type {Function} */ (QuoteBuilder));

exports = QuoteBuilder; 
//# sourceMappingURL=QuoteBuilder.js.map
