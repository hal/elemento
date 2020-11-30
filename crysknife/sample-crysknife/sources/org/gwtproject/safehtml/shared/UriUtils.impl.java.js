goog.module('org.gwtproject.safehtml.shared.UriUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let SafeUriHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$impl');
let SafeUriString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUriString$impl');
let JvmImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils.JvmImpl$impl');

class UriUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!UriUtils} */
 static $create__() {
  let $instance = new UriUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_UriUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_UriUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {SafeUri} */
 static m_fromSafeConstant__java_lang_String(/** ?string */ s) {
  UriUtils.$clinit();
  SafeUriHostedModeUtils.m_maybeCheckValidUri__java_lang_String(s);
  return SafeUriString.$create__java_lang_String(s);
 }
 /** @return {SafeUri} */
 static m_fromString__java_lang_String(/** ?string */ s) {
  UriUtils.$clinit();
  return SafeUriString.$create__java_lang_String(UriUtils.m_sanitizeUri__java_lang_String(s));
 }
 /** @return {?string} */
 static m_sanitizeUri__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  if (UriUtils.m_isSafeUri__java_lang_String(uri)) {
   return UriUtils.m_encodeAllowEscapes__java_lang_String(uri);
  } else {
   return "#";
  }
 }
 /** @return {boolean} */
 static m_isSafeUri__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  let scheme = UriUtils.m_extractScheme__java_lang_String(uri);
  if ($Equality.$same(scheme, null)) {
   return true;
  }
  let schemeLc = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(scheme, Locale.f_ROOT__java_util_Locale);
  return ($Equality.$same("http", schemeLc) || $Equality.$same("https", schemeLc) || $Equality.$same("ftp", schemeLc) || $Equality.$same("mailto", schemeLc) || $Equality.$same("MAILTO", j_l_String.m_toUpperCase__java_lang_String__java_util_Locale(scheme, Locale.f_ROOT__java_util_Locale)));
 }
 /** @return {?string} */
 static m_encodeAllowEscapes__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  let escaped = StringBuilder.$create__();
  let firstSegment = true;
  for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__int(uri, "%", -1), $index = 0; $index < $array.length; $index++) {
   let segment = $array[$index];
   if (firstSegment) {
    firstSegment = false;
    escaped.m_append__java_lang_String(UriUtils.m_encode__java_lang_String(segment));
    continue;
   }
   if (j_l_String.m_length__java_lang_String(segment) >= 2 && j_l_String.m_matches__java_lang_String__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(segment, 0, 2), "[0-9a-fA-F]{2}")) {
    escaped.m_append__java_lang_String("%").m_append__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(segment, 0, 2));
    escaped.m_append__java_lang_String(UriUtils.m_encode__java_lang_String(j_l_String.m_substring__java_lang_String__int(segment, 2)));
   } else {
    escaped.m_append__java_lang_String("%25").m_append__java_lang_String(UriUtils.m_encode__java_lang_String(segment));
   }
  }
  return escaped.toString();
 }
 /** @return {?string} */
 static m_extractScheme__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  let colonPos = j_l_String.m_indexOf__java_lang_String__int(uri, 58 /* ':' */);
  if (colonPos < 0) {
   return null;
  }
  let scheme = j_l_String.m_substring__java_lang_String__int__int(uri, 0, colonPos);
  if (j_l_String.m_indexOf__java_lang_String__int(scheme, 47 /* '/' */) >= 0 || j_l_String.m_indexOf__java_lang_String__int(scheme, 35 /* '#' */) >= 0) {
   return null;
  }
  return scheme;
 }
 /** @return {?string} */
 static m_encode__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  return UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_.m_encode__java_lang_String_$pp_org_gwtproject_safehtml_shared(uri);
 }
 /** @return {SafeUri} */
 static m_fromTrustedString__java_lang_String(/** ?string */ s) {
  UriUtils.$clinit();
  SafeUriHostedModeUtils.m_maybeCheckValidUri__java_lang_String(s);
  return SafeUriString.$create__java_lang_String(s);
 }
 /** @return {SafeUri} @deprecated */
 static m_unsafeCastFromUntrustedString__java_lang_String(/** ?string */ s) {
  UriUtils.$clinit();
  return SafeUriString.$create__java_lang_String(s);
 }
 
 static $clinit() {
  UriUtils.$clinit = () =>{};
  UriUtils.$loadModules();
  j_l_Object.$clinit();
  UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_ = JvmImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UriUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeUriHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$impl');
  SafeUriString = goog.module.get('org.gwtproject.safehtml.shared.SafeUriString$impl');
  JvmImpl = goog.module.get('org.gwtproject.safehtml.shared.UriUtils.JvmImpl$impl');
 }
 
}
$Util.$setClassMetadata(UriUtils, 'org.gwtproject.safehtml.shared.UriUtils');

/**@const {?string}*/
UriUtils.f_DONT_NEED_ENCODING__org_gwtproject_safehtml_shared_UriUtils = ";/?:@&=+$,-_.!~*'()#[]";
/**@type {JvmImpl}*/
UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_;

exports = UriUtils; 
//# sourceMappingURL=UriUtils.js.map
