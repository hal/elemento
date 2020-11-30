goog.module('org.gwtproject.dom.builder.shared.SelectBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SelectBuilder>}
 */
class SelectBuilder {
 /** @abstract @return {SelectBuilder} */
 m_disabled__() {}
 /** @abstract @return {SelectBuilder} */
 m_multiple__() {}
 /** @abstract @return {SelectBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {SelectBuilder} */
 m_selectedIndex__int(/** number */ index) {}
 /** @abstract @return {SelectBuilder} */
 m_size__int(/** number */ size) {}
 /** @abstract @return {SelectBuilder} */
 m_type__java_lang_String(/** ?string */ type) {}
 /** @abstract @return {SelectBuilder} */
 m_value__java_lang_String(/** ?string */ value) {}
 
 static $clinit() {
  SelectBuilder.$clinit = () =>{};
  SelectBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_SelectBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SelectBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SelectBuilder, 'org.gwtproject.dom.builder.shared.SelectBuilder');

SelectBuilder.$markImplementor(/** @type {Function} */ (SelectBuilder));

exports = SelectBuilder; 
//# sourceMappingURL=SelectBuilder.js.map
