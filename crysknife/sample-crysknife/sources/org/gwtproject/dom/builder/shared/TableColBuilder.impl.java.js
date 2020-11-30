goog.module('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableColBuilder>}
 */
class TableColBuilder {
 /** @abstract @return {TableColBuilder} */
 m_align__java_lang_String(/** ?string */ align) {}
 /** @abstract @return {TableColBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {}
 /** @abstract @return {TableColBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {}
 /** @abstract @return {TableColBuilder} */
 m_span__int(/** number */ span) {}
 /** @abstract @return {TableColBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {}
 /** @abstract @return {TableColBuilder} */
 m_width__java_lang_String(/** ?string */ width) {}
 
 static $clinit() {
  TableColBuilder.$clinit = () =>{};
  TableColBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableColBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableColBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableColBuilder, 'org.gwtproject.dom.builder.shared.TableColBuilder');

TableColBuilder.$markImplementor(/** @type {Function} */ (TableColBuilder));

exports = TableColBuilder; 
//# sourceMappingURL=TableColBuilder.js.map
