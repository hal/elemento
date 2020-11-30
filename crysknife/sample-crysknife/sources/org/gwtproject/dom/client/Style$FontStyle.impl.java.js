goog.module('org.gwtproject.dom.client.Style.FontStyle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FontStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle$impl');

/**
 * @deprecated
  */
class Style_FontStyle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_FontStyle} */
 static $create__() {
  Style_FontStyle.$clinit();
  let $instance = new Style_FontStyle();
  $instance.$ctor__org_gwtproject_dom_client_Style_FontStyle__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_FontStyle__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FontStyle} */
 static get f_NORMAL__org_gwtproject_dom_client_Style_FontStyle() {
  return (Style_FontStyle.$clinit(), Style_FontStyle.$f_NORMAL__org_gwtproject_dom_client_Style_FontStyle);
 }
 /** @return {FontStyle} */
 static get f_ITALIC__org_gwtproject_dom_client_Style_FontStyle() {
  return (Style_FontStyle.$clinit(), Style_FontStyle.$f_ITALIC__org_gwtproject_dom_client_Style_FontStyle);
 }
 /** @return {FontStyle} */
 static get f_OBLIQUE__org_gwtproject_dom_client_Style_FontStyle() {
  return (Style_FontStyle.$clinit(), Style_FontStyle.$f_OBLIQUE__org_gwtproject_dom_client_Style_FontStyle);
 }
 
 static $clinit() {
  Style_FontStyle.$clinit = () =>{};
  Style_FontStyle.$loadModules();
  j_l_Object.$clinit();
  Style_FontStyle.$f_NORMAL__org_gwtproject_dom_client_Style_FontStyle = FontStyle.f_NORMAL__org_gwtproject_dom_style_shared_FontStyle;
  Style_FontStyle.$f_ITALIC__org_gwtproject_dom_client_Style_FontStyle = FontStyle.f_ITALIC__org_gwtproject_dom_style_shared_FontStyle;
  Style_FontStyle.$f_OBLIQUE__org_gwtproject_dom_client_Style_FontStyle = FontStyle.f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_FontStyle;
 }
 
 static $loadModules() {
  FontStyle = goog.module.get('org.gwtproject.dom.style.shared.FontStyle$impl');
 }
 
}
$Util.$setClassMetadata(Style_FontStyle, 'org.gwtproject.dom.client.Style$FontStyle');

/**@private {FontStyle}*/
Style_FontStyle.$f_NORMAL__org_gwtproject_dom_client_Style_FontStyle;
/**@private {FontStyle}*/
Style_FontStyle.$f_ITALIC__org_gwtproject_dom_client_Style_FontStyle;
/**@private {FontStyle}*/
Style_FontStyle.$f_OBLIQUE__org_gwtproject_dom_client_Style_FontStyle;

exports = Style_FontStyle; 
//# sourceMappingURL=Style$FontStyle.js.map
