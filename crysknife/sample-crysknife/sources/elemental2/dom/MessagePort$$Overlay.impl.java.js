goog.module('elemental2.dom.MessagePort.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MessagePort_$Overlay {
 
 static m_postMessage__$devirt__elemental2_dom_MessagePort__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !MessagePort */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  MessagePort_$Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static $clinit() {
  MessagePort_$Overlay.$clinit = () =>{};
  MessagePort_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MessagePort;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(MessagePort_$Overlay, 'MessagePort');

exports = MessagePort_$Overlay; 
//# sourceMappingURL=MessagePort$$Overlay.js.map
