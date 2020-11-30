goog.module('org.gwtproject.dom.builder.shared.HtmlSelectBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const SelectBuilder = goog.require('org.gwtproject.dom.builder.shared.SelectBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<SelectBuilder>}
 * @implements {SelectBuilder}
  */
class HtmlSelectBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlSelectBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlSelectBuilder.$clinit();
  let $instance = new HtmlSelectBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlSelectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlSelectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {SelectBuilder} */
 m_disabled__() {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_multiple__() {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("multiple", "multiple"), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_selectedIndex__int(/** number */ index) {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("index", index), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_size__int(/** number */ size) {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("size", size), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), SelectBuilder));
 }
 /** @override @return {SelectBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  return /**@type {SelectBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), SelectBuilder));
 }
 
 static $clinit() {
  HtmlSelectBuilder.$clinit = () =>{};
  HtmlSelectBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlSelectBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlSelectBuilder, 'org.gwtproject.dom.builder.shared.HtmlSelectBuilder');

SelectBuilder.$markImplementor(HtmlSelectBuilder);

exports = HtmlSelectBuilder; 
//# sourceMappingURL=HtmlSelectBuilder.js.map
