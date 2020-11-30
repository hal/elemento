goog.module('org.gwtproject.dom.client.Style.TextDecoration$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextDecoration = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration$impl');

/**
 * @deprecated
  */
class Style_TextDecoration extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TextDecoration} */
 static $create__() {
  Style_TextDecoration.$clinit();
  let $instance = new Style_TextDecoration();
  $instance.$ctor__org_gwtproject_dom_client_Style_TextDecoration__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TextDecoration__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TextDecoration} */
 static get f_BLINK__org_gwtproject_dom_client_Style_TextDecoration() {
  return (Style_TextDecoration.$clinit(), Style_TextDecoration.$f_BLINK__org_gwtproject_dom_client_Style_TextDecoration);
 }
 /** @return {TextDecoration} */
 static get f_LINE_THROUGH__org_gwtproject_dom_client_Style_TextDecoration() {
  return (Style_TextDecoration.$clinit(), Style_TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_client_Style_TextDecoration);
 }
 /** @return {TextDecoration} */
 static get f_NONE__org_gwtproject_dom_client_Style_TextDecoration() {
  return (Style_TextDecoration.$clinit(), Style_TextDecoration.$f_NONE__org_gwtproject_dom_client_Style_TextDecoration);
 }
 /** @return {TextDecoration} */
 static get f_OVERLINE__org_gwtproject_dom_client_Style_TextDecoration() {
  return (Style_TextDecoration.$clinit(), Style_TextDecoration.$f_OVERLINE__org_gwtproject_dom_client_Style_TextDecoration);
 }
 /** @return {TextDecoration} */
 static get f_UNDERLINE__org_gwtproject_dom_client_Style_TextDecoration() {
  return (Style_TextDecoration.$clinit(), Style_TextDecoration.$f_UNDERLINE__org_gwtproject_dom_client_Style_TextDecoration);
 }
 
 static $clinit() {
  Style_TextDecoration.$clinit = () =>{};
  Style_TextDecoration.$loadModules();
  j_l_Object.$clinit();
  Style_TextDecoration.$f_BLINK__org_gwtproject_dom_client_Style_TextDecoration = TextDecoration.f_BLINK__org_gwtproject_dom_style_shared_TextDecoration;
  Style_TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_client_Style_TextDecoration = TextDecoration.f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration;
  Style_TextDecoration.$f_NONE__org_gwtproject_dom_client_Style_TextDecoration = TextDecoration.f_NONE__org_gwtproject_dom_style_shared_TextDecoration;
  Style_TextDecoration.$f_OVERLINE__org_gwtproject_dom_client_Style_TextDecoration = TextDecoration.f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration;
  Style_TextDecoration.$f_UNDERLINE__org_gwtproject_dom_client_Style_TextDecoration = TextDecoration.f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TextDecoration;
 }
 
 static $loadModules() {
  TextDecoration = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration$impl');
 }
 
}
$Util.$setClassMetadata(Style_TextDecoration, 'org.gwtproject.dom.client.Style$TextDecoration');

/**@private {TextDecoration}*/
Style_TextDecoration.$f_BLINK__org_gwtproject_dom_client_Style_TextDecoration;
/**@private {TextDecoration}*/
Style_TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_client_Style_TextDecoration;
/**@private {TextDecoration}*/
Style_TextDecoration.$f_NONE__org_gwtproject_dom_client_Style_TextDecoration;
/**@private {TextDecoration}*/
Style_TextDecoration.$f_OVERLINE__org_gwtproject_dom_client_Style_TextDecoration;
/**@private {TextDecoration}*/
Style_TextDecoration.$f_UNDERLINE__org_gwtproject_dom_client_Style_TextDecoration;

exports = Style_TextDecoration; 
//# sourceMappingURL=Style$TextDecoration.js.map
