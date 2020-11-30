goog.module('org.gwtproject.dom.builder.shared.HtmlScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ScriptBuilder = goog.require('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<ScriptBuilder>}
 * @implements {ScriptBuilder}
  */
class HtmlScriptBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlScriptBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlScriptBuilder.$clinit();
  let $instance = new HtmlScriptBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlScriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlScriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {ScriptBuilder} */
 m_defer__java_lang_String(/** ?string */ defer) {
  return /**@type {ScriptBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("defer", defer), ScriptBuilder));
 }
 /** @override @return {ScriptBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ScriptBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_ScriptBuilder));
 }
 /** @override @return {boolean} */
 m_isChildElementSupported__() {
  return false;
 }
 /** @override @return {ScriptBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  return /**@type {ScriptBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", src), ScriptBuilder));
 }
 /** @override @return {ScriptBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  return /**@type {ScriptBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), ScriptBuilder));
 }
 
 static $clinit() {
  HtmlScriptBuilder.$clinit = () =>{};
  HtmlScriptBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlScriptBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HtmlScriptBuilder, 'org.gwtproject.dom.builder.shared.HtmlScriptBuilder');

ScriptBuilder.$markImplementor(HtmlScriptBuilder);

exports = HtmlScriptBuilder; 
//# sourceMappingURL=HtmlScriptBuilder.js.map
