goog.module('org.gwtproject.dom.builder.shared.LinkBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LinkBuilder>}
 */
class LinkBuilder {
 /** @abstract @return {LinkBuilder} */
 m_disabled__() {}
 /** @abstract @return {LinkBuilder} */
 m_href__java_lang_String(/** ?string */ href) {}
 /** @abstract @return {LinkBuilder} */
 m_hreflang__java_lang_String(/** ?string */ hreflang) {}
 /** @abstract @return {LinkBuilder} */
 m_media__java_lang_String(/** ?string */ media) {}
 /** @abstract @return {LinkBuilder} */
 m_rel__java_lang_String(/** ?string */ rel) {}
 /** @abstract @return {LinkBuilder} */
 m_target__java_lang_String(/** ?string */ target) {}
 /** @abstract @return {LinkBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 
 static $clinit() {
  LinkBuilder.$clinit = () =>{};
  LinkBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_LinkBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LinkBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LinkBuilder, 'org.gwtproject.dom.builder.shared.LinkBuilder');

LinkBuilder.$markImplementor(/** @type {Function} */ (LinkBuilder));

exports = LinkBuilder; 
//# sourceMappingURL=LinkBuilder.js.map
