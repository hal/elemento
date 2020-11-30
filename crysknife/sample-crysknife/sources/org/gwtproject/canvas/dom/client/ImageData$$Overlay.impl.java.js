goog.module('org.gwtproject.canvas.dom.client.ImageData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasPixelArray.$Overlay$impl');

class ImageData_$Overlay {
 /** @return {number} */
 static m_getAlphaAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int(/** !Object */ $thisArg, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /** @return {number} */
 static m_getBlueAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int(/** !Object */ $thisArg, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /** @return {number} */
 static m_getGreenAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int(/** !Object */ $thisArg, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /** @return {number} */
 static m_getRedAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int(/** !Object */ $thisArg, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 
 static m_setAlphaAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int(/** !Object */ $thisArg, /** number */ alpha, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, alpha, x, y, ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 
 static m_setBlueAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int(/** !Object */ $thisArg, /** number */ blue, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, blue, x, y, ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 
 static m_setGreenAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int(/** !Object */ $thisArg, /** number */ green, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, green, x, y, ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 
 static m_setRedAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int(/** !Object */ $thisArg, /** number */ red, /** number */ x, /** number */ y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, red, x, y, ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /** @return {number} */
 static m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int(/** !Object */ $thisArg, /** number */ x, /** number */ y, /** number */ offset) {
  let index = ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ * (x + y * $thisArg.width) + offset;
  if (index < 0 || index >= $Overlay.m_getLength__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray($thisArg.data)) {
   return 0;
  }
  return $Overlay.m_get__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int($thisArg.data, index);
 }
 
 static m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int(/** !Object */ $thisArg, /** number */ color, /** number */ x, /** number */ y, /** number */ offset) {
  let index = ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ * (x + y * $thisArg.width) + offset;
  $Overlay.m_set__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int__int($thisArg.data, index, color);
 }
 
 static $clinit() {
  ImageData_$Overlay.$clinit = () =>{};
  ImageData_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CanvasPixelArray.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(ImageData_$Overlay, 'Object');

/**@const {number}*/
ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 4;
/**@const {number}*/
ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 0;
/**@const {number}*/
ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 1;
/**@const {number}*/
ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 2;
/**@const {number}*/
ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 3;

exports = ImageData_$Overlay; 
//# sourceMappingURL=ImageData$$Overlay.js.map
