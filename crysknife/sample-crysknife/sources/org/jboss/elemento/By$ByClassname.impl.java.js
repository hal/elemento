goog.module('org.jboss.elemento.By.ByClassname$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class ByClassname extends By {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<?string>}*/
  this.f_classnames__org_jboss_elemento_By_ByClassname_;
 }
 /** @return {!ByClassname} */
 static $create__arrayOf_java_lang_String(/** Array<?string> */ classnames) {
  ByClassname.$clinit();
  let $instance = new ByClassname();
  $instance.$ctor__org_jboss_elemento_By_ByClassname__arrayOf_java_lang_String(classnames);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_ByClassname__arrayOf_java_lang_String(/** Array<?string> */ classnames) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_classnames__org_jboss_elemento_By_ByClassname_ = classnames;
 }
 /** @override @return {?string} */
 m_selector___$pp_org_jboss_elemento() {
  return "." + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence(".", this.f_classnames__org_jboss_elemento_By_ByClassname_));
 }
 
 static $clinit() {
  ByClassname.$clinit = () =>{};
  ByClassname.$loadModules();
  By.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByClassname;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ByClassname, 'org.jboss.elemento.By$ByClassname');

exports = ByClassname; 
//# sourceMappingURL=By$ByClassname.js.map
