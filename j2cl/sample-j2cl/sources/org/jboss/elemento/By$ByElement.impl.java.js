goog.module('org.jboss.elemento.By.ByElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

class ByElement extends By {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_element__org_jboss_elemento_By_ByElement_;
 }
 /** @return {!ByElement} */
 static $create__java_lang_String(/** ?string */ element) {
  ByElement.$clinit();
  let $instance = new ByElement();
  $instance.$ctor__org_jboss_elemento_By_ByElement__java_lang_String(element);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_ByElement__java_lang_String(/** ?string */ element) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_element__org_jboss_elemento_By_ByElement_ = element;
 }
 /** @override @return {?string} */
 m_selector___$pp_org_jboss_elemento() {
  return this.f_element__org_jboss_elemento_By_ByElement_;
 }
 
 static $clinit() {
  ByElement.$clinit = () =>{};
  ByElement.$loadModules();
  By.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByElement;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(ByElement, 'org.jboss.elemento.By$ByElement');

exports = ByElement; 
//# sourceMappingURL=By$ByElement.js.map
