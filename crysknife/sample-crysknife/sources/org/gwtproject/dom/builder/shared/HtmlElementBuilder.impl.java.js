goog.module('org.gwtproject.dom.builder.shared.HtmlElementBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<ElementBuilder>}
 * @implements {ElementBuilder}
  */
class HtmlElementBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlElementBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlElementBuilder.$clinit();
  let $instance = new HtmlElementBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlElementBuilder.$clinit = () =>{};
  HtmlElementBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlElementBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlElementBuilder, 'org.gwtproject.dom.builder.shared.HtmlElementBuilder');

ElementBuilder.$markImplementor(HtmlElementBuilder);

exports = HtmlElementBuilder; 
//# sourceMappingURL=HtmlElementBuilder.js.map
