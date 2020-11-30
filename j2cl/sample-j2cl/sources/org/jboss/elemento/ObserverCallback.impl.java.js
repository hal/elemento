goog.module('org.jboss.elemento.ObserverCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ObserverCallback {
 /** @abstract */
 m_onObserved__elemental2_dom_MutationRecord(/** MutationRecord */ mutationRecord) {}
 /** @return {ObserverCallback} */
 static $adapt(/** ?function(MutationRecord):void */ fn) {
  ObserverCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ObserverCallback.$clinit = () =>{};
  ObserverCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_ObserverCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ObserverCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ObserverCallback, 'org.jboss.elemento.ObserverCallback');

ObserverCallback.$markImplementor(/** @type {Function} */ (ObserverCallback));

exports = ObserverCallback; 
//# sourceMappingURL=ObserverCallback.js.map
