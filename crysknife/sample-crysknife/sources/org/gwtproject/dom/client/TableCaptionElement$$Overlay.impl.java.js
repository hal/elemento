goog.module('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TableCaptionElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableCaptionElement_$Overlay.$clinit();
  $Asserts.$assert(TableCaptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, TableCaptionElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  TableCaptionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return TableCaptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  TableCaptionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return TableCaptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableCaptionElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, TableCaptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableCaptionElement_$Overlay);
 }
 
 static $clinit() {
  TableCaptionElement_$Overlay.$clinit = () =>{};
  TableCaptionElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TableCaptionElement_$Overlay, 'Object');

/**@const {?string}*/
TableCaptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableCaptionElement_$Overlay = "caption";

exports = TableCaptionElement_$Overlay; 
//# sourceMappingURL=TableCaptionElement$$Overlay.js.map
