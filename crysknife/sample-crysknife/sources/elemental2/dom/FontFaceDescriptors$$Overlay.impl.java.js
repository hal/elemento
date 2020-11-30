goog.module('elemental2.dom.FontFaceDescriptors.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class FontFaceDescriptors_$Overlay {
 /** @return {FontFaceDescriptors} */
 static m_create__() {
  FontFaceDescriptors_$Overlay.$clinit();
  return /**@type {FontFaceDescriptors}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  FontFaceDescriptors_$Overlay.$clinit = () =>{};
  FontFaceDescriptors_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = FontFaceDescriptors_$Overlay; 
//# sourceMappingURL=FontFaceDescriptors$$Overlay.js.map
