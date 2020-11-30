goog.module('org.gwtproject.dom.builder.shared.ElementBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ElementBuilder>}
 */
class ElementBuilder {
 
 static $clinit() {
  ElementBuilder.$clinit = () =>{};
  ElementBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ElementBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ElementBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementBuilder, 'org.gwtproject.dom.builder.shared.ElementBuilder');

ElementBuilder.$markImplementor(/** @type {Function} */ (ElementBuilder));

exports = ElementBuilder; 
//# sourceMappingURL=ElementBuilder.js.map
