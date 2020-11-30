goog.module('org.jboss.elemento.Elements.JsArrayElementIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<HTMLElement>}
  */
class JsArrayElementIterator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_;
  /**@type {HTMLElement}*/
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_;
  /**@type {HTMLElement}*/
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_;
 }
 /** @return {!JsArrayElementIterator} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ parent) {
  JsArrayElementIterator.$clinit();
  let $instance = new JsArrayElementIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayElementIterator__elemental2_dom_HTMLElement(parent);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_Elements_JsArrayElementIterator__elemental2_dom_HTMLElement(/** HTMLElement */ parent) {
  this.$ctor__java_lang_Object__();
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_ = parent;
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_ = /**@type {HTMLElement}*/ ($Casts.$to(parent.firstElementChild, $Overlay));
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return !$Equality.$same(this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_, null);
 }
 /** @override @return {HTMLElement} */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_ = this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_;
  this.f_next__org_jboss_elemento_Elements_JsArrayElementIterator_ = /**@type {HTMLElement}*/ ($Casts.$to(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_.nextElementSibling, $Overlay));
  return this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_;
 }
 /** @override */
 m_remove__() {
  if ($Equality.$same(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_parent__org_jboss_elemento_Elements_JsArrayElementIterator_.removeChild(this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_);
  this.f_last__org_jboss_elemento_Elements_JsArrayElementIterator_ = null;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 
 static $clinit() {
  JsArrayElementIterator.$clinit = () =>{};
  JsArrayElementIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsArrayElementIterator;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(JsArrayElementIterator, 'org.jboss.elemento.Elements$JsArrayElementIterator');

Iterator.$markImplementor(JsArrayElementIterator);

exports = JsArrayElementIterator; 
//# sourceMappingURL=Elements$JsArrayElementIterator.js.map
