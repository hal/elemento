goog.module('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TableCaptionBuilder>}
 */
class TableCaptionBuilder {
 
 static $clinit() {
  TableCaptionBuilder.$clinit = () =>{};
  TableCaptionBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_TableCaptionBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TableCaptionBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableCaptionBuilder, 'org.gwtproject.dom.builder.shared.TableCaptionBuilder');

TableCaptionBuilder.$markImplementor(/** @type {Function} */ (TableCaptionBuilder));

exports = TableCaptionBuilder; 
//# sourceMappingURL=TableCaptionBuilder.js.map
