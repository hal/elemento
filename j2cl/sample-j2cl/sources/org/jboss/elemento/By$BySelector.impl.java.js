goog.module('org.jboss.elemento.By.BySelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

class BySelector extends By {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 /** @return {!BySelector} */
 static $create__java_lang_String(/** ?string */ selector) {
  BySelector.$clinit();
  let $instance = new BySelector();
  $instance.$ctor__org_jboss_elemento_By_BySelector__java_lang_String(selector);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_BySelector__java_lang_String(/** ?string */ selector) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_selector__org_jboss_elemento_By_BySelector_ = selector;
 }
 /** @override @return {?string} */
 m_selector___$pp_org_jboss_elemento() {
  return this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 
 static $clinit() {
  BySelector.$clinit = () =>{};
  BySelector.$loadModules();
  By.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BySelector;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BySelector, 'org.jboss.elemento.By$BySelector');

exports = BySelector; 
//# sourceMappingURL=By$BySelector.js.map
