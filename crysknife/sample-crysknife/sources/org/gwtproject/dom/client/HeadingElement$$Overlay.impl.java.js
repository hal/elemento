goog.module('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

class HeadingElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  HeadingElement_$Overlay.$clinit();
  if (Class.$get($JavaScriptObject).m_desiredAssertionStatus__()) {
   $Asserts.$assert(HeadingElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  }
  return /**@type {Object}*/ ($Casts.$to(elem, HeadingElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  HeadingElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return HeadingElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  HeadingElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return HeadingElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  HeadingElement_$Overlay.$clinit();
  if ($Equality.$same(elem, null)) {
   return false;
  }
  let tag = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), Locale.f_ROOT__java_util_Locale);
  if (j_l_String.m_length__java_lang_String(tag) != 2) {
   return false;
  }
  if (j_l_String.m_charAt__java_lang_String__int(tag, 0) != 104 /* 'h' */) {
   return false;
  }
  let n = Integer.m_parseInt__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(tag, 1, 2));
  if (n < 1 || n > 6) {
   return false;
  }
  return true;
 }
 /** @return {Array<?string>} */
 static get f_TAGS__org_gwtproject_dom_client_HeadingElement_$Overlay() {
  return (HeadingElement_$Overlay.$clinit(), HeadingElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 
 static $clinit() {
  HeadingElement_$Overlay.$clinit = () =>{};
  HeadingElement_$Overlay.$loadModules();
  HeadingElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_HeadingElement_$Overlay = /**@type {!Array<?string>}*/ ($Arrays.$init([HeadingElement_$Overlay.f_TAG_H1__org_gwtproject_dom_client_HeadingElement_$Overlay, HeadingElement_$Overlay.f_TAG_H2__org_gwtproject_dom_client_HeadingElement_$Overlay, HeadingElement_$Overlay.f_TAG_H3__org_gwtproject_dom_client_HeadingElement_$Overlay, HeadingElement_$Overlay.f_TAG_H4__org_gwtproject_dom_client_HeadingElement_$Overlay, HeadingElement_$Overlay.f_TAG_H5__org_gwtproject_dom_client_HeadingElement_$Overlay, HeadingElement_$Overlay.f_TAG_H6__org_gwtproject_dom_client_HeadingElement_$Overlay], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
 
}
$Util.$setClassMetadata(HeadingElement_$Overlay, 'Object');

/**@private {Array<?string>}*/
HeadingElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_HeadingElement_$Overlay;
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H1__org_gwtproject_dom_client_HeadingElement_$Overlay = "h1";
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H2__org_gwtproject_dom_client_HeadingElement_$Overlay = "h2";
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H3__org_gwtproject_dom_client_HeadingElement_$Overlay = "h3";
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H4__org_gwtproject_dom_client_HeadingElement_$Overlay = "h4";
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H5__org_gwtproject_dom_client_HeadingElement_$Overlay = "h5";
/**@const {?string}*/
HeadingElement_$Overlay.f_TAG_H6__org_gwtproject_dom_client_HeadingElement_$Overlay = "h6";

exports = HeadingElement_$Overlay; 
//# sourceMappingURL=HeadingElement$$Overlay.js.map
