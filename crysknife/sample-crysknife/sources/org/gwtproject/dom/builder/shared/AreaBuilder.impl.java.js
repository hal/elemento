goog.module('org.gwtproject.dom.builder.shared.AreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<AreaBuilder>}
 */
class AreaBuilder {
 /** @abstract @return {AreaBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {AreaBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {}
 /** @abstract @return {AreaBuilder} */
 m_coords__java_lang_String(/** ?string */ coords) {}
 /** @abstract @return {AreaBuilder} */
 m_href__java_lang_String(/** ?string */ href) {}
 /** @abstract @return {AreaBuilder} */
 m_shape__java_lang_String(/** ?string */ shape) {}
 /** @abstract @return {AreaBuilder} */
 m_target__java_lang_String(/** ?string */ target) {}
 
 static $clinit() {
  AreaBuilder.$clinit = () =>{};
  AreaBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_AreaBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_AreaBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AreaBuilder, 'org.gwtproject.dom.builder.shared.AreaBuilder');

AreaBuilder.$markImplementor(/** @type {Function} */ (AreaBuilder));

exports = AreaBuilder; 
//# sourceMappingURL=AreaBuilder.js.map
