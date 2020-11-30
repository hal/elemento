goog.module('org.gwtproject.dom.client.Style.TextJustify$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextJustify = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify$impl');

/**
 * @deprecated
  */
class Style_TextJustify extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TextJustify} */
 static $create__() {
  Style_TextJustify.$clinit();
  let $instance = new Style_TextJustify();
  $instance.$ctor__org_gwtproject_dom_client_Style_TextJustify__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TextJustify__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TextJustify} */
 static get f_AUTO__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_AUTO__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_DISTRIBUTE__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_INTER_CHARACTER__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_INTER_CLUSTER__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_INTER_IDEOGRAPH__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_INTER_WORD__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_INTER_WORD__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_KASHIDA__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_KASHIDA__org_gwtproject_dom_client_Style_TextJustify);
 }
 /** @return {TextJustify} */
 static get f_NONE__org_gwtproject_dom_client_Style_TextJustify() {
  return (Style_TextJustify.$clinit(), Style_TextJustify.$f_NONE__org_gwtproject_dom_client_Style_TextJustify);
 }
 
 static $clinit() {
  Style_TextJustify.$clinit = () =>{};
  Style_TextJustify.$loadModules();
  j_l_Object.$clinit();
  Style_TextJustify.$f_AUTO__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_AUTO__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_INTER_WORD__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_KASHIDA__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify;
  Style_TextJustify.$f_NONE__org_gwtproject_dom_client_Style_TextJustify = TextJustify.f_NONE__org_gwtproject_dom_style_shared_TextJustify;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TextJustify;
 }
 
 static $loadModules() {
  TextJustify = goog.module.get('org.gwtproject.dom.style.shared.TextJustify$impl');
 }
 
}
$Util.$setClassMetadata(Style_TextJustify, 'org.gwtproject.dom.client.Style$TextJustify');

/**@private {TextJustify}*/
Style_TextJustify.$f_AUTO__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_INTER_WORD__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_KASHIDA__org_gwtproject_dom_client_Style_TextJustify;
/**@private {TextJustify}*/
Style_TextJustify.$f_NONE__org_gwtproject_dom_client_Style_TextJustify;

exports = Style_TextJustify; 
//# sourceMappingURL=Style$TextJustify.js.map
