goog.module('org.gwtproject.dom.client.Style.Visibility$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');

/**
 * @deprecated
  */
class Style_Visibility extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_Visibility} */
 static $create__() {
  Style_Visibility.$clinit();
  let $instance = new Style_Visibility();
  $instance.$ctor__org_gwtproject_dom_client_Style_Visibility__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_Visibility__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Visibility} */
 static get f_VISIBLE__org_gwtproject_dom_client_Style_Visibility() {
  return (Style_Visibility.$clinit(), Style_Visibility.$f_VISIBLE__org_gwtproject_dom_client_Style_Visibility);
 }
 /** @return {Visibility} */
 static get f_HIDDEN__org_gwtproject_dom_client_Style_Visibility() {
  return (Style_Visibility.$clinit(), Style_Visibility.$f_HIDDEN__org_gwtproject_dom_client_Style_Visibility);
 }
 
 static $clinit() {
  Style_Visibility.$clinit = () =>{};
  Style_Visibility.$loadModules();
  j_l_Object.$clinit();
  Style_Visibility.$f_VISIBLE__org_gwtproject_dom_client_Style_Visibility = Visibility.f_VISIBLE__org_gwtproject_dom_style_shared_Visibility;
  Style_Visibility.$f_HIDDEN__org_gwtproject_dom_client_Style_Visibility = Visibility.f_HIDDEN__org_gwtproject_dom_style_shared_Visibility;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_Visibility;
 }
 
 static $loadModules() {
  Visibility = goog.module.get('org.gwtproject.dom.style.shared.Visibility$impl');
 }
 
}
$Util.$setClassMetadata(Style_Visibility, 'org.gwtproject.dom.client.Style$Visibility');

/**@private {Visibility}*/
Style_Visibility.$f_VISIBLE__org_gwtproject_dom_client_Style_Visibility;
/**@private {Visibility}*/
Style_Visibility.$f_HIDDEN__org_gwtproject_dom_client_Style_Visibility;

exports = Style_Visibility; 
//# sourceMappingURL=Style$Visibility.js.map
