goog.module('org.gwtproject.canvas.dom.client.FillStrokeStyle.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasGradient.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasPattern.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class FillStrokeStyle_$Overlay {
 /** @return {number} */
 static m_getType__$devirt__org_gwtproject_canvas_dom_client_FillStrokeStyle(/** !Object */ $thisArg) {
  FillStrokeStyle_$Overlay.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(typeof($thisArg), "string")) {
   return FillStrokeStyle_$Overlay.f_TYPE_CSSCOLOR__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay;
  } else if ($Overlay.$isInstance($thisArg)) {
   return FillStrokeStyle_$Overlay.f_TYPE_GRADIENT__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay;
  } else {
   $Asserts.$assertWithMessage(CanvasPattern_$Overlay.$isInstance($thisArg), "Expected pattern, unknown type " + j_l_String.m_valueOf__java_lang_Object($Objects.m_toString__java_lang_Object($thisArg)));
   return FillStrokeStyle_$Overlay.f_TYPE_PATTERN__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay;
  }
 }
 
 static $clinit() {
  FillStrokeStyle_$Overlay.$clinit = () =>{};
  FillStrokeStyle_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CanvasGradient.$Overlay$impl');
  CanvasPattern_$Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CanvasPattern.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(FillStrokeStyle_$Overlay, 'Object');

/**@const {number}*/
FillStrokeStyle_$Overlay.f_TYPE_CSSCOLOR__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay = 0;
/**@const {number}*/
FillStrokeStyle_$Overlay.f_TYPE_GRADIENT__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay = 1;
/**@const {number}*/
FillStrokeStyle_$Overlay.f_TYPE_PATTERN__org_gwtproject_canvas_dom_client_FillStrokeStyle_$Overlay = 2;

exports = FillStrokeStyle_$Overlay; 
//# sourceMappingURL=FillStrokeStyle$$Overlay.js.map
