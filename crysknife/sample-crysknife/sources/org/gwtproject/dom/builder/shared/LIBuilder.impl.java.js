goog.module('org.gwtproject.dom.builder.shared.LIBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LIBuilder>}
 */
class LIBuilder {
 
 static $clinit() {
  LIBuilder.$clinit = () =>{};
  LIBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_LIBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LIBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LIBuilder, 'org.gwtproject.dom.builder.shared.LIBuilder');

LIBuilder.$markImplementor(/** @type {Function} */ (LIBuilder));

exports = LIBuilder; 
//# sourceMappingURL=LIBuilder.js.map
