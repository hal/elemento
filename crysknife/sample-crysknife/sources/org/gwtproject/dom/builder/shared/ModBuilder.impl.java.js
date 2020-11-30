goog.module('org.gwtproject.dom.builder.shared.ModBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ModBuilder>}
 */
class ModBuilder {
 /** @abstract @return {ModBuilder} */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ cite) {}
 /** @abstract @return {ModBuilder} */
 m_cite__java_lang_String(/** ?string */ cite) {}
 /** @abstract @return {ModBuilder} */
 m_dateTime__java_lang_String(/** ?string */ dateTime) {}
 
 static $clinit() {
  ModBuilder.$clinit = () =>{};
  ModBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ModBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ModBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ModBuilder, 'org.gwtproject.dom.builder.shared.ModBuilder');

ModBuilder.$markImplementor(/** @type {Function} */ (ModBuilder));

exports = ModBuilder; 
//# sourceMappingURL=ModBuilder.js.map
