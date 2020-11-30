goog.module('org.gwtproject.dom.client.Style.Position$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');

/**
 * @deprecated
  */
class Style_Position extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_Position} */
 static $create__() {
  Style_Position.$clinit();
  let $instance = new Style_Position();
  $instance.$ctor__org_gwtproject_dom_client_Style_Position__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_Position__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Position} */
 static get f_STATIC__org_gwtproject_dom_client_Style_Position() {
  return (Style_Position.$clinit(), Style_Position.$f_STATIC__org_gwtproject_dom_client_Style_Position);
 }
 /** @return {Position} */
 static get f_RELATIVE__org_gwtproject_dom_client_Style_Position() {
  return (Style_Position.$clinit(), Style_Position.$f_RELATIVE__org_gwtproject_dom_client_Style_Position);
 }
 /** @return {Position} */
 static get f_ABSOLUTE__org_gwtproject_dom_client_Style_Position() {
  return (Style_Position.$clinit(), Style_Position.$f_ABSOLUTE__org_gwtproject_dom_client_Style_Position);
 }
 /** @return {Position} */
 static get f_FIXED__org_gwtproject_dom_client_Style_Position() {
  return (Style_Position.$clinit(), Style_Position.$f_FIXED__org_gwtproject_dom_client_Style_Position);
 }
 
 static $clinit() {
  Style_Position.$clinit = () =>{};
  Style_Position.$loadModules();
  j_l_Object.$clinit();
  Style_Position.$f_STATIC__org_gwtproject_dom_client_Style_Position = Position.f_STATIC__org_gwtproject_dom_style_shared_Position;
  Style_Position.$f_RELATIVE__org_gwtproject_dom_client_Style_Position = Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position;
  Style_Position.$f_ABSOLUTE__org_gwtproject_dom_client_Style_Position = Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position;
  Style_Position.$f_FIXED__org_gwtproject_dom_client_Style_Position = Position.f_FIXED__org_gwtproject_dom_style_shared_Position;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_Position;
 }
 
 static $loadModules() {
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
 }
 
}
$Util.$setClassMetadata(Style_Position, 'org.gwtproject.dom.client.Style$Position');

/**@private {Position}*/
Style_Position.$f_STATIC__org_gwtproject_dom_client_Style_Position;
/**@private {Position}*/
Style_Position.$f_RELATIVE__org_gwtproject_dom_client_Style_Position;
/**@private {Position}*/
Style_Position.$f_ABSOLUTE__org_gwtproject_dom_client_Style_Position;
/**@private {Position}*/
Style_Position.$f_FIXED__org_gwtproject_dom_client_Style_Position;

exports = Style_Position; 
//# sourceMappingURL=Style$Position.js.map
