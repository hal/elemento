goog.module('org.gwtproject.dom.client.NodeCollection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');

class NodeCollection_$Overlay {
 /** @template T @return {T} */
 static m_getItem__$devirt__org_gwtproject_dom_client_NodeCollection__int(/** !Object<string, T> */ $thisArg, /** number */ index) {
  NodeCollection_$Overlay.$clinit();
  return /**@type {T}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(Js.m_asArrayLike__java_lang_Object($thisArg), index)));
 }
 /** @template T @return {T} */
 static m_getNamedItem__$devirt__org_gwtproject_dom_client_NodeCollection__java_lang_String(/** !Object<string, T> */ $thisArg, /** ?string */ name) {
  NodeCollection_$Overlay.$clinit();
  return /**@type {T}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object($thisArg), name)));
 }
 
 static $clinit() {
  NodeCollection_$Overlay.$clinit = () =>{};
  NodeCollection_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(NodeCollection_$Overlay, 'Object');

exports = NodeCollection_$Overlay; 
//# sourceMappingURL=NodeCollection$$Overlay.js.map
