goog.module('org.gwtproject.dom.builder.client.DomBodyBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const BodyBuilder = goog.require('org.gwtproject.dom.builder.shared.BodyBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BodyElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<BodyBuilder, Object>}
 * @implements {BodyBuilder}
  */
class DomBodyBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomBodyBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomBodyBuilder.$clinit();
  let $instance = new DomBodyBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomBodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomBodyBuilder.$clinit = () =>{};
  DomBodyBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomBodyBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomBodyBuilder, 'org.gwtproject.dom.builder.client.DomBodyBuilder');

BodyBuilder.$markImplementor(DomBodyBuilder);

exports = DomBodyBuilder; 
//# sourceMappingURL=DomBodyBuilder.js.map
