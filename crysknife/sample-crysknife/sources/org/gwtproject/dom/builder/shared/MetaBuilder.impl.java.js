goog.module('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<MetaBuilder>}
 */
class MetaBuilder {
 /** @abstract @return {MetaBuilder} */
 m_content__java_lang_String(/** ?string */ content) {}
 /** @abstract @return {MetaBuilder} */
 m_httpEquiv__java_lang_String(/** ?string */ httpEquiv) {}
 /** @abstract @return {MetaBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 
 static $clinit() {
  MetaBuilder.$clinit = () =>{};
  MetaBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_MetaBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MetaBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MetaBuilder, 'org.gwtproject.dom.builder.shared.MetaBuilder');

MetaBuilder.$markImplementor(/** @type {Function} */ (MetaBuilder));

exports = MetaBuilder; 
//# sourceMappingURL=MetaBuilder.js.map
