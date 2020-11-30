goog.module('org.gwtproject.canvas.dom.client.Context2d.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CanvasPattern_$Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasPattern.$Overlay$impl');
let Composite = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.Composite$impl');
let LineCap = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.LineCap$impl');
let LineJoin = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.LineJoin$impl');
let Repetition = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.Repetition$impl');
let TextAlign = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.TextAlign$impl');
let TextBaseline = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.TextBaseline$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');

class Context2d_$Overlay {
 
 static m_arc__$devirt__org_gwtproject_canvas_dom_client_Context2d__double__double__double__double__double(/** !Object */ $thisArg, /** number */ x, /** number */ y, /** number */ radius, /** number */ startAngle, /** number */ endAngle) {
  Context2d_$Overlay.$clinit();
  $thisArg.arc(x, y, radius, startAngle, endAngle, false);
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_dom_client_CanvasElement__org_gwtproject_canvas_dom_client_Context2d_Repetition(/** !Object */ $thisArg, /** Object */ image, /** Repetition */ repetition) {
  Context2d_$Overlay.$clinit();
  return $thisArg.createPattern(image, repetition.m_getValue__());
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_dom_client_ImageElement__org_gwtproject_canvas_dom_client_Context2d_Repetition(/** !Object */ $thisArg, /** Object */ image, /** Repetition */ repetition) {
  Context2d_$Overlay.$clinit();
  return $thisArg.createPattern(image, repetition.m_getValue__());
 }
 
 static m_setFillStyle__$devirt__org_gwtproject_canvas_dom_client_Context2d__java_lang_String(/** !Object */ $thisArg, /** ?string */ fillStyleColor) {
  Context2d_$Overlay.$clinit();
  $thisArg.fillStyle = $Overlay.m_make__java_lang_String(fillStyleColor);
 }
 
 static m_setGlobalCompositeOperation__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_Composite(/** !Object */ $thisArg, /** Composite */ composite) {
  Context2d_$Overlay.$clinit();
  $thisArg.globalCompositeOperation = composite.m_getValue__();
 }
 
 static m_setLineCap__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_LineCap(/** !Object */ $thisArg, /** LineCap */ lineCap) {
  Context2d_$Overlay.$clinit();
  $thisArg.lineCap = lineCap.m_getValue__();
 }
 
 static m_setLineJoin__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_LineJoin(/** !Object */ $thisArg, /** LineJoin */ lineJoin) {
  Context2d_$Overlay.$clinit();
  $thisArg.lineJoin = lineJoin.m_getValue__();
 }
 
 static m_setStrokeStyle__$devirt__org_gwtproject_canvas_dom_client_Context2d__java_lang_String(/** !Object */ $thisArg, /** ?string */ strokeStyleColor) {
  Context2d_$Overlay.$clinit();
  $thisArg.strokeStyle = $Overlay.m_make__java_lang_String(strokeStyleColor);
 }
 
 static m_setTextAlign__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_TextAlign(/** !Object */ $thisArg, /** TextAlign */ align) {
  Context2d_$Overlay.$clinit();
  $thisArg.textAlign = align.m_getValue__();
 }
 
 static m_setTextBaseline__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_TextBaseline(/** !Object */ $thisArg, /** TextBaseline */ baseline) {
  Context2d_$Overlay.$clinit();
  $thisArg.textBaseline = baseline.m_getValue__();
 }
 
 static $clinit() {
  Context2d_$Overlay.$clinit = () =>{};
  Context2d_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(Context2d_$Overlay, 'Object');

/**@const {?string}*/
Context2d_$Overlay.f_CONTEXT_ID__org_gwtproject_canvas_dom_client_Context2d_$Overlay = "2d";

exports = Context2d_$Overlay; 
//# sourceMappingURL=Context2d$$Overlay.js.map
