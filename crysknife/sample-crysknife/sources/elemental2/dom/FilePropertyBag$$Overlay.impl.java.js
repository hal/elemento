goog.module('elemental2.dom.FilePropertyBag.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class FilePropertyBag_$Overlay {
 /** @return {FilePropertyBag} */
 static m_create__() {
  FilePropertyBag_$Overlay.$clinit();
  return /**@type {FilePropertyBag}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  FilePropertyBag_$Overlay.$clinit = () =>{};
  FilePropertyBag_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = FilePropertyBag_$Overlay; 
//# sourceMappingURL=FilePropertyBag$$Overlay.js.map
