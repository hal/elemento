goog.module('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<CanvasBuilder>}
 */
class CanvasBuilder {
 /** @abstract @return {CanvasBuilder} */
 m_height__int(/** number */ height) {}
 /** @abstract @return {CanvasBuilder} */
 m_width__int(/** number */ width) {}
 
 static $clinit() {
  CanvasBuilder.$clinit = () =>{};
  CanvasBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_CanvasBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_CanvasBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CanvasBuilder, 'org.gwtproject.dom.builder.shared.CanvasBuilder');

CanvasBuilder.$markImplementor(/** @type {Function} */ (CanvasBuilder));

exports = CanvasBuilder; 
//# sourceMappingURL=CanvasBuilder.js.map
