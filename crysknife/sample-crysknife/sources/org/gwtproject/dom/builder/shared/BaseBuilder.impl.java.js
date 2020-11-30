goog.module('org.gwtproject.dom.builder.shared.BaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BaseBuilder>}
 */
class BaseBuilder {
 /** @abstract @return {BaseBuilder} */
 m_href__java_lang_String(/** ?string */ href) {}
 /** @abstract @return {BaseBuilder} */
 m_target__java_lang_String(/** ?string */ target) {}
 
 static $clinit() {
  BaseBuilder.$clinit = () =>{};
  BaseBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_BaseBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BaseBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BaseBuilder, 'org.gwtproject.dom.builder.shared.BaseBuilder');

BaseBuilder.$markImplementor(/** @type {Function} */ (BaseBuilder));

exports = BaseBuilder; 
//# sourceMappingURL=BaseBuilder.js.map
