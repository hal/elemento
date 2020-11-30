goog.module('elemental2.dom.IdleCallbackOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class IdleCallbackOptions_$Overlay {
 /** @return {IdleCallbackOptions} */
 static m_create__() {
  IdleCallbackOptions_$Overlay.$clinit();
  return /**@type {IdleCallbackOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  IdleCallbackOptions_$Overlay.$clinit = () =>{};
  IdleCallbackOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = IdleCallbackOptions_$Overlay; 
//# sourceMappingURL=IdleCallbackOptions$$Overlay.js.map
