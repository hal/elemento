goog.module('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @template E
 * @implements {IsElement<E>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():E */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():E}*/
  this.f_$$fn__org_jboss_elemento_IsElement_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_IsElement_$LambdaAdaptor__org_jboss_elemento_IsElement_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_IsElement_$LambdaAdaptor__org_jboss_elemento_IsElement_$JsFunction(/** ?function():E */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_IsElement_$LambdaAdaptor = fn;
 }
 /** @return {E} */
 m_element__() {
  let /** ?function():E */ $function;
  return ($function = this.f_$$fn__org_jboss_elemento_IsElement_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.IsElement$$LambdaAdaptor');

IsElement.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsElement$$LambdaAdaptor.js.map
