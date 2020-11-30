goog.module('elemental2.dom.PipeOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class PipeOptions_$Overlay {
 /** @return {PipeOptions} */
 static m_create__() {
  PipeOptions_$Overlay.$clinit();
  return /**@type {PipeOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  PipeOptions_$Overlay.$clinit = () =>{};
  PipeOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = PipeOptions_$Overlay; 
//# sourceMappingURL=PipeOptions$$Overlay.js.map
