goog.module('elemental2.dom.HTMLOptionsCollection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionsCollection.AddBeforeUnionType.$Overlay$impl');
let AddElementUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionsCollection.AddElementUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLOptionsCollection_$Overlay {
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionsCollection_AddElementUnionType__elemental2_dom_HTMLElement(/** !HTMLOptionsCollection */ $thisArg, /** ? */ element, /** HTMLElement */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(element, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionsCollection_AddElementUnionType__double(/** !HTMLOptionsCollection */ $thisArg, /** ? */ element, /** number */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(element, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptGroupElement */ element, /** ? */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), before);
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__elemental2_dom_HTMLElement(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptGroupElement */ element, /** HTMLElement */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement__double(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptGroupElement */ element, /** number */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptGroupElement(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptGroupElement */ element) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptionElement */ element, /** ? */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), before);
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__elemental2_dom_HTMLElement(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptionElement */ element, /** HTMLElement */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement__double(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptionElement */ element, /** number */ before) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 
 static m_add__$devirt__elemental2_dom_HTMLOptionsCollection__elemental2_dom_HTMLOptionElement(/** !HTMLOptionsCollection */ $thisArg, /** HTMLOptionElement */ element) {
  HTMLOptionsCollection_$Overlay.$clinit();
  $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(element)));
 }
 
 static $clinit() {
  HTMLOptionsCollection_$Overlay.$clinit = () =>{};
  HTMLOptionsCollection_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLOptionsCollection;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLOptionsCollection_$Overlay, 'HTMLOptionsCollection');

exports = HTMLOptionsCollection_$Overlay; 
//# sourceMappingURL=HTMLOptionsCollection$$Overlay.js.map
