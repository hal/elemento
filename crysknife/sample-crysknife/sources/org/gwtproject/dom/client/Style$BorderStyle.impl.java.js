goog.module('org.gwtproject.dom.client.Style.BorderStyle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');

/**
 * @deprecated
  */
class Style_BorderStyle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_BorderStyle} */
 static $create__() {
  Style_BorderStyle.$clinit();
  let $instance = new Style_BorderStyle();
  $instance.$ctor__org_gwtproject_dom_client_Style_BorderStyle__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_BorderStyle__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {BorderStyle} */
 static get f_NONE__org_gwtproject_dom_client_Style_BorderStyle() {
  return (Style_BorderStyle.$clinit(), Style_BorderStyle.$f_NONE__org_gwtproject_dom_client_Style_BorderStyle);
 }
 /** @return {BorderStyle} */
 static get f_DOTTED__org_gwtproject_dom_client_Style_BorderStyle() {
  return (Style_BorderStyle.$clinit(), Style_BorderStyle.$f_DOTTED__org_gwtproject_dom_client_Style_BorderStyle);
 }
 /** @return {BorderStyle} */
 static get f_DASHED__org_gwtproject_dom_client_Style_BorderStyle() {
  return (Style_BorderStyle.$clinit(), Style_BorderStyle.$f_DASHED__org_gwtproject_dom_client_Style_BorderStyle);
 }
 /** @return {BorderStyle} */
 static get f_HIDDEN__org_gwtproject_dom_client_Style_BorderStyle() {
  return (Style_BorderStyle.$clinit(), Style_BorderStyle.$f_HIDDEN__org_gwtproject_dom_client_Style_BorderStyle);
 }
 /** @return {BorderStyle} */
 static get f_SOLID__org_gwtproject_dom_client_Style_BorderStyle() {
  return (Style_BorderStyle.$clinit(), Style_BorderStyle.$f_SOLID__org_gwtproject_dom_client_Style_BorderStyle);
 }
 
 static $clinit() {
  Style_BorderStyle.$clinit = () =>{};
  Style_BorderStyle.$loadModules();
  j_l_Object.$clinit();
  Style_BorderStyle.$f_NONE__org_gwtproject_dom_client_Style_BorderStyle = BorderStyle.f_NONE__org_gwtproject_dom_style_shared_BorderStyle;
  Style_BorderStyle.$f_DOTTED__org_gwtproject_dom_client_Style_BorderStyle = BorderStyle.f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle;
  Style_BorderStyle.$f_DASHED__org_gwtproject_dom_client_Style_BorderStyle = BorderStyle.f_DASHED__org_gwtproject_dom_style_shared_BorderStyle;
  Style_BorderStyle.$f_HIDDEN__org_gwtproject_dom_client_Style_BorderStyle = BorderStyle.f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle;
  Style_BorderStyle.$f_SOLID__org_gwtproject_dom_client_Style_BorderStyle = BorderStyle.f_SOLID__org_gwtproject_dom_style_shared_BorderStyle;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_BorderStyle;
 }
 
 static $loadModules() {
  BorderStyle = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle$impl');
 }
 
}
$Util.$setClassMetadata(Style_BorderStyle, 'org.gwtproject.dom.client.Style$BorderStyle');

/**@private {BorderStyle}*/
Style_BorderStyle.$f_NONE__org_gwtproject_dom_client_Style_BorderStyle;
/**@private {BorderStyle}*/
Style_BorderStyle.$f_DOTTED__org_gwtproject_dom_client_Style_BorderStyle;
/**@private {BorderStyle}*/
Style_BorderStyle.$f_DASHED__org_gwtproject_dom_client_Style_BorderStyle;
/**@private {BorderStyle}*/
Style_BorderStyle.$f_HIDDEN__org_gwtproject_dom_client_Style_BorderStyle;
/**@private {BorderStyle}*/
Style_BorderStyle.$f_SOLID__org_gwtproject_dom_client_Style_BorderStyle;

exports = Style_BorderStyle; 
//# sourceMappingURL=Style$BorderStyle.js.map
