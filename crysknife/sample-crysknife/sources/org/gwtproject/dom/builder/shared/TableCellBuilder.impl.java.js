goog.module('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableCellBuilder>}
 */
class TableCellBuilder {
 /** @abstract @return {TableCellBuilder} */
 m_align__java_lang_String(/** ?string */ align) {}
 /** @abstract @return {TableCellBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {}
 /** @abstract @return {TableCellBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {}
 /** @abstract @return {TableCellBuilder} */
 m_colSpan__int(/** number */ colSpan) {}
 /** @abstract @return {TableCellBuilder} */
 m_headers__java_lang_String(/** ?string */ headers) {}
 /** @abstract @return {TableCellBuilder} */
 m_rowSpan__int(/** number */ rowSpan) {}
 /** @abstract @return {TableCellBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {}
 
 static $clinit() {
  TableCellBuilder.$clinit = () =>{};
  TableCellBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableCellBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableCellBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableCellBuilder, 'org.gwtproject.dom.builder.shared.TableCellBuilder');

TableCellBuilder.$markImplementor(/** @type {Function} */ (TableCellBuilder));

exports = TableCellBuilder; 
//# sourceMappingURL=TableCellBuilder.js.map
