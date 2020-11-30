goog.module('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class OptGroupElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  OptGroupElement_$Overlay.$clinit();
  $Asserts.$assert(OptGroupElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, OptGroupElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  OptGroupElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return OptGroupElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  OptGroupElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return OptGroupElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  OptGroupElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, OptGroupElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptGroupElement_$Overlay);
 }
 /** @return {boolean} */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_OptGroupElement(/** !Object */ $thisArg) {
  OptGroupElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLOptGroupElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 
 static $clinit() {
  OptGroupElement_$Overlay.$clinit = () =>{};
  OptGroupElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(OptGroupElement_$Overlay, 'Object');

/**@const {?string}*/
OptGroupElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptGroupElement_$Overlay = "optgroup";

exports = OptGroupElement_$Overlay; 
//# sourceMappingURL=OptGroupElement$$Overlay.js.map
