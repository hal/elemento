goog.module('org.gwtproject.dom.builder.shared.HtmlFormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormBuilder = goog.require('org.gwtproject.dom.builder.shared.FormBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<FormBuilder>}
 * @implements {FormBuilder}
  */
class HtmlFormBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlFormBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlFormBuilder.$clinit();
  let $instance = new HtmlFormBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFormBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlFormBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {FormBuilder} */
 m_acceptCharset__java_lang_String(/** ?string */ acceptCharset) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("acceptCharset", acceptCharset), FormBuilder));
 }
 /** @override @return {FormBuilder} */
 m_action__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ action) {
  return this.m_action__java_lang_String(action.m_asString__());
 }
 /** @override @return {FormBuilder} */
 m_action__java_lang_String(/** ?string */ action) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("action", action), FormBuilder));
 }
 /** @override @return {FormBuilder} */
 m_enctype__java_lang_String(/** ?string */ enctype) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("enctype", enctype), FormBuilder));
 }
 /** @override @return {FormBuilder} */
 m_method__java_lang_String(/** ?string */ method) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("method", method), FormBuilder));
 }
 /** @override @return {FormBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), FormBuilder));
 }
 /** @override @return {FormBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  return /**@type {FormBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), FormBuilder));
 }
 
 static $clinit() {
  HtmlFormBuilder.$clinit = () =>{};
  HtmlFormBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlFormBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlFormBuilder, 'org.gwtproject.dom.builder.shared.HtmlFormBuilder');

FormBuilder.$markImplementor(HtmlFormBuilder);

exports = HtmlFormBuilder; 
//# sourceMappingURL=HtmlFormBuilder.js.map
