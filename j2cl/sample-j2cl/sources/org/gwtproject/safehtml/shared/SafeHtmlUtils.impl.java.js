goog.module('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
let SafeHtmlString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
let JvmImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils.JvmImpl$impl');

class SafeHtmlUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeHtmlUtils} */
 static $create__() {
  let $instance = new SafeHtmlUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {SafeHtml} */
 static m_fromSafeConstant__java_lang_String(/** ?string */ s) {
  SafeHtmlUtils.$clinit();
  SafeHtmlHostedModeUtils.m_maybeCheckCompleteHtml__java_lang_String(s);
  return SafeHtmlString.$create__java_lang_String(s);
 }
 /** @return {SafeHtml} */
 static m_fromString__java_lang_String(/** ?string */ s) {
  SafeHtmlUtils.$clinit();
  return SafeHtmlString.$create__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(s));
 }
 /** @return {?string} */
 static m_htmlEscape__java_lang_String(/** ?string */ s) {
  SafeHtmlUtils.$clinit();
  return SafeHtmlUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlUtils_.m_htmlEscape__java_lang_String_$pp_org_gwtproject_safehtml_shared(s);
 }
 /** @return {SafeHtml} */
 static m_fromTrustedString__java_lang_String(/** ?string */ s) {
  SafeHtmlUtils.$clinit();
  return SafeHtmlString.$create__java_lang_String(s);
 }
 /** @return {?string} */
 static m_htmlEscape__char(/** number */ c) {
  SafeHtmlUtils.$clinit();
  switch (c) {
   case 38 /* '&' */: 
    return "&amp;";
   case 60 /* '<' */: 
    return "&lt;";
   case 62 /* '>' */: 
    return "&gt;";
   case 34 /* '\"' */: 
    return "&quot;";
   case 39 /* '\'' */: 
    return "&#39;";
   default: 
    return "" + j_l_String.m_valueOf__char(c);
  }
 }
 /** @return {?string} */
 static m_htmlEscapeAllowEntities__java_lang_String(/** ?string */ text) {
  SafeHtmlUtils.$clinit();
  let escaped = StringBuilder.$create__();
  let firstSegment = true;
  for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__int(text, "&", -1), $index = 0; $index < $array.length; $index++) {
   let segment = $array[$index];
   if (firstSegment) {
    firstSegment = false;
    escaped.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(segment));
    continue;
   }
   let entityEnd = j_l_String.m_indexOf__java_lang_String__int(segment, 59 /* ';' */);
   if (entityEnd > 0 && j_l_String.m_matches__java_lang_String__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(segment, 0, entityEnd), SafeHtmlUtils.f_HTML_ENTITY_REGEX__org_gwtproject_safehtml_shared_SafeHtmlUtils_)) {
    escaped.m_append__java_lang_String("&").m_append__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(segment, 0, entityEnd + 1));
    escaped.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_substring__java_lang_String__int(segment, entityEnd + 1)));
   } else {
    escaped.m_append__java_lang_String("&amp;").m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(segment));
   }
  }
  return escaped.toString();
 }
 /** @return {SafeHtml} */
 static get f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils() {
  return (SafeHtmlUtils.$clinit(), SafeHtmlUtils.$f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils);
 }
 
 static $clinit() {
  SafeHtmlUtils.$clinit = () =>{};
  SafeHtmlUtils.$loadModules();
  j_l_Object.$clinit();
  SafeHtmlUtils.$f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils = SafeHtmlString.$create__java_lang_String("");
  SafeHtmlUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlUtils_ = JvmImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeHtmlHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
  SafeHtmlString = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
  JvmImpl = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils.JvmImpl$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlUtils, 'org.gwtproject.safehtml.shared.SafeHtmlUtils');

/**@private {SafeHtml}*/
SafeHtmlUtils.$f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils;
/**@const {?string}*/
SafeHtmlUtils.f_HTML_CHARS__org_gwtproject_safehtml_shared_SafeHtmlUtils = "[&<>'\"]";
/**@const {?string}*/
SafeHtmlUtils.f_HTML_ENTITY_REGEX__org_gwtproject_safehtml_shared_SafeHtmlUtils_ = "[a-z]+|#[0-9]+|#x[0-9a-fA-F]+";
/**@type {JvmImpl}*/
SafeHtmlUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlUtils_;

exports = SafeHtmlUtils; 
//# sourceMappingURL=SafeHtmlUtils.js.map
