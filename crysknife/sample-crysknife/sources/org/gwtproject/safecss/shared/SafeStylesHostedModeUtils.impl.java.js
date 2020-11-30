goog.module('org.gwtproject.safecss.shared.SafeStylesHostedModeUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Stack = goog.forwardDeclare('java.util.Stack$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class SafeStylesHostedModeUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeStylesHostedModeUtils} */
 static $create__() {
  SafeStylesHostedModeUtils.$clinit();
  let $instance = new SafeStylesHostedModeUtils();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_maybeCheckValidStyleName__java_lang_String(/** ?string */ name) {
  SafeStylesHostedModeUtils.$clinit();
  if ($Equality.$same("on", $Util.$getDefine("superdevmode")) || SafeStylesHostedModeUtils.f_forceCheck__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils_) {
   let errorText = SafeStylesHostedModeUtils.m_isValidStyleName__java_lang_String(name);
   if (!$Equality.$same(errorText, null)) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(errorText));
   }
  } else {
   $Asserts.$assertWithMessage($Equality.$same(SafeStylesHostedModeUtils.m_isValidStyleName__java_lang_String(name), null), SafeStylesHostedModeUtils.m_isValidStyleName__java_lang_String(name));
  }
 }
 /** @return {?string} */
 static m_isValidStyleName__java_lang_String(/** ?string */ name) {
  SafeStylesHostedModeUtils.$clinit();
  if ($Equality.$same(name, null) || j_l_String.m_isEmpty__java_lang_String(name)) {
   return "Style property names cannot be null or empty";
  }
  let firstReal = j_l_String.m_charAt__java_lang_String__int(name, 0);
  if (firstReal == 45 /* '-' */ && j_l_String.m_length__java_lang_String(name) > 0) {
   firstReal = j_l_String.m_charAt__java_lang_String__int(name, 1);
  }
  if (firstReal >= 48 /* '0' */ && firstReal <= 57 /* '9' */) {
   return "Style property names cannot start with a digit or a hyphen followed by a digit: " + j_l_String.m_valueOf__java_lang_Object(name);
  }
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String(name, "--")) {
   return "Style property names cannot start with a double hyphen: " + j_l_String.m_valueOf__java_lang_Object(name);
  }
  if (j_l_String.m_indexOf__java_lang_String__int(name, 59 /* ';' */) >= 0) {
   return "Style property names cannot contain a semi-colon: " + j_l_String.m_valueOf__java_lang_Object(name);
  } else if (j_l_String.m_indexOf__java_lang_String__int(name, 58 /* ':' */) >= 0) {
   return "Style property names cannot contain a colon: " + j_l_String.m_valueOf__java_lang_Object(name);
  }
  return null;
 }
 
 static m_maybeCheckValidStyleValue__java_lang_String(/** ?string */ value) {
  SafeStylesHostedModeUtils.$clinit();
  if ($Equality.$same("on", $Util.$getDefine("superdevmode")) || SafeStylesHostedModeUtils.f_forceCheck__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils_) {
   let errorText = SafeStylesHostedModeUtils.m_isValidStyleValue__java_lang_String(value);
   if (!$Equality.$same(errorText, null)) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(errorText));
   }
  } else {
   $Asserts.$assertWithMessage($Equality.$same(SafeStylesHostedModeUtils.m_isValidStyleValue__java_lang_String(value), null), SafeStylesHostedModeUtils.m_isValidStyleValue__java_lang_String(value));
  }
 }
 /** @return {?string} */
 static m_isValidStyleValue__java_lang_String(/** ?string */ value) {
  SafeStylesHostedModeUtils.$clinit();
  if ($Equality.$same(value, null) || j_l_String.m_length__java_lang_String(value) == 0) {
   return "Style property values cannot be null or empty";
  }
  let pairs = /**@type {!HashMap<Character, Character>}*/ (HashMap.$create__());
  pairs.put(Character.m_valueOf__char(40 /* '(' */), Character.m_valueOf__char(41 /* ')' */));
  pairs.put(Character.m_valueOf__char(91 /* '[' */), Character.m_valueOf__char(93 /* ']' */));
  pairs.put(Character.m_valueOf__char(123 /* '{' */), Character.m_valueOf__char(125 /* '}' */));
  let pairsStack = /**@type {!Stack<Character>}*/ (Stack.$create__());
  let pairsPos = /**@type {!Stack<Integer>}*/ (Stack.$create__());
  let inQuote = null;
  let inQuotePos = -1;
  let inUrl = false;
  let ignoreNext = false;
  for (let i = 0; i < j_l_String.m_length__java_lang_String(value); i++) {
   if (ignoreNext) {
    ignoreNext = false;
    continue;
   }
   let ch = j_l_String.m_charAt__java_lang_String__int(value, i);
   if (ch == 92 /* '\\' */) {
    ignoreNext = true;
    continue;
   }
   if (inUrl) {
    if (ch == 41 /* ')' */) {
     inUrl = false;
    } else if (ch == 40 /* '(' */) {
     return "Unescaped parentheses within a url at index " + i + ": " + j_l_String.m_valueOf__java_lang_Object(value);
    }
    continue;
   }
   if (!$Equality.$same(inQuote, null)) {
    if (ch == inQuote.m_charValue__()) {
     inQuote = null;
    }
    continue;
   }
   if (ch == 34 /* '\"' */ || ch == 39 /* '\'' */) {
    inQuote = Character.m_valueOf__char(ch);
    inQuotePos = i;
   } else if ((ch == 117 /* 'u' */ || ch == 85 /* 'U' */) && j_l_String.m_length__java_lang_String(value) >= i + 4 && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(value, i, i + 4), "url(")) {
    inUrl = true;
    i = i + 3;
   } else if (pairs.containsKey(Character.m_valueOf__char(ch))) {
    pairsStack.m_push__java_lang_Object(Character.m_valueOf__char(ch));
    pairsPos.m_push__java_lang_Object(Integer.m_valueOf__int(i));
   } else if (pairs.values().contains(Character.m_valueOf__char(ch))) {
    if (pairsStack.isEmpty() || /**@type {Character}*/ ($Casts.$to(pairs.get(/**@type {Character}*/ ($Casts.$to(pairsStack.m_pop__(), Character))), Character)).m_charValue__() != ch) {
     return "Style property value contains unpaired '" + j_l_String.m_valueOf__char(ch) + "' at index " + i + ": " + j_l_String.m_valueOf__java_lang_Object(value);
    }
    pairsPos.m_pop__();
   } else if (ch == 59 /* ';' */) {
    return "Style property values cannot contain a semi-colon (except within quotes): " + j_l_String.m_valueOf__java_lang_Object(value);
   } else if (ch == 58 /* ':' */) {
    return "Style property values cannot contain a colon (except within quotes): " + j_l_String.m_valueOf__java_lang_Object(value);
   }
  }
  if (!$Equality.$same(inQuote, null)) {
   return "Style property value contains unpaired open quote at index " + inQuotePos + ": " + j_l_String.m_valueOf__java_lang_Object(value);
  }
  if (inUrl) {
   return "Style property value contains an unterminated url: " + j_l_String.m_valueOf__java_lang_Object(value);
  }
  if (!pairsStack.isEmpty()) {
   let openToken = /**@type {Character}*/ ($Casts.$to(pairsStack.m_pop__(), Character)).m_charValue__();
   let index = /**@type {Integer}*/ ($Casts.$to(pairsPos.m_pop__(), Integer)).m_intValue__();
   return "Style property value contains unpaired '" + j_l_String.m_valueOf__char(openToken) + "' at index " + index + ": " + j_l_String.m_valueOf__java_lang_Object(value);
  }
  if (ignoreNext) {
   return "Style property values cannot end in an escape character: " + j_l_String.m_valueOf__java_lang_Object(value);
  }
  return null;
 }
 
 static m_setForceCheckValidStyle__boolean(/** boolean */ check) {
  SafeStylesHostedModeUtils.$clinit();
  SafeStylesHostedModeUtils.f_forceCheck__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils_ = check;
 }
 
 static m_setForceCheckValidStyleFromProperty__() {
  SafeStylesHostedModeUtils.$clinit();
  SafeStylesHostedModeUtils.f_forceCheck__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils_ = !$Equality.$same($Util.$getDefine("org.gwtproject.safecss.ForceCheckValidStyles"), null);
 }
 
 static $clinit() {
  SafeStylesHostedModeUtils.$clinit = () =>{};
  SafeStylesHostedModeUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeStylesHostedModeUtils;
 }
 
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Stack = goog.module.get('java.util.Stack$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SafeStylesHostedModeUtils, 'org.gwtproject.safecss.shared.SafeStylesHostedModeUtils');

/**@type {boolean}*/
SafeStylesHostedModeUtils.f_forceCheck__org_gwtproject_safecss_shared_SafeStylesHostedModeUtils_ = false;

exports = SafeStylesHostedModeUtils; 
//# sourceMappingURL=SafeStylesHostedModeUtils.js.map
