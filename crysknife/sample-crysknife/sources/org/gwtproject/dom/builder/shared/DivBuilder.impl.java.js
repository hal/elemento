goog.module('org.gwtproject.dom.builder.shared.DivBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<DivBuilder>}
 */
class DivBuilder {
 
 static $clinit() {
  DivBuilder.$clinit = () =>{};
  DivBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_DivBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_DivBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DivBuilder, 'org.gwtproject.dom.builder.shared.DivBuilder');

DivBuilder.$markImplementor(/** @type {Function} */ (DivBuilder));

exports = DivBuilder; 
//# sourceMappingURL=DivBuilder.js.map
