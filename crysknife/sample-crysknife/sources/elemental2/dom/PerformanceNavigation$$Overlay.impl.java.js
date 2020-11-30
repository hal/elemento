goog.module('elemental2.dom.PerformanceNavigation.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_BACK_FORWARD;
  $Overlay.$f_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_NAVIGATE;
  $Overlay.$f_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_RELOAD;
  $Overlay.$f_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay = PerformanceNavigation.TYPE_RESERVED;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PerformanceNavigation;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'PerformanceNavigation');

/**@private {number}*/
$Overlay.$f_TYPE_BACK_FORWARD__elemental2_dom_PerformanceNavigation_$Overlay = 0.0;
/**@private {number}*/
$Overlay.$f_TYPE_NAVIGATE__elemental2_dom_PerformanceNavigation_$Overlay = 0.0;
/**@private {number}*/
$Overlay.$f_TYPE_RELOAD__elemental2_dom_PerformanceNavigation_$Overlay = 0.0;
/**@private {number}*/
$Overlay.$f_TYPE_RESERVED__elemental2_dom_PerformanceNavigation_$Overlay = 0.0;

exports = $Overlay; 
//# sourceMappingURL=PerformanceNavigation$$Overlay.js.map
