goog.module('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<HeadingBuilder>}
 */
class HeadingBuilder {
 
 static $clinit() {
  HeadingBuilder.$clinit = () =>{};
  HeadingBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_HeadingBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_HeadingBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeadingBuilder, 'org.gwtproject.dom.builder.shared.HeadingBuilder');

HeadingBuilder.$markImplementor(/** @type {Function} */ (HeadingBuilder));

exports = HeadingBuilder; 
//# sourceMappingURL=HeadingBuilder.js.map
