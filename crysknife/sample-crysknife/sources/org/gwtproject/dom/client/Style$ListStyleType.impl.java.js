goog.module('org.gwtproject.dom.client.Style.ListStyleType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ListStyleType = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType$impl');

/**
 * @deprecated
  */
class Style_ListStyleType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_ListStyleType} */
 static $create__() {
  Style_ListStyleType.$clinit();
  let $instance = new Style_ListStyleType();
  $instance.$ctor__org_gwtproject_dom_client_Style_ListStyleType__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_ListStyleType__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ListStyleType} */
 static get f_NONE__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_NONE__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_DISC__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_DISC__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_CIRCLE__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_CIRCLE__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_SQUARE__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_SQUARE__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_DECIMAL__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_DECIMAL__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_LOWER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_UPPER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_LOWER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType);
 }
 /** @return {ListStyleType} */
 static get f_UPPER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType() {
  return (Style_ListStyleType.$clinit(), Style_ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType);
 }
 
 static $clinit() {
  Style_ListStyleType.$clinit = () =>{};
  Style_ListStyleType.$loadModules();
  j_l_Object.$clinit();
  Style_ListStyleType.$f_NONE__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_NONE__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_DISC__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_DISC__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_CIRCLE__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_SQUARE__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_DECIMAL__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType;
  Style_ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType = ListStyleType.f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_ListStyleType;
 }
 
 static $loadModules() {
  ListStyleType = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType$impl');
 }
 
}
$Util.$setClassMetadata(Style_ListStyleType, 'org.gwtproject.dom.client.Style$ListStyleType');

/**@private {ListStyleType}*/
Style_ListStyleType.$f_NONE__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_DISC__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_CIRCLE__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_SQUARE__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_DECIMAL__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType;
/**@private {ListStyleType}*/
Style_ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_client_Style_ListStyleType;

exports = Style_ListStyleType; 
//# sourceMappingURL=Style$ListStyleType.js.map
