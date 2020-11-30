goog.module('elemental2.dom.FormData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.FormData.AppendValueUnionType.$Overlay$impl');
let SetValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.SetValueUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class FormData_$Overlay {
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  FormData_$Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  FormData_$Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  FormData_$Overlay.$clinit = () =>{};
  FormData_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormData;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(FormData_$Overlay, 'FormData');

exports = FormData_$Overlay; 
//# sourceMappingURL=FormData$$Overlay.js.map
