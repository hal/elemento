goog.module('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<OptGroupBuilder>}
 */
class OptGroupBuilder {
 /** @abstract @return {OptGroupBuilder} */
 m_disabled__() {}
 /** @abstract @return {OptGroupBuilder} */
 m_label__java_lang_String(/** ?string */ label) {}
 
 static $clinit() {
  OptGroupBuilder.$clinit = () =>{};
  OptGroupBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_OptGroupBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_OptGroupBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OptGroupBuilder, 'org.gwtproject.dom.builder.shared.OptGroupBuilder');

OptGroupBuilder.$markImplementor(/** @type {Function} */ (OptGroupBuilder));

exports = OptGroupBuilder; 
//# sourceMappingURL=OptGroupBuilder.js.map
