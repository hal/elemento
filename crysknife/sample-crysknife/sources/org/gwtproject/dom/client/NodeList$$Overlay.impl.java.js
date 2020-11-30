goog.module('org.gwtproject.dom.client.NodeList.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');

class NodeList_$Overlay {
 /** @template T @return {T} */
 static m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(/** !Object<string, T> */ $thisArg, /** number */ index) {
  NodeList_$Overlay.$clinit();
  return /**@type {T}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(Js.m_asArrayLike__java_lang_Object($thisArg), index)));
 }
 
 static $clinit() {
  NodeList_$Overlay.$clinit = () =>{};
  NodeList_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(NodeList_$Overlay, 'Object');

exports = NodeList_$Overlay; 
//# sourceMappingURL=NodeList$$Overlay.js.map
