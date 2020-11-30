goog.module('org.gwtproject.dom.client.Style.OutlineStyle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OutlineStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle$impl');

/**
 * @deprecated
  */
class Style_OutlineStyle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_OutlineStyle} */
 static $create__() {
  Style_OutlineStyle.$clinit();
  let $instance = new Style_OutlineStyle();
  $instance.$ctor__org_gwtproject_dom_client_Style_OutlineStyle__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_OutlineStyle__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {OutlineStyle} */
 static get f_NONE__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_NONE__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_DASHED__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_DASHED__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_DOTTED__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_DOTTED__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_DOUBLE__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_DOUBLE__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_GROOVE__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_GROOVE__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_INSET__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_INSET__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_OUTSET__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_OUTSET__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_RIDGE__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_RIDGE__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 /** @return {OutlineStyle} */
 static get f_SOLID__org_gwtproject_dom_client_Style_OutlineStyle() {
  return (Style_OutlineStyle.$clinit(), Style_OutlineStyle.$f_SOLID__org_gwtproject_dom_client_Style_OutlineStyle);
 }
 
 static $clinit() {
  Style_OutlineStyle.$clinit = () =>{};
  Style_OutlineStyle.$loadModules();
  j_l_Object.$clinit();
  Style_OutlineStyle.$f_NONE__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_NONE__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_DASHED__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_DOTTED__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_DOUBLE__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_GROOVE__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_INSET__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_INSET__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_OUTSET__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_RIDGE__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle;
  Style_OutlineStyle.$f_SOLID__org_gwtproject_dom_client_Style_OutlineStyle = OutlineStyle.f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_OutlineStyle;
 }
 
 static $loadModules() {
  OutlineStyle = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle$impl');
 }
 
}
$Util.$setClassMetadata(Style_OutlineStyle, 'org.gwtproject.dom.client.Style$OutlineStyle');

/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_NONE__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_DASHED__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_DOTTED__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_DOUBLE__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_GROOVE__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_INSET__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_OUTSET__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_RIDGE__org_gwtproject_dom_client_Style_OutlineStyle;
/**@private {OutlineStyle}*/
Style_OutlineStyle.$f_SOLID__org_gwtproject_dom_client_Style_OutlineStyle;

exports = Style_OutlineStyle; 
//# sourceMappingURL=Style$OutlineStyle.js.map
