goog.module('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLTextAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextAreaElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TextAreaElement_$Overlay.$clinit();
  $Asserts.$assert(TextAreaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, TextAreaElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  TextAreaElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return TextAreaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  TextAreaElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return TextAreaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TextAreaElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, TextAreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_TextAreaElement_$Overlay);
 }
 /** @return {boolean} */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_TextAreaElement(/** !Object */ $thisArg) {
  TextAreaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLTextAreaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 /** @return {boolean} */
 static m_isReadOnly__$devirt__org_gwtproject_dom_client_TextAreaElement(/** !Object */ $thisArg) {
  TextAreaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLTextAreaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).readOnly);
 }
 
 static $clinit() {
  TextAreaElement_$Overlay.$clinit = () =>{};
  TextAreaElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TextAreaElement_$Overlay, 'Object');

/**@const {?string}*/
TextAreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_TextAreaElement_$Overlay = "textarea";

exports = TextAreaElement_$Overlay; 
//# sourceMappingURL=TextAreaElement$$Overlay.js.map
