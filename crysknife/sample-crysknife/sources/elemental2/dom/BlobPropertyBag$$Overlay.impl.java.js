goog.module('elemental2.dom.BlobPropertyBag.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class BlobPropertyBag_$Overlay {
 /** @return {BlobPropertyBag} */
 static m_create__() {
  BlobPropertyBag_$Overlay.$clinit();
  return /**@type {BlobPropertyBag}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  BlobPropertyBag_$Overlay.$clinit = () =>{};
  BlobPropertyBag_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = BlobPropertyBag_$Overlay; 
//# sourceMappingURL=BlobPropertyBag$$Overlay.js.map
