goog.module('elemental2.webstorage.WebStorageWindow.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class WebStorageWindow_$Overlay {
 /** @return {Window} */
 static m_of__elemental2_dom_Window(/** Window */ o) {
  WebStorageWindow_$Overlay.$clinit();
  return /**@type {Window}*/ ($Casts.$to(Js.m_cast__java_lang_Object(o), WebStorageWindow_$Overlay));
 }
 
 static $clinit() {
  WebStorageWindow_$Overlay.$clinit = () =>{};
  WebStorageWindow_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(WebStorageWindow_$Overlay, 'Window');

exports = WebStorageWindow_$Overlay; 
//# sourceMappingURL=WebStorageWindow$$Overlay.js.map
