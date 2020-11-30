goog.module('elemental2.dom.HTMLObjectElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.TSetPropertyValueUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class HTMLObjectElement_$Overlay {
 
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__java_lang_String(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** ?string */ value) {
  HTMLObjectElement_$Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__double(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** number */ value) {
  HTMLObjectElement_$Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  HTMLObjectElement_$Overlay.$clinit = () =>{};
  HTMLObjectElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLObjectElement;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(HTMLObjectElement_$Overlay, 'HTMLObjectElement');

exports = HTMLObjectElement_$Overlay; 
//# sourceMappingURL=HTMLObjectElement$$Overlay.js.map
