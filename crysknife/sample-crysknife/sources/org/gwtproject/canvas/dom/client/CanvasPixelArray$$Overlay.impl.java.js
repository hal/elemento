goog.module('org.gwtproject.canvas.dom.client.CanvasPixelArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Uint8ClampedArray_$Overlay = goog.forwardDeclare('elemental2.core.Uint8ClampedArray.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CanvasPixelArray_$Overlay {
 /** @return {number} */
 static m_get__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int(/** !Object */ $thisArg, /** number */ i) {
  CanvasPixelArray_$Overlay.$clinit();
  let value = /**@type {?number}*/ ($Casts.$to($Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(/**@type {Uint8ClampedArray}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($thisArg), Uint8ClampedArray_$Overlay)), i), Double));
  return Js.m_isTruthy__java_lang_Object(value) ? Js.m_asInt__java_lang_Object(value) : 0;
 }
 /** @return {number} */
 static m_getLength__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray(/** !Object */ $thisArg) {
  CanvasPixelArray_$Overlay.$clinit();
  return /**@type {Uint8ClampedArray}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($thisArg), Uint8ClampedArray_$Overlay)).length;
 }
 
 static m_set__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int__int(/** !Object */ $thisArg, /** number */ i, /** number */ value) {
  CanvasPixelArray_$Overlay.$clinit();
  $Overlay.m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(/**@type {Uint8ClampedArray}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($thisArg), Uint8ClampedArray_$Overlay)), i, value);
 }
 
 static $clinit() {
  CanvasPixelArray_$Overlay.$clinit = () =>{};
  CanvasPixelArray_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Uint8ClampedArray_$Overlay = goog.module.get('elemental2.core.Uint8ClampedArray.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CanvasPixelArray_$Overlay, 'Object');

exports = CanvasPixelArray_$Overlay; 
//# sourceMappingURL=CanvasPixelArray$$Overlay.js.map
