goog.module('org.gwtproject.dom.builder.client.DomBRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const BRBuilder = goog.require('org.gwtproject.dom.builder.shared.BRBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BRElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<BRBuilder, Object>}
 * @implements {BRBuilder}
  */
class DomBRBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomBRBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomBRBuilder.$clinit();
  let $instance = new DomBRBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBRBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomBRBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 
 static $clinit() {
  DomBRBuilder.$clinit = () =>{};
  DomBRBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomBRBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomBRBuilder, 'org.gwtproject.dom.builder.client.DomBRBuilder');

BRBuilder.$markImplementor(DomBRBuilder);

exports = DomBRBuilder; 
//# sourceMappingURL=DomBRBuilder.js.map
