goog.module('org.gwtproject.dom.builder.shared.HtmlInputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const InputBuilder = goog.require('org.gwtproject.dom.builder.shared.InputBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<InputBuilder>}
 * @implements {InputBuilder}
  */
class HtmlInputBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlInputBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlInputBuilder.$clinit();
  let $instance = new HtmlInputBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlInputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlInputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {InputBuilder} */
 m_accept__java_lang_String(/** ?string */ accept) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accept", accept), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("alt", alt), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_checked__() {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("checked", "checked"), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_defaultChecked__() {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultChecked", "defaultChecked"), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_defaultValue__java_lang_String(/** ?string */ defaultValue) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defaultValue", defaultValue), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_disabled__() {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_maxLength__int(/** number */ maxLength) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("maxlength", maxLength), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_readOnly__() {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("readonly", "readonly"), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_size__int(/** number */ size) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("size", size), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), InputBuilder));
 }
 /** @override @return {InputBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  return /**@type {InputBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), InputBuilder));
 }
 
 static $clinit() {
  HtmlInputBuilder.$clinit = () =>{};
  HtmlInputBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlInputBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlInputBuilder, 'org.gwtproject.dom.builder.shared.HtmlInputBuilder');

InputBuilder.$markImplementor(HtmlInputBuilder);

exports = HtmlInputBuilder; 
//# sourceMappingURL=HtmlInputBuilder.js.map
