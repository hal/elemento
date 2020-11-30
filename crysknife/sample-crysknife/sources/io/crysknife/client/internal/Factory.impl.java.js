goog.module('io.crysknife.client.internal.Factory$impl');

const Provider = goog.require('javax.inject.Provider$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('io.crysknife.client.internal.Factory.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {Provider<T>}
 */
class Factory {
 /** @template T @return {Factory<T>} */
 static $adapt(/** ?function():T */ fn) {
  Factory.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Factory.$clinit = () =>{};
  Factory.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Provider.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_client_internal_Factory = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_client_internal_Factory;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('io.crysknife.client.internal.Factory.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Factory, 'io.crysknife.client.internal.Factory');

Factory.$markImplementor(/** @type {Function} */ (Factory));

exports = Factory; 
//# sourceMappingURL=Factory.js.map
