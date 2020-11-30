goog.module('org.gwtproject.dom.builder.client.DomElementBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ElementBuilder = goog.require('org.gwtproject.dom.builder.shared.ElementBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<ElementBuilder, Object>}
 * @implements {ElementBuilder}
  */
class DomElementBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomElementBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomElementBuilder.$clinit();
  let $instance = new DomElementBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomElementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomElementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomElementBuilder.$clinit = () =>{};
  DomElementBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomElementBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomElementBuilder, 'org.gwtproject.dom.builder.client.DomElementBuilder');

ElementBuilder.$markImplementor(DomElementBuilder);

exports = DomElementBuilder; 
//# sourceMappingURL=DomElementBuilder.js.map
