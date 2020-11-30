goog.module('org.gwtproject.safehtml.shared.SimpleHtmlSanitizer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlSanitizer = goog.require('org.gwtproject.safehtml.shared.HtmlSanitizer$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HtmlSanitizer}
  */
class SimpleHtmlSanitizer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SimpleHtmlSanitizer} */
 static $create__() {
  let $instance = new SimpleHtmlSanitizer();
  $instance.$ctor__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {SimpleHtmlSanitizer} */
 static m_getInstance__() {
  SimpleHtmlSanitizer.$clinit();
  return SimpleHtmlSanitizer.f_INSTANCE__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_;
 }
 /** @override @return {SafeHtml} */
 m_sanitize__java_lang_String(/** ?string */ html) {
  return SimpleHtmlSanitizer.m_sanitizeHtml__java_lang_String(html);
 }
 /** @return {SafeHtml} */
 static m_sanitizeHtml__java_lang_String(/** ?string */ html) {
  SimpleHtmlSanitizer.$clinit();
  if ($Equality.$same(html, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("html is null"));
  }
  return SafeHtmlString.$create__java_lang_String(SimpleHtmlSanitizer.m_simpleSanitize__java_lang_String(html));
 }
 /** @return {?string} */
 static m_simpleSanitize__java_lang_String(/** ?string */ text) {
  let sanitized = StringBuilder.$create__();
  let firstSegment = true;
  for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__int(text, "<", -1), $index = 0; $index < $array.length; $index++) {
   let segment = $array[$index];
   if (firstSegment) {
    firstSegment = false;
    sanitized.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscapeAllowEntities__java_lang_String(segment));
    continue;
   }
   let tagStart = 0;
   let tagEnd = j_l_String.m_indexOf__java_lang_String__int(segment, 62 /* '>' */);
   let tag = null;
   let isValidTag = false;
   if (tagEnd > 0) {
    if (j_l_String.m_charAt__java_lang_String__int(segment, 0) == 47 /* '/' */) {
     tagStart = 1;
    }
    tag = j_l_String.m_substring__java_lang_String__int__int(segment, tagStart, tagEnd);
    if (SimpleHtmlSanitizer.f_TAG_WHITELIST__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_.contains(tag)) {
     isValidTag = true;
    }
   }
   if (isValidTag) {
    if (tagStart == 0) {
     sanitized.m_append__char(60 /* '<' */);
    } else {
     sanitized.m_append__java_lang_String("</");
    }
    sanitized.m_append__java_lang_String(tag).m_append__char(62 /* '>' */);
    sanitized.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscapeAllowEntities__java_lang_String(j_l_String.m_substring__java_lang_String__int(segment, tagEnd + 1)));
   } else {
    sanitized.m_append__java_lang_String("&lt;").m_append__java_lang_String(SafeHtmlUtils.m_htmlEscapeAllowEntities__java_lang_String(segment));
   }
  }
  return sanitized.toString();
 }
 
 static $clinit() {
  SimpleHtmlSanitizer.$clinit = () =>{};
  SimpleHtmlSanitizer.$loadModules();
  j_l_Object.$clinit();
  SimpleHtmlSanitizer.f_INSTANCE__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_ = SimpleHtmlSanitizer.$create__();
  SimpleHtmlSanitizer.f_TAG_WHITELIST__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__java_util_Collection(Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init(["b", "em", "i", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "ul", "ol", "li", "strong", "br"], j_l_String)))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleHtmlSanitizer;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlString = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SimpleHtmlSanitizer, 'org.gwtproject.safehtml.shared.SimpleHtmlSanitizer');

HtmlSanitizer.$markImplementor(SimpleHtmlSanitizer);

/**@type {SimpleHtmlSanitizer}*/
SimpleHtmlSanitizer.f_INSTANCE__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_;
/**@type {Set<?string>}*/
SimpleHtmlSanitizer.f_TAG_WHITELIST__org_gwtproject_safehtml_shared_SimpleHtmlSanitizer_;

exports = SimpleHtmlSanitizer; 
//# sourceMappingURL=SimpleHtmlSanitizer.js.map
