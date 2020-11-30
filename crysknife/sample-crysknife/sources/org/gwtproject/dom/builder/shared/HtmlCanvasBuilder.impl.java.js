goog.module('org.gwtproject.dom.builder.shared.HtmlCanvasBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasBuilder = goog.require('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<CanvasBuilder>}
 * @implements {CanvasBuilder}
  */
class HtmlCanvasBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlCanvasBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlCanvasBuilder.$clinit();
  let $instance = new HtmlCanvasBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlCanvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlCanvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {CanvasBuilder} */
 m_height__int(/** number */ height) {
  return /**@type {CanvasBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), CanvasBuilder));
 }
 /** @override @return {CanvasBuilder} */
 m_width__int(/** number */ width) {
  return /**@type {CanvasBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), CanvasBuilder));
 }
 
 static $clinit() {
  HtmlCanvasBuilder.$clinit = () =>{};
  HtmlCanvasBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlCanvasBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlCanvasBuilder, 'org.gwtproject.dom.builder.shared.HtmlCanvasBuilder');

CanvasBuilder.$markImplementor(HtmlCanvasBuilder);

exports = HtmlCanvasBuilder; 
//# sourceMappingURL=HtmlCanvasBuilder.js.map
