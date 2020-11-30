goog.module('elemental2.dom.ImageBitmapOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ImageBitmapOptions_$Overlay {
 /** @return {ImageBitmapOptions} */
 static m_create__() {
  ImageBitmapOptions_$Overlay.$clinit();
  return /**@type {ImageBitmapOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ImageBitmapOptions_$Overlay.$clinit = () =>{};
  ImageBitmapOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ImageBitmapOptions_$Overlay; 
//# sourceMappingURL=ImageBitmapOptions$$Overlay.js.map
