goog.module('org.gwtproject.dom.builder.shared.ButtonBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ButtonBuilder>}
 */
class ButtonBuilder {
 /** @abstract @return {ButtonBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {}
 /** @abstract @return {ButtonBuilder} */
 m_disabled__() {}
 /** @abstract @return {ButtonBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {ButtonBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  ButtonBuilder.$clinit = () =>{};
  ButtonBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ButtonBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ButtonBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ButtonBuilder, 'org.gwtproject.dom.builder.shared.ButtonBuilder');

ButtonBuilder.$markImplementor(/** @type {Function} */ (ButtonBuilder));

exports = ButtonBuilder; 
//# sourceMappingURL=ButtonBuilder.js.map
