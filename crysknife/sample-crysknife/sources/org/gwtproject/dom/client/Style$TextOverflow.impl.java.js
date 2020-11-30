goog.module('org.gwtproject.dom.client.Style.TextOverflow$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextOverflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextOverflow$impl');

/**
 * @deprecated
  */
class Style_TextOverflow extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Style_TextOverflow} */
 static $create__() {
  Style_TextOverflow.$clinit();
  let $instance = new Style_TextOverflow();
  $instance.$ctor__org_gwtproject_dom_client_Style_TextOverflow__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Style_TextOverflow__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TextOverflow} */
 static get f_CLIP__org_gwtproject_dom_client_Style_TextOverflow() {
  return (Style_TextOverflow.$clinit(), Style_TextOverflow.$f_CLIP__org_gwtproject_dom_client_Style_TextOverflow);
 }
 /** @return {TextOverflow} */
 static get f_ELLIPSIS__org_gwtproject_dom_client_Style_TextOverflow() {
  return (Style_TextOverflow.$clinit(), Style_TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_client_Style_TextOverflow);
 }
 
 static $clinit() {
  Style_TextOverflow.$clinit = () =>{};
  Style_TextOverflow.$loadModules();
  j_l_Object.$clinit();
  Style_TextOverflow.$f_CLIP__org_gwtproject_dom_client_Style_TextOverflow = TextOverflow.f_CLIP__org_gwtproject_dom_style_shared_TextOverflow;
  Style_TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_client_Style_TextOverflow = TextOverflow.f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style_TextOverflow;
 }
 
 static $loadModules() {
  TextOverflow = goog.module.get('org.gwtproject.dom.style.shared.TextOverflow$impl');
 }
 
}
$Util.$setClassMetadata(Style_TextOverflow, 'org.gwtproject.dom.client.Style$TextOverflow');

/**@private {TextOverflow}*/
Style_TextOverflow.$f_CLIP__org_gwtproject_dom_client_Style_TextOverflow;
/**@private {TextOverflow}*/
Style_TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_client_Style_TextOverflow;

exports = Style_TextOverflow; 
//# sourceMappingURL=Style$TextOverflow.js.map
