goog.module('org.gwtproject.dom.builder.shared.TableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableBuilder>}
 */
class TableBuilder {
 /** @abstract @return {TableBuilder} */
 m_border__int(/** number */ border) {}
 /** @abstract @return {TableBuilder} */
 m_cellPadding__int(/** number */ cellPadding) {}
 /** @abstract @return {TableBuilder} */
 m_cellSpacing__int(/** number */ cellSpacing) {}
 /** @abstract @return {TableBuilder} */
 m_frame__java_lang_String(/** ?string */ frame) {}
 /** @abstract @return {TableBuilder} */
 m_rules__java_lang_String(/** ?string */ rules) {}
 /** @abstract @return {TableBuilder} */
 m_width__java_lang_String(/** ?string */ width) {}
 
 static $clinit() {
  TableBuilder.$clinit = () =>{};
  TableBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableBuilder, 'org.gwtproject.dom.builder.shared.TableBuilder');

TableBuilder.$markImplementor(/** @type {Function} */ (TableBuilder));

/**@const {?string}*/
TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder = "Table elements do not support setting inner html. Use startTBody/startTFoot/startTHead() instead to append a table section to the table.";

exports = TableBuilder; 
//# sourceMappingURL=TableBuilder.js.map
