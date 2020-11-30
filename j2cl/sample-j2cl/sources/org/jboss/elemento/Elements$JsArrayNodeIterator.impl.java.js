goog.module('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Node>}
  */
class JsArrayNodeIterator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Node}*/
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  /**@type {Node}*/
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  /**@type {Node}*/
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_;
 }
 /** @return {!JsArrayNodeIterator} */
 static $create__elemental2_dom_Node(/** Node */ parent) {
  JsArrayNodeIterator.$clinit();
  let $instance = new JsArrayNodeIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayNodeIterator__elemental2_dom_Node(parent);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_Elements_JsArrayNodeIterator__elemental2_dom_Node(/** Node */ parent) {
  this.$ctor__java_lang_Object__();
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_ = parent;
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_ = parent.firstChild;
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return !$Equality.$same(this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_, null);
 }
 /** @override @return {Node} */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_ = this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_;
  this.f_next__org_jboss_elemento_Elements_JsArrayNodeIterator_ = this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_.nextSibling;
  return this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_;
 }
 /** @override */
 m_remove__() {
  if ($Equality.$same(this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_parent__org_jboss_elemento_Elements_JsArrayNodeIterator_.removeChild(this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_);
  this.f_last__org_jboss_elemento_Elements_JsArrayNodeIterator_ = null;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 
 static $clinit() {
  JsArrayNodeIterator.$clinit = () =>{};
  JsArrayNodeIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsArrayNodeIterator;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(JsArrayNodeIterator, 'org.jboss.elemento.Elements$JsArrayNodeIterator');

Iterator.$markImplementor(JsArrayNodeIterator);

exports = JsArrayNodeIterator; 
//# sourceMappingURL=Elements$JsArrayNodeIterator.js.map
