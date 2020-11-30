goog.module('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableRowBuilder>}
 */
class TableRowBuilder {
 /** @abstract @return {TableRowBuilder} */
 m_align__java_lang_String(/** ?string */ align) {}
 /** @abstract @return {TableRowBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {}
 /** @abstract @return {TableRowBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {}
 /** @abstract @return {TableRowBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {}
 
 static $clinit() {
  TableRowBuilder.$clinit = () =>{};
  TableRowBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableRowBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableRowBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableRowBuilder, 'org.gwtproject.dom.builder.shared.TableRowBuilder');

TableRowBuilder.$markImplementor(/** @type {Function} */ (TableRowBuilder));

/**@const {?string}*/
TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder = "Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.";

exports = TableRowBuilder; 
//# sourceMappingURL=TableRowBuilder.js.map
