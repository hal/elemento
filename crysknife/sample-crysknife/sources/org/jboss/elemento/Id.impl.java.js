goog.module('org.jboss.elemento.Id$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Id extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {?string} */
 static m_unique__() {
  Id.$clinit();
  let /** ?string */ id;
  do {
   id = j_l_String.m_valueOf__java_lang_Object(Id.f_UNIQUE_ID__org_jboss_elemento_Id_) + Id.f_counter__org_jboss_elemento_Id_;
   Id.f_counter__org_jboss_elemento_Id_++;
  }while (!$Equality.$same($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.getElementById(id), null));
  return id;
 }
 /** @return {?string} */
 static m_unique__java_lang_String__arrayOf_java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  return j_l_String.m_valueOf__java_lang_Object(Id.m_build__java_lang_String__arrayOf_java_lang_String(id, additionalIds)) + "-" + j_l_String.m_valueOf__java_lang_Object(Id.m_unique__());
 }
 /** @return {?string} */
 static m_build__java_lang_String__arrayOf_java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  return Id.m_build__java_lang_String__char__arrayOf_java_lang_String(id, 45 /* '-' */, additionalIds);
 }
 /** @return {?string} */
 static m_build__java_lang_String__char__arrayOf_java_lang_String(/** ?string */ id, /** number */ separator, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  if ($Equality.$same(id, null) || j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(id)) == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("ID must not be null or empty."));
  }
  let ids = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
  ids.add(id);
  if (!$Equality.$same(additionalIds, null)) {
   for (let $array = additionalIds, $index = 0; $index < $array.length; $index++) {
    let additionalId = $array[$index];
    if (!$Equality.$same(additionalId, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(additionalId)) != 0) {
     ids.add(additionalId);
    }
   }
  }
  return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (ids.m_stream__().m_map__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   return Id.m_asId__java_lang_String(arg0_1);
  }))).m_filter__java_util_function_Predicate(Predicate.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {?string}*/ ($Casts.$to(arg0_2, j_l_String));
   return Objects.m_nonNull__java_lang_Object(arg0_3);
  })).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence(j_l_String.m_valueOf__char(separator))), j_l_String));
 }
 /** @return {?string} */
 static m_asId__java_lang_String(/** ?string */ text) {
  Id.$clinit();
  let parts = j_l_String.m_split__java_lang_String__java_lang_String(text, "[-\\s]");
  let sanitized = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
  for (let $array = parts, $index = 0; $index < $array.length; $index++) {
   let part = $array[$index];
   if (!$Equality.$same(part, null)) {
    let s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(part, "\\s+", "");
    s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(s, "[^a-zA-Z0-9-_]", "");
    s = j_l_String.m_replace__java_lang_String__char__char(s, 95 /* '_' */, 45 /* '-' */);
    if (j_l_String.m_length__java_lang_String(s) != 0) {
     sanitized.add(s);
    }
   }
  }
  if (sanitized.isEmpty()) {
   return null;
  } else {
   return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (sanitized.m_stream__().m_filter__java_util_function_Predicate(Predicate.$adapt((s_1) =>{
    let s_2 = /**@type {?string}*/ ($Casts.$to(s_1, j_l_String));
    return !$Equality.$same(s_2, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(s_2)) != 0;
   })).m_map__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return j_l_String.m_toLowerCase__java_lang_String(arg0_1);
   }))).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence("-")), j_l_String));
  }
 }
 /** @return {!Id} */
 static $create__() {
  let $instance = new Id();
  $instance.$ctor__org_jboss_elemento_Id__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_Id__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Id.$clinit = () =>{};
  Id.$loadModules();
  j_l_Object.$clinit();
  Id.f_counter__org_jboss_elemento_Id_ = 0;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Id;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Id, 'org.jboss.elemento.Id');

/**@const {?string}*/
Id.f_UNIQUE_ID__org_jboss_elemento_Id_ = "id-";
/**@type {number}*/
Id.f_counter__org_jboss_elemento_Id_ = 0;

exports = Id; 
//# sourceMappingURL=Id.js.map
