goog.module('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class IFrameElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  IFrameElement_$Overlay.$clinit();
  $Asserts.$assert(IFrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, IFrameElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  IFrameElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return IFrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  IFrameElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return IFrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  IFrameElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, IFrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_IFrameElement_$Overlay);
 }
 /** @return {boolean} */
 static m_isNoResize__$devirt__org_gwtproject_dom_client_IFrameElement(/** !Object */ $thisArg) {
  IFrameElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.noResize);
 }
 
 static m_setSrc__$devirt__org_gwtproject_dom_client_IFrameElement__org_gwtproject_safehtml_shared_SafeUri(/** !Object */ $thisArg, /** SafeUri */ src) {
  IFrameElement_$Overlay.$clinit();
  $thisArg.src = src.m_asString__();
 }
 
 static $clinit() {
  IFrameElement_$Overlay.$clinit = () =>{};
  IFrameElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(IFrameElement_$Overlay, 'Object');

/**@const {?string}*/
IFrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_IFrameElement_$Overlay = "iframe";

exports = IFrameElement_$Overlay; 
//# sourceMappingURL=IFrameElement$$Overlay.js.map
