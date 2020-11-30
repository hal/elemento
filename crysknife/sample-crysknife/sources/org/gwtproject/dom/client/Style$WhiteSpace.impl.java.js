goog.module('org.gwtproject.dom.client.Style.WhiteSpace$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');

/**
 * @deprecated
  */
class Style_WhiteSpace extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_WhiteSpace} */
 static $create__() {
  Style_WhiteSpace.$clinit();
  let $instance = new Style_WhiteSpace();
  $instance.$ctor__org_gwtproject_dom_client_Style_WhiteSpace__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_WhiteSpace__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {WhiteSpace} */
 static get f_NORMAL__org_gwtproject_dom_client_Style_WhiteSpace() {
  return (Style_WhiteSpace.$clinit(), Style_WhiteSpace.$f_NORMAL__org_gwtproject_dom_client_Style_WhiteSpace);
 }
 /** @return {WhiteSpace} */
 static get f_NOWRAP__org_gwtproject_dom_client_Style_WhiteSpace() {
  return (Style_WhiteSpace.$clinit(), Style_WhiteSpace.$f_NOWRAP__org_gwtproject_dom_client_Style_WhiteSpace);
 }
 /** @return {WhiteSpace} */
 static get f_PRE__org_gwtproject_dom_client_Style_WhiteSpace() {
  return (Style_WhiteSpace.$clinit(), Style_WhiteSpace.$f_PRE__org_gwtproject_dom_client_Style_WhiteSpace);
 }
 /** @return {WhiteSpace} */
 static get f_PRE_LINE__org_gwtproject_dom_client_Style_WhiteSpace() {
  return (Style_WhiteSpace.$clinit(), Style_WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_client_Style_WhiteSpace);
 }
 /** @return {WhiteSpace} */
 static get f_PRE_WRAP__org_gwtproject_dom_client_Style_WhiteSpace() {
  return (Style_WhiteSpace.$clinit(), Style_WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_client_Style_WhiteSpace);
 }
 
 static $clinit() {
  Style_WhiteSpace.$clinit = () =>{};
  Style_WhiteSpace.$loadModules();
  j_l_Object.$clinit();
  Style_WhiteSpace.$f_NORMAL__org_gwtproject_dom_client_Style_WhiteSpace = WhiteSpace.f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace;
  Style_WhiteSpace.$f_NOWRAP__org_gwtproject_dom_client_Style_WhiteSpace = WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace;
  Style_WhiteSpace.$f_PRE__org_gwtproject_dom_client_Style_WhiteSpace = WhiteSpace.f_PRE__org_gwtproject_dom_style_shared_WhiteSpace;
  Style_WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_client_Style_WhiteSpace = WhiteSpace.f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace;
  Style_WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_client_Style_WhiteSpace = WhiteSpace.f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_WhiteSpace;
 }
 
 static $loadModules() {
  WhiteSpace = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace$impl');
 }
 
}
$Util.$setClassMetadata(Style_WhiteSpace, 'org.gwtproject.dom.client.Style$WhiteSpace');

/**@private {WhiteSpace}*/
Style_WhiteSpace.$f_NORMAL__org_gwtproject_dom_client_Style_WhiteSpace;
/**@private {WhiteSpace}*/
Style_WhiteSpace.$f_NOWRAP__org_gwtproject_dom_client_Style_WhiteSpace;
/**@private {WhiteSpace}*/
Style_WhiteSpace.$f_PRE__org_gwtproject_dom_client_Style_WhiteSpace;
/**@private {WhiteSpace}*/
Style_WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_client_Style_WhiteSpace;
/**@private {WhiteSpace}*/
Style_WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_client_Style_WhiteSpace;

exports = Style_WhiteSpace; 
//# sourceMappingURL=Style$WhiteSpace.js.map
