goog.module('elemental2.dom.CSSValue.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay);
 }
 /** @return {number} */
 static get f_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay);
 }
 /** @return {number} */
 static get f_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay);
 }
 /** @return {number} */
 static get f_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_CUSTOM;
  $Overlay.$f_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_INHERIT;
  $Overlay.$f_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_PRIMITIVE_VALUE;
  $Overlay.$f_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_VALUE_LIST;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CSSValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'CSSValue');

/**@private {number}*/
$Overlay.$f_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number}*/
$Overlay.$f_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=CSSValue$$Overlay.js.map
