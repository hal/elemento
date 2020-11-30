goog.module('org.jboss.elemento.BodyObserver.ElementObserver$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');

/**
 * @interface
 */
class ElementObserver {
 /** @abstract @return {?string} */
 m_attachId__() {}
 /** @abstract @return {HTMLElement} */
 m_observedElement__() {}
 /** @abstract @return {ObserverCallback} */
 m_callback__() {}
 
 static $clinit() {
  ElementObserver.$clinit = () =>{};
  ElementObserver.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_BodyObserver_ElementObserver = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_BodyObserver_ElementObserver;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementObserver, 'org.jboss.elemento.BodyObserver$ElementObserver');

ElementObserver.$markImplementor(/** @type {Function} */ (ElementObserver));

exports = ElementObserver; 
//# sourceMappingURL=BodyObserver$ElementObserver.js.map
