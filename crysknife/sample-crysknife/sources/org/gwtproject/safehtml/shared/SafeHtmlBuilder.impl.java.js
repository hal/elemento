goog.module('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
let SafeHtmlString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

class SafeHtmlBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StringBuilder}*/
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_;
 }
 /** @return {!SafeHtmlBuilder} */
 static $create__() {
  SafeHtmlBuilder.$clinit();
  let $instance = new SafeHtmlBuilder();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder();
 }
 /** @return {SafeHtmlBuilder} */
 m_append__boolean(/** boolean */ b) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__boolean(b);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__byte(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int(num);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__char(/** number */ c) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__char(c));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__double(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__double(num);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__float(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__float(num);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__int(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int(num);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__long(/** !$Long */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__long(num);
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_append__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(html.m_asString__());
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendEscaped__java_lang_String(/** ?string */ text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(text));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendEscapedLines__java_lang_String(/** ?string */ text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(text), "\n", "<br>"));
  return this;
 }
 /** @return {SafeHtmlBuilder} */
 m_appendHtmlConstant__java_lang_String(/** ?string */ html) {
  SafeHtmlHostedModeUtils.m_maybeCheckCompleteHtml__java_lang_String(html);
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String(html);
  return this;
 }
 /** @return {SafeHtml} */
 m_toSafeHtml__() {
  return SafeHtmlString.$create__java_lang_String(this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.toString());
 }
 /** @private */
 $init___$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder() {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  SafeHtmlBuilder.$clinit = () =>{};
  SafeHtmlBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeHtmlHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
  SafeHtmlString = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlBuilder, 'org.gwtproject.safehtml.shared.SafeHtmlBuilder');

exports = SafeHtmlBuilder; 
//# sourceMappingURL=SafeHtmlBuilder.js.map
