goog.module('org.gwtproject.dom.builder.client.DomHeadingBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const HeadingBuilder = goog.require('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<HeadingBuilder, Object>}
 * @implements {HeadingBuilder}
  */
class DomHeadingBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomHeadingBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomHeadingBuilder.$clinit();
  let $instance = new DomHeadingBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomHeadingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomHeadingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomHeadingBuilder.$clinit = () =>{};
  DomHeadingBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomHeadingBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomHeadingBuilder, 'org.gwtproject.dom.builder.client.DomHeadingBuilder');

HeadingBuilder.$markImplementor(DomHeadingBuilder);

exports = DomHeadingBuilder; 
//# sourceMappingURL=DomHeadingBuilder.js.map
