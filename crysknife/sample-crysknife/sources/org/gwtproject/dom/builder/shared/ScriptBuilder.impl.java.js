goog.module('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ScriptBuilder>}
 */
class ScriptBuilder {
 /** @abstract @return {ScriptBuilder} */
 m_defer__java_lang_String(/** ?string */ defer) {}
 /** @abstract @return {ScriptBuilder} */
 m_src__java_lang_String(/** ?string */ src) {}
 /** @abstract @return {ScriptBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 
 static $clinit() {
  ScriptBuilder.$clinit = () =>{};
  ScriptBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ScriptBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ScriptBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ScriptBuilder, 'org.gwtproject.dom.builder.shared.ScriptBuilder');

ScriptBuilder.$markImplementor(/** @type {Function} */ (ScriptBuilder));

/**@const {?string}*/
ScriptBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_ScriptBuilder = "Script elements do not support html.  Use text() instead.";

exports = ScriptBuilder; 
//# sourceMappingURL=ScriptBuilder.js.map
