goog.module('org.gwtproject.dom.client.Style.FontWeight$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FontWeight = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight$impl');

/**
 * @deprecated
  */
class Style_FontWeight extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_FontWeight} */
 static $create__() {
  Style_FontWeight.$clinit();
  let $instance = new Style_FontWeight();
  $instance.$ctor__org_gwtproject_dom_client_Style_FontWeight__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_FontWeight__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FontWeight} */
 static get f_NORMAL__org_gwtproject_dom_client_Style_FontWeight() {
  return (Style_FontWeight.$clinit(), Style_FontWeight.$f_NORMAL__org_gwtproject_dom_client_Style_FontWeight);
 }
 /** @return {FontWeight} */
 static get f_BOLD__org_gwtproject_dom_client_Style_FontWeight() {
  return (Style_FontWeight.$clinit(), Style_FontWeight.$f_BOLD__org_gwtproject_dom_client_Style_FontWeight);
 }
 /** @return {FontWeight} */
 static get f_BOLDER__org_gwtproject_dom_client_Style_FontWeight() {
  return (Style_FontWeight.$clinit(), Style_FontWeight.$f_BOLDER__org_gwtproject_dom_client_Style_FontWeight);
 }
 /** @return {FontWeight} */
 static get f_LIGHTER__org_gwtproject_dom_client_Style_FontWeight() {
  return (Style_FontWeight.$clinit(), Style_FontWeight.$f_LIGHTER__org_gwtproject_dom_client_Style_FontWeight);
 }
 
 static $clinit() {
  Style_FontWeight.$clinit = () =>{};
  Style_FontWeight.$loadModules();
  j_l_Object.$clinit();
  Style_FontWeight.$f_NORMAL__org_gwtproject_dom_client_Style_FontWeight = FontWeight.f_NORMAL__org_gwtproject_dom_style_shared_FontWeight;
  Style_FontWeight.$f_BOLD__org_gwtproject_dom_client_Style_FontWeight = FontWeight.f_BOLD__org_gwtproject_dom_style_shared_FontWeight;
  Style_FontWeight.$f_BOLDER__org_gwtproject_dom_client_Style_FontWeight = FontWeight.f_BOLDER__org_gwtproject_dom_style_shared_FontWeight;
  Style_FontWeight.$f_LIGHTER__org_gwtproject_dom_client_Style_FontWeight = FontWeight.f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_FontWeight;
 }
 
 static $loadModules() {
  FontWeight = goog.module.get('org.gwtproject.dom.style.shared.FontWeight$impl');
 }
 
}
$Util.$setClassMetadata(Style_FontWeight, 'org.gwtproject.dom.client.Style$FontWeight');

/**@private {FontWeight}*/
Style_FontWeight.$f_NORMAL__org_gwtproject_dom_client_Style_FontWeight;
/**@private {FontWeight}*/
Style_FontWeight.$f_BOLD__org_gwtproject_dom_client_Style_FontWeight;
/**@private {FontWeight}*/
Style_FontWeight.$f_BOLDER__org_gwtproject_dom_client_Style_FontWeight;
/**@private {FontWeight}*/
Style_FontWeight.$f_LIGHTER__org_gwtproject_dom_client_Style_FontWeight;

exports = Style_FontWeight; 
//# sourceMappingURL=Style$FontWeight.js.map
