goog.module('org.jboss.elemento.ElementCreator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementCreator = goog.require('org.jboss.elemento.ElementCreator$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {ElementCreator}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string, Class<?>):? */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string, Class<?>):?}*/
  this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_ElementCreator_$LambdaAdaptor__org_jboss_elemento_ElementCreator_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_ElementCreator_$LambdaAdaptor__org_jboss_elemento_ElementCreator_$JsFunction(/** ?function(?string, Class<?>):? */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor = fn;
 }
 /** @return {E} */
 m_create__java_lang_String__java_lang_Class(/** ?string */ arg0, /** Class<E> */ arg1) {
  let /** ?function(?string, Class<?>):? */ $function;
  return ($function = this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor, $function(arg0, arg1));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.ElementCreator$$LambdaAdaptor');

ElementCreator.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ElementCreator$$LambdaAdaptor.js.map
