goog.module('org.jboss.elemento.By.ById$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class ById extends By {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_id__org_jboss_elemento_By_ById_;
 }
 /** @return {!ById} */
 static $create__java_lang_String(/** ?string */ id) {
  ById.$clinit();
  let $instance = new ById();
  $instance.$ctor__org_jboss_elemento_By_ById__java_lang_String(id);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_ById__java_lang_String(/** ?string */ id) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_id__org_jboss_elemento_By_ById_ = id;
 }
 /** @override @return {?string} */
 m_selector___$pp_org_jboss_elemento() {
  return "#" + j_l_String.m_valueOf__java_lang_Object(this.f_id__org_jboss_elemento_By_ById_);
 }
 
 static $clinit() {
  ById.$clinit = () =>{};
  ById.$loadModules();
  By.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ById;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ById, 'org.jboss.elemento.By$ById');

exports = ById; 
//# sourceMappingURL=By$ById.js.map
