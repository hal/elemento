goog.module('org.gwtproject.dom.builder.shared.BodyBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BodyBuilder>}
 */
class BodyBuilder {
 
 static $clinit() {
  BodyBuilder.$clinit = () =>{};
  BodyBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_BodyBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BodyBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BodyBuilder, 'org.gwtproject.dom.builder.shared.BodyBuilder');

BodyBuilder.$markImplementor(/** @type {Function} */ (BodyBuilder));

exports = BodyBuilder; 
//# sourceMappingURL=BodyBuilder.js.map
