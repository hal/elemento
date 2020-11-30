goog.module('elemental2.dom.ITransformStream.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ITransformStream_$Overlay {
 /** @return {ITransformStream} */
 static m_create__() {
  ITransformStream_$Overlay.$clinit();
  return /**@type {ITransformStream}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ITransformStream_$Overlay.$clinit = () =>{};
  ITransformStream_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ITransformStream_$Overlay; 
//# sourceMappingURL=ITransformStream$$Overlay.js.map
