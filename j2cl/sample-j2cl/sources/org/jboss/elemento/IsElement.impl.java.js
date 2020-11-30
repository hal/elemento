goog.module('org.jboss.elemento.IsElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 */
class IsElement {
 /** @abstract @return {E} */
 m_element__() {}
 /** @template E @return {IsElement<E>} */
 static $adapt(/** ?function():E */ fn) {
  IsElement.$clinit();
  return /**@type {!$LambdaAdaptor<E>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  IsElement.$clinit = () =>{};
  IsElement.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_IsElement = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_IsElement;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsElement, 'org.jboss.elemento.IsElement');

IsElement.$markImplementor(/** @type {Function} */ (IsElement));

exports = IsElement; 
//# sourceMappingURL=IsElement.js.map
