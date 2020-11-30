goog.module('elemental2.dom.DoubleRange.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class DoubleRange_$Overlay {
 /** @return {DoubleRange} */
 static m_create__() {
  DoubleRange_$Overlay.$clinit();
  return /**@type {DoubleRange}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  DoubleRange_$Overlay.$clinit = () =>{};
  DoubleRange_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = DoubleRange_$Overlay; 
//# sourceMappingURL=DoubleRange$$Overlay.js.map
