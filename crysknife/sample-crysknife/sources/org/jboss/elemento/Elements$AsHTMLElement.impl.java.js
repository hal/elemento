goog.module('org.jboss.elemento.Elements.AsHTMLElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const j_u_function_Function = goog.require('java.util.function.Function$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {j_u_function_Function<T, HTMLElement>}
  */
class AsHTMLElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!AsHTMLElement<T>} */
 static $create__() {
  AsHTMLElement.$clinit();
  let $instance = new AsHTMLElement();
  $instance.$ctor__org_jboss_elemento_Elements_AsHTMLElement__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_Elements_AsHTMLElement__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {HTMLElement} */
 m_apply__elemental2_dom_Node(/** T */ t) {
  return /**@type {HTMLElement}*/ (Js.m_uncheckedCast__java_lang_Object(t));
 }
 //Default method forwarding stub.
 /** @override @template V @return {j_u_function_Function<T, V>} */
 m_andThen__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<T, V>}*/ (j_u_function_Function.m_andThen__$default__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @template V @return {j_u_function_Function<V, HTMLElement>} */
 m_compose__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {j_u_function_Function<V, HTMLElement>}*/ (j_u_function_Function.m_compose__$default__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 //Bridge method.
 /** @override @return {HTMLElement} */
 m_apply__java_lang_Object(/** T */ arg0) {
  return this.m_apply__elemental2_dom_Node(/**@type {T}*/ ($Casts.$to(arg0, $Overlay)));
 }
 
 static $clinit() {
  AsHTMLElement.$clinit = () =>{};
  AsHTMLElement.$loadModules();
  j_l_Object.$clinit();
  j_u_function_Function.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsHTMLElement;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AsHTMLElement, 'org.jboss.elemento.Elements$AsHTMLElement');

j_u_function_Function.$markImplementor(AsHTMLElement);

exports = AsHTMLElement; 
//# sourceMappingURL=Elements$AsHTMLElement.js.map
