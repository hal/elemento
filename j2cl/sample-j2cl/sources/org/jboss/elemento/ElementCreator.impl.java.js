goog.module('org.jboss.elemento.ElementCreator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.ElementCreator.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ElementCreator {
 /** @abstract @template E @return {E} */
 m_create__java_lang_String__java_lang_Class(/** ?string */ element, /** Class<E> */ type) {}
 /** @return {ElementCreator} */
 static $adapt(/** ?function(?string, Class<?>):? */ fn) {
  ElementCreator.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ElementCreator.$clinit = () =>{};
  ElementCreator.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_ElementCreator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ElementCreator;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.ElementCreator.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ElementCreator, 'org.jboss.elemento.ElementCreator');

ElementCreator.$markImplementor(/** @type {Function} */ (ElementCreator));

exports = ElementCreator; 
//# sourceMappingURL=ElementCreator.js.map
