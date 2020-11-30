goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JreImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');

class SafeHtmlHostedModeUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeHtmlHostedModeUtils} */
 static $create__() {
  SafeHtmlHostedModeUtils.$clinit();
  let $instance = new SafeHtmlHostedModeUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static m_isCompleteHtml__java_lang_String(/** ?string */ html) {
  SafeHtmlHostedModeUtils.$clinit();
  return SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_isCompleteHtml__java_lang_String(html);
 }
 
 static m_maybeCheckCompleteHtml__java_lang_String(/** ?string */ html) {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_maybeCheckCompleteHtml__java_lang_String(html);
 }
 
 static m_setForceCheckCompleteHtml__boolean(/** boolean */ check) {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = check;
 }
 
 static m_setForceCheckCompleteHtmlFromProperty__() {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_getForceCheckCompleteHtmlFromProperty__();
 }
 
 static $clinit() {
  SafeHtmlHostedModeUtils.$clinit = () =>{};
  SafeHtmlHostedModeUtils.$loadModules();
  j_l_Object.$clinit();
  SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = JreImpl.$create__();
  SafeHtmlHostedModeUtils.m_setForceCheckCompleteHtmlFromProperty__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlHostedModeUtils;
 }
 
 static $loadModules() {
  JreImpl = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlHostedModeUtils, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils');

/**@const {?string}*/
SafeHtmlHostedModeUtils.f_FORCE_CHECK_COMPLETE_HTML__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils = "com.google.gwt.safehtml.ForceCheckCompleteHtml";
/**@type {JreImpl}*/
SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_;
/**@type {boolean}*/
SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = false;

exports = SafeHtmlHostedModeUtils; 
//# sourceMappingURL=SafeHtmlHostedModeUtils.js.map
