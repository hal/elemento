goog.module('org.gwtproject.safehtml.shared.SafeHtmlUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsRegExp_$Overlay = goog.forwardDeclare('elemental2.core.JsRegExp.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.core.JsString.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

class JsImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsImpl} */
 static $create__() {
  JsImpl.$clinit();
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_htmlEscape__java_lang_String_$pp_org_gwtproject_safehtml_shared(/** ?string */ s) {
  if (!JsImpl.f_HTML_CHARS_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_.test(s)) {
   return s;
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(s, "&") != -1) {
   s = $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(s), JsImpl.f_AMP_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_, "&amp;");
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(s, "<") != -1) {
   s = $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(s), JsImpl.f_LT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_, "&lt;");
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(s, ">") != -1) {
   s = $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(s), JsImpl.f_GT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_, "&gt;");
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(s, "\"") != -1) {
   s = $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(s), JsImpl.f_QUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_, "&quot;");
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(s, "'") != -1) {
   s = $Overlay.m_replace__$devirt__elemental2_core_JsString__elemental2_core_JsRegExp__java_lang_String(new String(s), JsImpl.f_SQUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_, "&#39;");
  }
  return s;
 }
 
 static $clinit() {
  JsImpl.$clinit = () =>{};
  JsImpl.$loadModules();
  j_l_Object.$clinit();
  JsImpl.f_HTML_CHARS_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp(SafeHtmlUtils.f_HTML_CHARS__org_gwtproject_safehtml_shared_SafeHtmlUtils);
  JsImpl.f_AMP_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp("&", "g");
  JsImpl.f_GT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp(">", "g");
  JsImpl.f_LT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp("<", "g");
  JsImpl.f_SQUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp("'", "g");
  JsImpl.f_QUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_ = new RegExp("\"", "g");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsImpl;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsString.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeHtmlUtils$JsImpl');

/**@type {RegExp}*/
JsImpl.f_HTML_CHARS_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;
/**@type {RegExp}*/
JsImpl.f_AMP_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;
/**@type {RegExp}*/
JsImpl.f_GT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;
/**@type {RegExp}*/
JsImpl.f_LT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;
/**@type {RegExp}*/
JsImpl.f_SQUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;
/**@type {RegExp}*/
JsImpl.f_QUOT_RE__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl_;

exports = JsImpl; 
//# sourceMappingURL=SafeHtmlUtils$JsImpl.js.map
