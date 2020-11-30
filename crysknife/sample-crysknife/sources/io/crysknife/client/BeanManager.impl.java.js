goog.module('io.crysknife.client.BeanManager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Instance = goog.forwardDeclare('io.crysknife.client.Instance$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 */
class BeanManager {
 /** @abstract */
 m_destroyBean__java_lang_Object(/** * */ ref) {}
 /** @abstract @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class__java_lang_Class(/** Class */ type, /** Class<?> */ qualifier) {}
 /** @abstract @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class(/** Class */ type) {}
 
 static $clinit() {
  BeanManager.$clinit = () =>{};
  BeanManager.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__io_crysknife_client_BeanManager = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_client_BeanManager;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BeanManager, 'io.crysknife.client.BeanManager');

BeanManager.$markImplementor(/** @type {Function} */ (BeanManager));

exports = BeanManager; 
//# sourceMappingURL=BeanManager.js.map
