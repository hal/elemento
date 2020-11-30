goog.module('org.gwtproject.dom.client.ModElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ModElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  ModElement_$Overlay.$clinit();
  $Asserts.$assert(ModElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, ModElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  ModElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return ModElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  ModElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return ModElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  ModElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), ModElement_$Overlay.f_TAG_INS__org_gwtproject_dom_client_ModElement_$Overlay) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), ModElement_$Overlay.f_TAG_DEL__org_gwtproject_dom_client_ModElement_$Overlay));
 }
 
 static m_setCite__$devirt__org_gwtproject_dom_client_ModElement__org_gwtproject_safehtml_shared_SafeUri(/** !Object */ $thisArg, /** SafeUri */ cite) {
  ModElement_$Overlay.$clinit();
  $thisArg.cite = cite.m_asString__();
 }
 
 static $clinit() {
  ModElement_$Overlay.$clinit = () =>{};
  ModElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ModElement_$Overlay, 'Object');

/**@const {?string}*/
ModElement_$Overlay.f_TAG_INS__org_gwtproject_dom_client_ModElement_$Overlay = "ins";
/**@const {?string}*/
ModElement_$Overlay.f_TAG_DEL__org_gwtproject_dom_client_ModElement_$Overlay = "del";

exports = ModElement_$Overlay; 
//# sourceMappingURL=ModElement$$Overlay.js.map
