goog.module('org.gwtproject.dom.builder.shared.HtmlTableCaptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableCaptionBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<TableCaptionBuilder>}
 * @implements {TableCaptionBuilder}
  */
class HtmlTableCaptionBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlTableCaptionBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlTableCaptionBuilder.$clinit();
  let $instance = new HtmlTableCaptionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlTableCaptionBuilder.$clinit = () =>{};
  HtmlTableCaptionBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlTableCaptionBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlTableCaptionBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableCaptionBuilder');

TableCaptionBuilder.$markImplementor(HtmlTableCaptionBuilder);

exports = HtmlTableCaptionBuilder; 
//# sourceMappingURL=HtmlTableCaptionBuilder.js.map
