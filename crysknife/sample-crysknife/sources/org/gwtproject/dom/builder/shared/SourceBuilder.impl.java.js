goog.module('org.gwtproject.dom.builder.shared.SourceBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SourceBuilder>}
 */
class SourceBuilder {
 /** @abstract @return {SourceBuilder} */
 m_src__java_lang_String(/** ?string */ url) {}
 /** @abstract @return {SourceBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 
 static $clinit() {
  SourceBuilder.$clinit = () =>{};
  SourceBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_SourceBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SourceBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SourceBuilder, 'org.gwtproject.dom.builder.shared.SourceBuilder');

SourceBuilder.$markImplementor(/** @type {Function} */ (SourceBuilder));

exports = SourceBuilder; 
//# sourceMappingURL=SourceBuilder.js.map
