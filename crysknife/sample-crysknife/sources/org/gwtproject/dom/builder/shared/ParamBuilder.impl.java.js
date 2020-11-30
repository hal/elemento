goog.module('org.gwtproject.dom.builder.shared.ParamBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ParamBuilder>}
 */
class ParamBuilder {
 /** @abstract @return {ParamBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {ParamBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  ParamBuilder.$clinit = () =>{};
  ParamBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ParamBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ParamBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ParamBuilder, 'org.gwtproject.dom.builder.shared.ParamBuilder');

ParamBuilder.$markImplementor(/** @type {Function} */ (ParamBuilder));

exports = ParamBuilder; 
//# sourceMappingURL=ParamBuilder.js.map
