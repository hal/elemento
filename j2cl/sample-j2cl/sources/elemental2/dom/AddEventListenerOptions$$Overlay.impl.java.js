goog.module('elemental2.dom.AddEventListenerOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class AddEventListenerOptions_$Overlay {
 /** @return {AddEventListenerOptions} */
 static m_create__() {
  AddEventListenerOptions_$Overlay.$clinit();
  return /**@type {AddEventListenerOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  AddEventListenerOptions_$Overlay.$clinit = () =>{};
  AddEventListenerOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = AddEventListenerOptions_$Overlay; 
//# sourceMappingURL=AddEventListenerOptions$$Overlay.js.map
