goog.module('org.gwtproject.dom.client.Style.TableLayout$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TableLayout = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout$impl');

/**
 * @deprecated
  */
class Style_TableLayout extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TableLayout} */
 static $create__() {
  Style_TableLayout.$clinit();
  let $instance = new Style_TableLayout();
  $instance.$ctor__org_gwtproject_dom_client_Style_TableLayout__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TableLayout__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TableLayout} */
 static get f_AUTO__org_gwtproject_dom_client_Style_TableLayout() {
  return (Style_TableLayout.$clinit(), Style_TableLayout.$f_AUTO__org_gwtproject_dom_client_Style_TableLayout);
 }
 /** @return {TableLayout} */
 static get f_FIXED__org_gwtproject_dom_client_Style_TableLayout() {
  return (Style_TableLayout.$clinit(), Style_TableLayout.$f_FIXED__org_gwtproject_dom_client_Style_TableLayout);
 }
 
 static $clinit() {
  Style_TableLayout.$clinit = () =>{};
  Style_TableLayout.$loadModules();
  j_l_Object.$clinit();
  Style_TableLayout.$f_AUTO__org_gwtproject_dom_client_Style_TableLayout = TableLayout.f_AUTO__org_gwtproject_dom_style_shared_TableLayout;
  Style_TableLayout.$f_FIXED__org_gwtproject_dom_client_Style_TableLayout = TableLayout.f_FIXED__org_gwtproject_dom_style_shared_TableLayout;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TableLayout;
 }
 
 static $loadModules() {
  TableLayout = goog.module.get('org.gwtproject.dom.style.shared.TableLayout$impl');
 }
 
}
$Util.$setClassMetadata(Style_TableLayout, 'org.gwtproject.dom.client.Style$TableLayout');

/**@private {TableLayout}*/
Style_TableLayout.$f_AUTO__org_gwtproject_dom_client_Style_TableLayout;
/**@private {TableLayout}*/
Style_TableLayout.$f_FIXED__org_gwtproject_dom_client_Style_TableLayout;

exports = Style_TableLayout; 
//# sourceMappingURL=Style$TableLayout.js.map
