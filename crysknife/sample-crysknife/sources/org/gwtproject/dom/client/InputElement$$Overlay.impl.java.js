goog.module('org.gwtproject.dom.client.InputElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InputElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  InputElement_$Overlay.$clinit();
  $Asserts.$assert(InputElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, InputElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  InputElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return InputElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  InputElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return InputElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  InputElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, InputElement_$Overlay.f_TAG__org_gwtproject_dom_client_InputElement_$Overlay);
 }
 /** @return {boolean} */
 static m_isChecked__$devirt__org_gwtproject_dom_client_InputElement(/** !Object */ $thisArg) {
  InputElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).checked);
 }
 /** @return {boolean} */
 static m_isDefaultChecked__$devirt__org_gwtproject_dom_client_InputElement(/** !Object */ $thisArg) {
  InputElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).defaultChecked);
 }
 /** @return {boolean} */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_InputElement(/** !Object */ $thisArg) {
  InputElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 /** @return {boolean} */
 static m_isReadOnly__$devirt__org_gwtproject_dom_client_InputElement(/** !Object */ $thisArg) {
  InputElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).readOnly);
 }
 /** @return {boolean} */
 static m_useMap__$devirt__org_gwtproject_dom_client_InputElement(/** !Object */ $thisArg) {
  InputElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).useMap);
 }
 
 static $clinit() {
  InputElement_$Overlay.$clinit = () =>{};
  InputElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(InputElement_$Overlay, 'Object');

/**@const {?string}*/
InputElement_$Overlay.f_TAG__org_gwtproject_dom_client_InputElement_$Overlay = "input";

exports = InputElement_$Overlay; 
//# sourceMappingURL=InputElement$$Overlay.js.map
