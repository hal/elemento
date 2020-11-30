goog.module('elemental2.dom.HTMLDialogElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDialogElement.ShowAnchorUnionType.$Overlay$impl');
let ShowModalAnchorUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDialogElement.ShowModalAnchorUnionType.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLDialogElement_$Overlay {
 
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  HTMLDialogElement_$Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  HTMLDialogElement_$Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  HTMLDialogElement_$Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  HTMLDialogElement_$Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(anchor)));
 }
 
 static $clinit() {
  HTMLDialogElement_$Overlay.$clinit = () =>{};
  HTMLDialogElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDialogElement;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLDialogElement_$Overlay, 'HTMLDialogElement');

exports = HTMLDialogElement_$Overlay; 
//# sourceMappingURL=HTMLDialogElement$$Overlay.js.map
