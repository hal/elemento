goog.module('elemental2.dom.ReadableStreamSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ReadableStreamSource_$Overlay {
 /** @return {ReadableStreamSource} */
 static m_create__() {
  ReadableStreamSource_$Overlay.$clinit();
  return /**@type {ReadableStreamSource}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ReadableStreamSource_$Overlay.$clinit = () =>{};
  ReadableStreamSource_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ReadableStreamSource_$Overlay; 
//# sourceMappingURL=ReadableStreamSource$$Overlay.js.map
