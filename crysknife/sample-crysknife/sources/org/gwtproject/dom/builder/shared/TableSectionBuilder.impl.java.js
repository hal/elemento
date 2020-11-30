goog.module('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableSectionBuilder>}
 */
class TableSectionBuilder {
 /** @abstract @return {TableSectionBuilder} */
 m_align__java_lang_String(/** ?string */ align) {}
 /** @abstract @return {TableSectionBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {}
 /** @abstract @return {TableSectionBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {}
 /** @abstract @return {TableSectionBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {}
 
 static $clinit() {
  TableSectionBuilder.$clinit = () =>{};
  TableSectionBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableSectionBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableSectionBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableSectionBuilder, 'org.gwtproject.dom.builder.shared.TableSectionBuilder');

TableSectionBuilder.$markImplementor(/** @type {Function} */ (TableSectionBuilder));

/**@const {?string}*/
TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder = "Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.";

exports = TableSectionBuilder; 
//# sourceMappingURL=TableSectionBuilder.js.map
