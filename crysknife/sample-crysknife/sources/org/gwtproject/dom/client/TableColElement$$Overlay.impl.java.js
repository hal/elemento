goog.module('org.gwtproject.dom.client.TableColElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TableColElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableColElement_$Overlay.$clinit();
  $Asserts.$assert(TableColElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, TableColElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  TableColElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return TableColElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  TableColElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return TableColElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableColElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), TableColElement_$Overlay.f_TAG_COL__org_gwtproject_dom_client_TableColElement_$Overlay) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), TableColElement_$Overlay.f_TAG_COLGROUP__org_gwtproject_dom_client_TableColElement_$Overlay));
 }
 
 static $clinit() {
  TableColElement_$Overlay.$clinit = () =>{};
  TableColElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(TableColElement_$Overlay, 'Object');

/**@const {?string}*/
TableColElement_$Overlay.f_TAG_COL__org_gwtproject_dom_client_TableColElement_$Overlay = "col";
/**@const {?string}*/
TableColElement_$Overlay.f_TAG_COLGROUP__org_gwtproject_dom_client_TableColElement_$Overlay = "colgroup";

exports = TableColElement_$Overlay; 
//# sourceMappingURL=TableColElement$$Overlay.js.map
