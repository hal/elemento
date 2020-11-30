goog.module('elemental2.dom.ShareData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ShareData_$Overlay {
 /** @return {ShareData} */
 static m_create__() {
  ShareData_$Overlay.$clinit();
  return /**@type {ShareData}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ShareData_$Overlay.$clinit = () =>{};
  ShareData_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ShareData_$Overlay; 
//# sourceMappingURL=ShareData$$Overlay.js.map
