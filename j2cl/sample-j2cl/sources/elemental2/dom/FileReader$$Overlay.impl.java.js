goog.module('elemental2.dom.FileReader.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_DONE__elemental2_dom_FileReader_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_DONE__elemental2_dom_FileReader_$Overlay);
 }
 /** @return {number} */
 static get f_EMPTY__elemental2_dom_FileReader_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_EMPTY__elemental2_dom_FileReader_$Overlay);
 }
 /** @return {number} */
 static get f_LOADING__elemental2_dom_FileReader_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_LOADING__elemental2_dom_FileReader_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_DONE__elemental2_dom_FileReader_$Overlay = FileReader.DONE;
  $Overlay.$f_EMPTY__elemental2_dom_FileReader_$Overlay = FileReader.EMPTY;
  $Overlay.$f_LOADING__elemental2_dom_FileReader_$Overlay = FileReader.LOADING;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FileReader;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'FileReader');

/**@private {number}*/
$Overlay.$f_DONE__elemental2_dom_FileReader_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_EMPTY__elemental2_dom_FileReader_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_LOADING__elemental2_dom_FileReader_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=FileReader$$Overlay.js.map
