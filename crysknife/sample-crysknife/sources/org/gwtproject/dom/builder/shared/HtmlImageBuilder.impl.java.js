goog.module('org.gwtproject.dom.builder.shared.HtmlImageBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ImageBuilder = goog.require('org.gwtproject.dom.builder.shared.ImageBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<ImageBuilder>}
 * @implements {ImageBuilder}
  */
class HtmlImageBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlImageBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlImageBuilder.$clinit();
  let $instance = new HtmlImageBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlImageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlImageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {ImageBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  return /**@type {ImageBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), ImageBuilder));
 }
 /** @override @return {ImageBuilder} */
 m_height__int(/** number */ height) {
  return /**@type {ImageBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), ImageBuilder));
 }
 /** @override @return {ImageBuilder} */
 m_isMap__() {
  return /**@type {ImageBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ismap", "ismap"), ImageBuilder));
 }
 /** @override @return {ImageBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  return /**@type {ImageBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), ImageBuilder));
 }
 /** @override @return {ImageBuilder} */
 m_width__int(/** number */ width) {
  return /**@type {ImageBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), ImageBuilder));
 }
 
 static $clinit() {
  HtmlImageBuilder.$clinit = () =>{};
  HtmlImageBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlImageBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlImageBuilder, 'org.gwtproject.dom.builder.shared.HtmlImageBuilder');

ImageBuilder.$markImplementor(HtmlImageBuilder);

exports = HtmlImageBuilder; 
//# sourceMappingURL=HtmlImageBuilder.js.map
