goog.module('org.gwtproject.dom.client.Style.TextAlign$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign$impl');

/**
 * @deprecated
  */
class Style_TextAlign extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TextAlign} */
 static $create__() {
  Style_TextAlign.$clinit();
  let $instance = new Style_TextAlign();
  $instance.$ctor__org_gwtproject_dom_client_Style_TextAlign__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TextAlign__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TextAlign} */
 static get f_CENTER__org_gwtproject_dom_client_Style_TextAlign() {
  return (Style_TextAlign.$clinit(), Style_TextAlign.$f_CENTER__org_gwtproject_dom_client_Style_TextAlign);
 }
 /** @return {TextAlign} */
 static get f_JUSTIFY__org_gwtproject_dom_client_Style_TextAlign() {
  return (Style_TextAlign.$clinit(), Style_TextAlign.$f_JUSTIFY__org_gwtproject_dom_client_Style_TextAlign);
 }
 /** @return {TextAlign} */
 static get f_LEFT__org_gwtproject_dom_client_Style_TextAlign() {
  return (Style_TextAlign.$clinit(), Style_TextAlign.$f_LEFT__org_gwtproject_dom_client_Style_TextAlign);
 }
 /** @return {TextAlign} */
 static get f_RIGHT__org_gwtproject_dom_client_Style_TextAlign() {
  return (Style_TextAlign.$clinit(), Style_TextAlign.$f_RIGHT__org_gwtproject_dom_client_Style_TextAlign);
 }
 
 static $clinit() {
  Style_TextAlign.$clinit = () =>{};
  Style_TextAlign.$loadModules();
  j_l_Object.$clinit();
  Style_TextAlign.$f_CENTER__org_gwtproject_dom_client_Style_TextAlign = TextAlign.f_CENTER__org_gwtproject_dom_style_shared_TextAlign;
  Style_TextAlign.$f_JUSTIFY__org_gwtproject_dom_client_Style_TextAlign = TextAlign.f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign;
  Style_TextAlign.$f_LEFT__org_gwtproject_dom_client_Style_TextAlign = TextAlign.f_LEFT__org_gwtproject_dom_style_shared_TextAlign;
  Style_TextAlign.$f_RIGHT__org_gwtproject_dom_client_Style_TextAlign = TextAlign.f_RIGHT__org_gwtproject_dom_style_shared_TextAlign;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TextAlign;
 }
 
 static $loadModules() {
  TextAlign = goog.module.get('org.gwtproject.dom.style.shared.TextAlign$impl');
 }
 
}
$Util.$setClassMetadata(Style_TextAlign, 'org.gwtproject.dom.client.Style$TextAlign');

/**@private {TextAlign}*/
Style_TextAlign.$f_CENTER__org_gwtproject_dom_client_Style_TextAlign;
/**@private {TextAlign}*/
Style_TextAlign.$f_JUSTIFY__org_gwtproject_dom_client_Style_TextAlign;
/**@private {TextAlign}*/
Style_TextAlign.$f_LEFT__org_gwtproject_dom_client_Style_TextAlign;
/**@private {TextAlign}*/
Style_TextAlign.$f_RIGHT__org_gwtproject_dom_client_Style_TextAlign;

exports = Style_TextAlign; 
//# sourceMappingURL=Style$TextAlign.js.map
