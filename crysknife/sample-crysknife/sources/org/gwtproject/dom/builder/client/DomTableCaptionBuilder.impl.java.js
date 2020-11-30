goog.module('org.gwtproject.dom.builder.client.DomTableCaptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableCaptionBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<TableCaptionBuilder, Object>}
 * @implements {TableCaptionBuilder}
  */
class DomTableCaptionBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableCaptionBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTableCaptionBuilder.$clinit();
  let $instance = new DomTableCaptionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomTableCaptionBuilder.$clinit = () =>{};
  DomTableCaptionBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableCaptionBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomTableCaptionBuilder, 'org.gwtproject.dom.builder.client.DomTableCaptionBuilder');

TableCaptionBuilder.$markImplementor(DomTableCaptionBuilder);

exports = DomTableCaptionBuilder; 
//# sourceMappingURL=DomTableCaptionBuilder.js.map
