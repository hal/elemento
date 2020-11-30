goog.module('org.gwtproject.dom.builder.shared.SpanBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SpanBuilder>}
 */
class SpanBuilder {
 
 static $clinit() {
  SpanBuilder.$clinit = () =>{};
  SpanBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_SpanBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SpanBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SpanBuilder, 'org.gwtproject.dom.builder.shared.SpanBuilder');

SpanBuilder.$markImplementor(/** @type {Function} */ (SpanBuilder));

exports = SpanBuilder; 
//# sourceMappingURL=SpanBuilder.js.map
