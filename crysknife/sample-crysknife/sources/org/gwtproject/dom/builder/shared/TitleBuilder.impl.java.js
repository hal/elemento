goog.module('org.gwtproject.dom.builder.shared.TitleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TitleBuilder>}
 */
class TitleBuilder {
 
 static $clinit() {
  TitleBuilder.$clinit = () =>{};
  TitleBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TitleBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TitleBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TitleBuilder, 'org.gwtproject.dom.builder.shared.TitleBuilder');

TitleBuilder.$markImplementor(/** @type {Function} */ (TitleBuilder));

exports = TitleBuilder; 
//# sourceMappingURL=TitleBuilder.js.map
