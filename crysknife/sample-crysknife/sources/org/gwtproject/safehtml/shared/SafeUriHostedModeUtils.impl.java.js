goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JreImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JreImpl$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class SafeUriHostedModeUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeUriHostedModeUtils} */
 static $create__() {
  SafeUriHostedModeUtils.$clinit();
  let $instance = new SafeUriHostedModeUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static m_isValidUriCharset__java_lang_String(/** ?string */ uri) {
  SafeUriHostedModeUtils.$clinit();
  let len = j_l_String.m_length__java_lang_String(uri);
  let i = 0;
  while (i < len) {
   let codePoint = j_l_String.m_codePointAt__java_lang_String__int(uri, i);
   i += Character.m_charCount__int(codePoint);
   if (Character.m_isSupplementaryCodePoint__int(codePoint)) {
    continue;
   }
   if (j_l_String.m_indexOf__java_lang_String__int(SafeUriHostedModeUtils.f_HREF_DISCRETE_UCSCHAR__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils, codePoint) >= 0) {
    continue;
   }
   if ((97 /* 'a' */ <= codePoint && codePoint <= 122 /* 'z' */) || (65 /* 'A' */ <= codePoint && codePoint <= 90 /* 'Z' */) || (48 /* '0' */ <= codePoint && codePoint <= 57 /* '9' */)) {
    continue;
   }
   if ((0 <= codePoint && codePoint <= 31) || (127 <= codePoint && codePoint <= 55295) || (57344 <= codePoint && codePoint <= 65533)) {
    continue;
   }
   return false;
  }
  return true;
 }
 
 static m_maybeCheckValidUri__java_lang_String(/** ?string */ uri) {
  SafeUriHostedModeUtils.$clinit();
  if (SafeUriHostedModeUtils.f_forceCheckValidUri__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_) {
   SafeUriHostedModeUtils.m_checkArgument__boolean__java_lang_String(SafeUriHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_.m_isValidUri__java_lang_String(uri), "String is not a valid URI: " + j_l_String.m_valueOf__java_lang_Object(uri));
  } else {
   $Asserts.$assertWithMessage(SafeUriHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_.m_isValidUri__java_lang_String(uri), "String is not a valid URI: " + j_l_String.m_valueOf__java_lang_Object(uri));
  }
 }
 
 static m_checkArgument__boolean__java_lang_String(/** boolean */ completeHtml, /** ?string */ message) {
  if (!completeHtml) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
  }
 }
 
 static m_setForceCheckValidUri__boolean(/** boolean */ check) {
  SafeUriHostedModeUtils.$clinit();
  SafeUriHostedModeUtils.f_forceCheckValidUri__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_ = check;
 }
 
 static m_setForceCheckValidUriFromProperty__() {
  SafeUriHostedModeUtils.$clinit();
  SafeUriHostedModeUtils.f_forceCheckValidUri__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_ = SafeUriHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_.m_getForceCheckValieUriFromProperty__();
 }
 
 static $clinit() {
  SafeUriHostedModeUtils.$clinit = () =>{};
  SafeUriHostedModeUtils.$loadModules();
  j_l_Object.$clinit();
  SafeUriHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_ = JreImpl.$create__();
  SafeUriHostedModeUtils.m_setForceCheckValidUriFromProperty__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeUriHostedModeUtils;
 }
 
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JreImpl = goog.module.get('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JreImpl$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SafeUriHostedModeUtils, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils');

/**@const {?string}*/
SafeUriHostedModeUtils.f_FORCE_CHECK_VALID_URI__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils = "com.google.gwt.safehtml.ForceCheckValidUri";
/**@const {?string}*/
SafeUriHostedModeUtils.f_HREF_DISCRETE_UCSCHAR__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils = ":/?#[]@!$&'()*+,;=-._~ <>\"{}|\\^`%";
/**@type {JreImpl}*/
SafeUriHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_;
/**@type {boolean}*/
SafeUriHostedModeUtils.f_forceCheckValidUri__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_ = false;

exports = SafeUriHostedModeUtils; 
//# sourceMappingURL=SafeUriHostedModeUtils.js.map
