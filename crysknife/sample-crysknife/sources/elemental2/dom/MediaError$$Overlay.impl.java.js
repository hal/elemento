goog.module('elemental2.dom.MediaError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_MEDIA_ERR_ABORTED__elemental2_dom_MediaError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_MEDIA_ERR_ABORTED__elemental2_dom_MediaError_$Overlay);
 }
 /** @return {number} */
 static get f_MEDIA_ERR_DECODE__elemental2_dom_MediaError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_MEDIA_ERR_DECODE__elemental2_dom_MediaError_$Overlay);
 }
 /** @return {number} */
 static get f_MEDIA_ERR_NETWORK__elemental2_dom_MediaError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_MEDIA_ERR_NETWORK__elemental2_dom_MediaError_$Overlay);
 }
 /** @return {number} */
 static get f_MEDIA_ERR_SRC_NOT_SUPPORTED__elemental2_dom_MediaError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_MEDIA_ERR_SRC_NOT_SUPPORTED__elemental2_dom_MediaError_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_MEDIA_ERR_ABORTED__elemental2_dom_MediaError_$Overlay = MediaError.MEDIA_ERR_ABORTED;
  $Overlay.$f_MEDIA_ERR_DECODE__elemental2_dom_MediaError_$Overlay = MediaError.MEDIA_ERR_DECODE;
  $Overlay.$f_MEDIA_ERR_NETWORK__elemental2_dom_MediaError_$Overlay = MediaError.MEDIA_ERR_NETWORK;
  $Overlay.$f_MEDIA_ERR_SRC_NOT_SUPPORTED__elemental2_dom_MediaError_$Overlay = MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MediaError;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'MediaError');

/**@private {number}*/
$Overlay.$f_MEDIA_ERR_ABORTED__elemental2_dom_MediaError_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_MEDIA_ERR_DECODE__elemental2_dom_MediaError_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_MEDIA_ERR_NETWORK__elemental2_dom_MediaError_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_MEDIA_ERR_SRC_NOT_SUPPORTED__elemental2_dom_MediaError_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=MediaError$$Overlay.js.map
