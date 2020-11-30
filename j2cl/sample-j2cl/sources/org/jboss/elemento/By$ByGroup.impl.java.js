goog.module('org.jboss.elemento.By.ByGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ByGroup extends By {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<By>}*/
  this.f_selectors__org_jboss_elemento_By_ByGroup_;
 }
 /** @return {!ByGroup} */
 static $create__arrayOf_org_jboss_elemento_By(/** Array<By> */ selectors) {
  ByGroup.$clinit();
  let $instance = new ByGroup();
  $instance.$ctor__org_jboss_elemento_By_ByGroup__arrayOf_org_jboss_elemento_By(selectors);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_ByGroup__arrayOf_org_jboss_elemento_By(/** Array<By> */ selectors) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_selectors__org_jboss_elemento_By_ByGroup_ = selectors;
 }
 /** @override @return {?string} */
 m_selector___$pp_org_jboss_elemento() {
  return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (/**@type {Stream<By>}*/ (Arrays.m_stream__arrayOf_java_lang_Object(this.f_selectors__org_jboss_elemento_By_ByGroup_)).m_map__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {By}*/ ($Casts.$to(arg0, By));
   return arg0_1.m_selector___$pp_org_jboss_elemento();
  }))).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence(", ")), j_l_String));
 }
 
 static $clinit() {
  ByGroup.$clinit = () =>{};
  ByGroup.$loadModules();
  By.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByGroup;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ByGroup, 'org.jboss.elemento.By$ByGroup');

exports = ByGroup; 
//# sourceMappingURL=By$ByGroup.js.map
