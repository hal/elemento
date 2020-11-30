goog.module('org.jboss.elemento.ElementsBag.IterableImpl$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');

/**
 * @implements {Iterable<HTMLElement>}
  */
class IterableImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<HTMLElement>}*/
  this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl;
 }
 /** @return {!IterableImpl} */
 static $create__() {
  IterableImpl.$clinit();
  let $instance = new IterableImpl();
  $instance.$ctor__org_jboss_elemento_ElementsBag_IterableImpl__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_ElementsBag_IterableImpl__() {
  this.$ctor__java_lang_Object__();
  this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl = /**@type {!Array<HTMLElement>}*/ (new Array());
 }
 /** @override @return {Iterator<HTMLElement>} */
 m_iterator__() {
  return /**@type {Iterator<HTMLElement>}*/ (Elements.m_iterator__jsinterop_base_JsArrayLike(this.f_elements__org_jboss_elemento_ElementsBag_IterableImpl));
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<HTMLElement>} */
 m_spliterator__() {
  return /**@type {Spliterator<HTMLElement>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  IterableImpl.$clinit = () =>{};
  IterableImpl.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IterableImpl;
 }
 
 static $loadModules() {
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
 }
 
}
$Util.$setClassMetadata(IterableImpl, 'org.jboss.elemento.ElementsBag$IterableImpl');

Iterable.$markImplementor(IterableImpl);

exports = IterableImpl; 
//# sourceMappingURL=ElementsBag$IterableImpl.js.map
