goog.module('org.jboss.elemento.BodyObserver.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementObserver = goog.require('org.jboss.elemento.BodyObserver.ElementObserver$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');

/**
 * @implements {ElementObserver}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.$c_element;
  /**@type {?string}*/
  this.$c_attribute;
  /**@type {ObserverCallback}*/
  this.$c_callback;
 }
 /** @return {!$1} */
 static $create__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback(/** HTMLElement */ $c_element, /** ?string */ $c_attribute, /** ObserverCallback */ $c_callback) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_jboss_elemento_BodyObserver_1__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback($c_element, $c_attribute, $c_callback);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_BodyObserver_1__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback(/** HTMLElement */ $c_element, /** ?string */ $c_attribute, /** ObserverCallback */ $c_callback) {
  this.$c_element = $c_element;
  this.$c_attribute = $c_attribute;
  this.$c_callback = $c_callback;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_attachId__() {
  return this.$c_element.getAttribute(this.$c_attribute);
 }
 /** @override @return {HTMLElement} */
 m_observedElement__() {
  return this.$c_element;
 }
 /** @override @return {ObserverCallback} */
 m_callback__() {
  return this.$c_callback;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.jboss.elemento.BodyObserver$1');

ElementObserver.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=BodyObserver$1.js.map
