goog.module('org.gwtproject.dom.client.Style.Cursor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Cursor = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor$impl');

/**
 * @deprecated
  */
class Style_Cursor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_Cursor} */
 static $create__() {
  Style_Cursor.$clinit();
  let $instance = new Style_Cursor();
  $instance.$ctor__org_gwtproject_dom_client_Style_Cursor__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_Cursor__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Cursor} */
 static get f_DEFAULT__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_DEFAULT__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_AUTO__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_AUTO__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_CROSSHAIR__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_CROSSHAIR__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_POINTER__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_POINTER__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_MOVE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_MOVE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_E_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_E_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_NE_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_NE_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_NW_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_NW_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_N_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_N_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_SE_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_SE_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_SW_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_SW_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_S_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_S_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_W_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_W_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_TEXT__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_TEXT__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_WAIT__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_WAIT__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_HELP__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_HELP__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_COL_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_COL_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 /** @return {Cursor} */
 static get f_ROW_RESIZE__org_gwtproject_dom_client_Style_Cursor() {
  return (Style_Cursor.$clinit(), Style_Cursor.$f_ROW_RESIZE__org_gwtproject_dom_client_Style_Cursor);
 }
 
 static $clinit() {
  Style_Cursor.$clinit = () =>{};
  Style_Cursor.$loadModules();
  j_l_Object.$clinit();
  Style_Cursor.$f_DEFAULT__org_gwtproject_dom_client_Style_Cursor = Cursor.f_DEFAULT__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_AUTO__org_gwtproject_dom_client_Style_Cursor = Cursor.f_AUTO__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_CROSSHAIR__org_gwtproject_dom_client_Style_Cursor = Cursor.f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_POINTER__org_gwtproject_dom_client_Style_Cursor = Cursor.f_POINTER__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_MOVE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_MOVE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_E_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_NE_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_NW_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_N_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_SE_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_SW_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_S_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_W_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_TEXT__org_gwtproject_dom_client_Style_Cursor = Cursor.f_TEXT__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_WAIT__org_gwtproject_dom_client_Style_Cursor = Cursor.f_WAIT__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_HELP__org_gwtproject_dom_client_Style_Cursor = Cursor.f_HELP__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_COL_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor;
  Style_Cursor.$f_ROW_RESIZE__org_gwtproject_dom_client_Style_Cursor = Cursor.f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_Cursor;
 }
 
 static $loadModules() {
  Cursor = goog.module.get('org.gwtproject.dom.style.shared.Cursor$impl');
 }
 
}
$Util.$setClassMetadata(Style_Cursor, 'org.gwtproject.dom.client.Style$Cursor');

/**@private {Cursor}*/
Style_Cursor.$f_DEFAULT__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_AUTO__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_CROSSHAIR__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_POINTER__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_MOVE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_E_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_NE_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_NW_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_N_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_SE_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_SW_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_S_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_W_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_TEXT__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_WAIT__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_HELP__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_COL_RESIZE__org_gwtproject_dom_client_Style_Cursor;
/**@private {Cursor}*/
Style_Cursor.$f_ROW_RESIZE__org_gwtproject_dom_client_Style_Cursor;

exports = Style_Cursor; 
//# sourceMappingURL=Style$Cursor.js.map
