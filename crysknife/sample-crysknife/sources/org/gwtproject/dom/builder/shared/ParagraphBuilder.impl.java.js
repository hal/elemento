goog.module('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ParagraphBuilder>}
 */
class ParagraphBuilder {
 
 static $clinit() {
  ParagraphBuilder.$clinit = () =>{};
  ParagraphBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ParagraphBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ParagraphBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ParagraphBuilder, 'org.gwtproject.dom.builder.shared.ParagraphBuilder');

ParagraphBuilder.$markImplementor(/** @type {Function} */ (ParagraphBuilder));

exports = ParagraphBuilder; 
//# sourceMappingURL=ParagraphBuilder.js.map
