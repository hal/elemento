goog.module('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const SpanBuilder = goog.require('org.gwtproject.dom.builder.shared.SpanBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<SpanBuilder>}
 * @implements {SpanBuilder}
  */
class HtmlSpanBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlSpanBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlSpanBuilder.$clinit();
  let $instance = new HtmlSpanBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlSpanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlSpanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlSpanBuilder.$clinit = () =>{};
  HtmlSpanBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlSpanBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlSpanBuilder, 'org.gwtproject.dom.builder.shared.HtmlSpanBuilder');

SpanBuilder.$markImplementor(HtmlSpanBuilder);

exports = HtmlSpanBuilder; 
//# sourceMappingURL=HtmlSpanBuilder.js.map
