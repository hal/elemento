goog.module('io.crysknife.client.Instance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T
 */
class Instance {
 /** @abstract @template T_1 @return {T_1} */
 m_get__() {}
 /** @abstract */
 m_destroy__java_lang_Object(/** T */ var1) {}
 /** @abstract */
 m_destroyAll__() {}
 
 static $clinit() {
  Instance.$clinit = () =>{};
  Instance.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__io_crysknife_client_Instance = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_client_Instance;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Instance, 'io.crysknife.client.Instance');

Instance.$markImplementor(/** @type {Function} */ (Instance));

exports = Instance; 
//# sourceMappingURL=Instance.js.map
