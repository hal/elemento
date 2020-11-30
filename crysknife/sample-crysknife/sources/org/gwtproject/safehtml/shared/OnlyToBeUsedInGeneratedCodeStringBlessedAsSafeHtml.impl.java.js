goog.module('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.gwtproject.safehtml.shared.SafeHtml$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {SafeHtml}
  */
class OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_html__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_;
 }
 //Factory method corresponding to constructor 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml()'.
 /** @return {!OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml} */
 static $create__() {
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$clinit();
  let $instance = new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml();
  $instance.$ctor__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__();
  return $instance;
 }
 //Initialization from constructor 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml()'.
 
 $ctor__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__() {
  this.$ctor__java_lang_Object__();
 }
 //Factory method corresponding to constructor 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(String)'.
 /** @return {!OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml} */
 static $create__java_lang_String(/** ?string */ html) {
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$clinit();
  let $instance = new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml();
  $instance.$ctor__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__java_lang_String(html);
  return $instance;
 }
 //Initialization from constructor 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(String)'.
 
 $ctor__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__java_lang_String(/** ?string */ html) {
  this.$ctor__java_lang_Object__();
  if ($Equality.$same(html, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("html is null"));
  }
  this.f_html__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_ = html;
 }
 /** @override @return {?string} */
 m_asString__() {
  return this.f_html__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_;
 }
 /** @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_html__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (!SafeHtml.$isInstance(obj)) {
   return false;
  }
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_html__org_gwtproject_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_, /**@type {SafeHtml}*/ ($Casts.$to(obj, SafeHtml)).m_asString__());
 }
 
 static $clinit() {
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$clinit = () =>{};
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml, 'org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml');

SafeHtml.$markImplementor(OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);

exports = OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml; 
//# sourceMappingURL=OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.js.map
