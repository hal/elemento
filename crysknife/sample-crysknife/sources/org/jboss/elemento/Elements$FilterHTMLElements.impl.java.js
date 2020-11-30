goog.module('org.jboss.elemento.Elements.FilterHTMLElements$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Predicate = goog.require('java.util.function.Predicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @template T
 * @implements {Predicate<T>}
  */
class FilterHTMLElements extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!FilterHTMLElements<T>} */
 static $create__() {
  FilterHTMLElements.$clinit();
  let $instance = new FilterHTMLElements();
  $instance.$ctor__org_jboss_elemento_Elements_FilterHTMLElements__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_Elements_FilterHTMLElements__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_test__java_lang_Object(/** T */ t) {
  return $Overlay.$isInstance(t);
 }
 //Default method forwarding stub.
 /** @override @return {Predicate<T>} */
 m_and__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return /**@type {Predicate<T>}*/ (Predicate.m_and__$default__java_util_function_Predicate__java_util_function_Predicate(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @return {Predicate<T>} */
 m_negate__() {
  return /**@type {Predicate<T>}*/ (Predicate.m_negate__$default__java_util_function_Predicate(this));
 }
 //Default method forwarding stub.
 /** @override @return {Predicate<T>} */
 m_or__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return /**@type {Predicate<T>}*/ (Predicate.m_or__$default__java_util_function_Predicate__java_util_function_Predicate(this, arg0));
 }
 
 static $clinit() {
  FilterHTMLElements.$clinit = () =>{};
  FilterHTMLElements.$loadModules();
  j_l_Object.$clinit();
  Predicate.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterHTMLElements;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(FilterHTMLElements, 'org.jboss.elemento.Elements$FilterHTMLElements');

Predicate.$markImplementor(FilterHTMLElements);

exports = FilterHTMLElements; 
//# sourceMappingURL=Elements$FilterHTMLElements.js.map
