goog.module('elemental2.dom.WritableStreamSink.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class WritableStreamSink_$Overlay {
 /** @return {WritableStreamSink} */
 static m_create__() {
  WritableStreamSink_$Overlay.$clinit();
  return /**@type {WritableStreamSink}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  WritableStreamSink_$Overlay.$clinit = () =>{};
  WritableStreamSink_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = WritableStreamSink_$Overlay; 
//# sourceMappingURL=WritableStreamSink$$Overlay.js.map
