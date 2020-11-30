goog.module('org.gwtproject.dom.client.Style.TextTransform$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextTransform = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform$impl');

/**
 * @deprecated
  */
class Style_TextTransform extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TextTransform} */
 static $create__() {
  Style_TextTransform.$clinit();
  let $instance = new Style_TextTransform();
  $instance.$ctor__org_gwtproject_dom_client_Style_TextTransform__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TextTransform__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TextTransform} */
 static get f_CAPITALIZE__org_gwtproject_dom_client_Style_TextTransform() {
  return (Style_TextTransform.$clinit(), Style_TextTransform.$f_CAPITALIZE__org_gwtproject_dom_client_Style_TextTransform);
 }
 /** @return {TextTransform} */
 static get f_NONE__org_gwtproject_dom_client_Style_TextTransform() {
  return (Style_TextTransform.$clinit(), Style_TextTransform.$f_NONE__org_gwtproject_dom_client_Style_TextTransform);
 }
 /** @return {TextTransform} */
 static get f_LOWERCASE__org_gwtproject_dom_client_Style_TextTransform() {
  return (Style_TextTransform.$clinit(), Style_TextTransform.$f_LOWERCASE__org_gwtproject_dom_client_Style_TextTransform);
 }
 /** @return {TextTransform} */
 static get f_UPPERCASE__org_gwtproject_dom_client_Style_TextTransform() {
  return (Style_TextTransform.$clinit(), Style_TextTransform.$f_UPPERCASE__org_gwtproject_dom_client_Style_TextTransform);
 }
 
 static $clinit() {
  Style_TextTransform.$clinit = () =>{};
  Style_TextTransform.$loadModules();
  j_l_Object.$clinit();
  Style_TextTransform.$f_CAPITALIZE__org_gwtproject_dom_client_Style_TextTransform = TextTransform.f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform;
  Style_TextTransform.$f_NONE__org_gwtproject_dom_client_Style_TextTransform = TextTransform.f_NONE__org_gwtproject_dom_style_shared_TextTransform;
  Style_TextTransform.$f_LOWERCASE__org_gwtproject_dom_client_Style_TextTransform = TextTransform.f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform;
  Style_TextTransform.$f_UPPERCASE__org_gwtproject_dom_client_Style_TextTransform = TextTransform.f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TextTransform;
 }
 
 static $loadModules() {
  TextTransform = goog.module.get('org.gwtproject.dom.style.shared.TextTransform$impl');
 }
 
}
$Util.$setClassMetadata(Style_TextTransform, 'org.gwtproject.dom.client.Style$TextTransform');

/**@private {TextTransform}*/
Style_TextTransform.$f_CAPITALIZE__org_gwtproject_dom_client_Style_TextTransform;
/**@private {TextTransform}*/
Style_TextTransform.$f_NONE__org_gwtproject_dom_client_Style_TextTransform;
/**@private {TextTransform}*/
Style_TextTransform.$f_LOWERCASE__org_gwtproject_dom_client_Style_TextTransform;
/**@private {TextTransform}*/
Style_TextTransform.$f_UPPERCASE__org_gwtproject_dom_client_Style_TextTransform;

exports = Style_TextTransform; 
//# sourceMappingURL=Style$TextTransform.js.map
