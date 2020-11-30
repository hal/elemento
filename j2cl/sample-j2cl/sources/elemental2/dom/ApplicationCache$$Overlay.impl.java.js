goog.module('elemental2.dom.ApplicationCache.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_CHECKING__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CHECKING__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @return {number} */
 static get f_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @return {number} */
 static get f_IDLE__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_IDLE__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @return {number} */
 static get f_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @return {number} */
 static get f_UNCACHED__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_UNCACHED__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @return {number} */
 static get f_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_CHECKING__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.CHECKING;
  $Overlay.$f_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.DOWNLOADING;
  $Overlay.$f_IDLE__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.IDLE;
  $Overlay.$f_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.OBSOLETE;
  $Overlay.$f_UNCACHED__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.UNCACHED;
  $Overlay.$f_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.UPDATEREADY;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplicationCache;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'ApplicationCache');

/**@private {number}*/
$Overlay.$f_CHECKING__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_IDLE__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_UNCACHED__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=ApplicationCache$$Overlay.js.map
