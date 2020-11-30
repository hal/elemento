goog.module('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ScrollIntoViewOptions_$Overlay {
 /** @return {ScrollIntoViewOptions} */
 static m_create__() {
  ScrollIntoViewOptions_$Overlay.$clinit();
  return /**@type {ScrollIntoViewOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ScrollIntoViewOptions_$Overlay.$clinit = () =>{};
  ScrollIntoViewOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ScrollIntoViewOptions_$Overlay; 
//# sourceMappingURL=ScrollIntoViewOptions$$Overlay.js.map
