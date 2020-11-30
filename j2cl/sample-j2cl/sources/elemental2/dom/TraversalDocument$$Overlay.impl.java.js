goog.module('elemental2.dom.TraversalDocument.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TraversalDocument_$Overlay {
 /** @return {TraversalDocument} */
 static m_create__() {
  TraversalDocument_$Overlay.$clinit();
  return /**@type {TraversalDocument}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  TraversalDocument_$Overlay.$clinit = () =>{};
  TraversalDocument_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TraversalDocument_$Overlay; 
//# sourceMappingURL=TraversalDocument$$Overlay.js.map
