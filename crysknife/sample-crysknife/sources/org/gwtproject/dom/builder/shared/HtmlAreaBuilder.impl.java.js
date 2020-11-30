goog.module('org.gwtproject.dom.builder.shared.HtmlAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AreaBuilder = goog.require('org.gwtproject.dom.builder.shared.AreaBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<AreaBuilder>}
 * @implements {AreaBuilder}
  */
class HtmlAreaBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlAreaBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlAreaBuilder.$clinit();
  let $instance = new HtmlAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {AreaBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), AreaBuilder));
 }
 /** @override @return {AreaBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), AreaBuilder));
 }
 /** @override @return {AreaBuilder} */
 m_coords__java_lang_String(/** ?string */ coords) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("coords", coords), AreaBuilder));
 }
 /** @override @return {AreaBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), AreaBuilder));
 }
 /** @override @return {AreaBuilder} */
 m_shape__java_lang_String(/** ?string */ shape) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("shape", shape), AreaBuilder));
 }
 /** @override @return {AreaBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  return /**@type {AreaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), AreaBuilder));
 }
 
 static $clinit() {
  HtmlAreaBuilder.$clinit = () =>{};
  HtmlAreaBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlAreaBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlAreaBuilder, 'org.gwtproject.dom.builder.shared.HtmlAreaBuilder');

AreaBuilder.$markImplementor(HtmlAreaBuilder);

exports = HtmlAreaBuilder; 
//# sourceMappingURL=HtmlAreaBuilder.js.map
