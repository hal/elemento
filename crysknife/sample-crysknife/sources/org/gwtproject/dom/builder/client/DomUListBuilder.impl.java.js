goog.module('org.gwtproject.dom.builder.client.DomUListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const UListBuilder = goog.require('org.gwtproject.dom.builder.shared.UListBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.UListElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<UListBuilder, Object>}
 * @implements {UListBuilder}
  */
class DomUListBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomUListBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomUListBuilder.$clinit();
  let $instance = new DomUListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomUListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomUListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomUListBuilder.$clinit = () =>{};
  DomUListBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomUListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomUListBuilder, 'org.gwtproject.dom.builder.client.DomUListBuilder');

UListBuilder.$markImplementor(DomUListBuilder);

exports = DomUListBuilder; 
//# sourceMappingURL=DomUListBuilder.js.map
