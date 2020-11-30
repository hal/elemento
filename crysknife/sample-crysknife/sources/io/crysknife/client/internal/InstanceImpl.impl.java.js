goog.module('io.crysknife.client.internal.InstanceImpl$impl');

const Instance = goog.require('io.crysknife.client.Instance$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Provider = goog.forwardDeclare('javax.inject.Provider$impl');

/**
 * @template T
 * @implements {Instance<T>}
  */
class InstanceImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Provider<T>}*/
  this.f_provider__io_crysknife_client_internal_InstanceImpl;
 }
 /** @template T @return {!InstanceImpl<T>} */
 static $create__javax_inject_Provider(/** Provider<T> */ provider) {
  InstanceImpl.$clinit();
  let $instance = new InstanceImpl();
  $instance.$ctor__io_crysknife_client_internal_InstanceImpl__javax_inject_Provider(provider);
  return $instance;
 }
 
 $ctor__io_crysknife_client_internal_InstanceImpl__javax_inject_Provider(/** Provider<T> */ provider) {
  this.$ctor__java_lang_Object__();
  this.f_provider__io_crysknife_client_internal_InstanceImpl = provider;
 }
 /** @override @return {T} */
 m_get__() {
  return this.f_provider__io_crysknife_client_internal_InstanceImpl.m_get__();
 }
 /** @override */
 m_destroy__java_lang_Object(/** T */ var1) {}
 /** @override */
 m_destroyAll__() {}
 
 static $clinit() {
  InstanceImpl.$clinit = () =>{};
  InstanceImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InstanceImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(InstanceImpl, 'io.crysknife.client.internal.InstanceImpl');

Instance.$markImplementor(InstanceImpl);

exports = InstanceImpl; 
//# sourceMappingURL=InstanceImpl.js.map
