goog.module('javax.inject.Provider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Provider.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Provider {
 /** @abstract @return {T} */
 m_get__() {}
 /** @template T @return {Provider<T>} */
 static $adapt(/** ?function():T */ fn) {
  Provider.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Provider.$clinit = () =>{};
  Provider.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_inject_Provider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_inject_Provider;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Provider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Provider, 'javax.inject.Provider');

Provider.$markImplementor(/** @type {Function} */ (Provider));

exports = Provider; 
//# sourceMappingURL=Provider.js.map
