goog.module('elemental2.dom.Element.BeforeNodesUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BeforeNodesUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  BeforeNodesUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Node} */
 static m_asNode__$devirt__elemental2_dom_Element_BeforeNodesUnionType(/** ? */ $thisArg) {
  BeforeNodesUnionType_$Overlay.$clinit();
  return /**@type {Node}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_Element_BeforeNodesUnionType(/** ? */ $thisArg) {
  BeforeNodesUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isNode__$devirt__elemental2_dom_Element_BeforeNodesUnionType(/** ? */ $thisArg) {
  BeforeNodesUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Element_BeforeNodesUnionType(/** ? */ $thisArg) {
  BeforeNodesUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  BeforeNodesUnionType_$Overlay.$clinit = () =>{};
  BeforeNodesUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = BeforeNodesUnionType_$Overlay; 
//# sourceMappingURL=Element$BeforeNodesUnionType$$Overlay.js.map
