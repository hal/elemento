goog.module('elemental2.dom.GetRootNodeOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class GetRootNodeOptions_$Overlay {
 /** @return {GetRootNodeOptions} */
 static m_create__() {
  GetRootNodeOptions_$Overlay.$clinit();
  return /**@type {GetRootNodeOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  GetRootNodeOptions_$Overlay.$clinit = () =>{};
  GetRootNodeOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = GetRootNodeOptions_$Overlay; 
//# sourceMappingURL=GetRootNodeOptions$$Overlay.js.map
