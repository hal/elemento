goog.module('org.gwtproject.dom.client.Style.Display$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');

/**
 * @deprecated
  */
class Style_Display extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_Display} */
 static $create__() {
  Style_Display.$clinit();
  let $instance = new Style_Display();
  $instance.$ctor__org_gwtproject_dom_client_Style_Display__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_Display__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Display} */
 static get f_NONE__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_NONE__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_BLOCK__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_BLOCK__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_INLINE__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_INLINE__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_INLINE_BLOCK__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_INLINE_BLOCK__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_INLINE_TABLE__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_INLINE_TABLE__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_LIST_ITEM__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_LIST_ITEM__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_RUN_IN__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_RUN_IN__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_CAPTION__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_CAPTION__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_COLUMN_GROUP__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_HEADER_GROUP__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_FOOTER_GROUP__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_ROW_GROUP__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_CELL__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_CELL__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_COLUMN__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_COLUMN__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_TABLE_ROW__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_TABLE_ROW__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_INITIAL__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_INITIAL__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_FLEX__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_FLEX__org_gwtproject_dom_client_Style_Display);
 }
 /** @return {Display} */
 static get f_INLINE_FLEX__org_gwtproject_dom_client_Style_Display() {
  return (Style_Display.$clinit(), Style_Display.$f_INLINE_FLEX__org_gwtproject_dom_client_Style_Display);
 }
 
 static $clinit() {
  Style_Display.$clinit = () =>{};
  Style_Display.$loadModules();
  j_l_Object.$clinit();
  Style_Display.$f_NONE__org_gwtproject_dom_client_Style_Display = Display.f_NONE__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_BLOCK__org_gwtproject_dom_client_Style_Display = Display.f_BLOCK__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_INLINE__org_gwtproject_dom_client_Style_Display = Display.f_INLINE__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_INLINE_BLOCK__org_gwtproject_dom_client_Style_Display = Display.f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_INLINE_TABLE__org_gwtproject_dom_client_Style_Display = Display.f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_LIST_ITEM__org_gwtproject_dom_client_Style_Display = Display.f_LIST_ITEM__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_RUN_IN__org_gwtproject_dom_client_Style_Display = Display.f_RUN_IN__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE__org_gwtproject_dom_client_Style_Display = Display.f_TABLE__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_CAPTION__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_CELL__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_CELL__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_COLUMN__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_TABLE_ROW__org_gwtproject_dom_client_Style_Display = Display.f_TABLE_ROW__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_INITIAL__org_gwtproject_dom_client_Style_Display = Display.f_INITIAL__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_FLEX__org_gwtproject_dom_client_Style_Display = Display.f_FLEX__org_gwtproject_dom_style_shared_Display;
  Style_Display.$f_INLINE_FLEX__org_gwtproject_dom_client_Style_Display = Display.f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_Display;
 }
 
 static $loadModules() {
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
 }
 
}
$Util.$setClassMetadata(Style_Display, 'org.gwtproject.dom.client.Style$Display');

/**@private {Display}*/
Style_Display.$f_NONE__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_BLOCK__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_INLINE__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_INLINE_BLOCK__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_INLINE_TABLE__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_LIST_ITEM__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_RUN_IN__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_CAPTION__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_CELL__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_COLUMN__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_TABLE_ROW__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_INITIAL__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_FLEX__org_gwtproject_dom_client_Style_Display;
/**@private {Display}*/
Style_Display.$f_INLINE_FLEX__org_gwtproject_dom_client_Style_Display;

exports = Style_Display; 
//# sourceMappingURL=Style$Display.js.map
