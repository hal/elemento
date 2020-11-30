goog.module('org.gwtproject.dom.builder.shared.HtmlFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FrameBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<FrameBuilder>}
 * @implements {FrameBuilder}
  */
class HtmlFrameBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlFrameBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlFrameBuilder.$clinit();
  let $instance = new HtmlFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {FrameBuilder} */
 m_frameBorder__int(/** number */ frameBorder) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("frameBorder", frameBorder), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ longDesc) {
  return this.m_longDesc__java_lang_String(longDesc.m_asString__());
 }
 /** @override @return {FrameBuilder} */
 m_longDesc__java_lang_String(/** ?string */ longDesc) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("longDesc", longDesc), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_marginHeight__int(/** number */ marginHeight) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginHeight", marginHeight), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_marginWidth__int(/** number */ marginWidth) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("marginWidth", marginWidth), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_noResize__() {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("noresize", "noresize"), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_scrolling__java_lang_String(/** ?string */ scrolling) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("scrolling", scrolling), FrameBuilder));
 }
 /** @override @return {FrameBuilder} */
 m_src__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ src) {
  return this.m_src__java_lang_String(src.m_asString__());
 }
 /** @override @return {FrameBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  return /**@type {FrameBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), FrameBuilder));
 }
 
 static $clinit() {
  HtmlFrameBuilder.$clinit = () =>{};
  HtmlFrameBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlFrameBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlFrameBuilder, 'org.gwtproject.dom.builder.shared.HtmlFrameBuilder');

FrameBuilder.$markImplementor(HtmlFrameBuilder);

exports = HtmlFrameBuilder; 
//# sourceMappingURL=HtmlFrameBuilder.js.map
