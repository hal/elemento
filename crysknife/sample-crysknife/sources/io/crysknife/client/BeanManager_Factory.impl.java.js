goog.module('io.crysknife.client.BeanManager_Factory$impl');

const Factory = goog.require('io.crysknife.client.internal.Factory$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BeanManager = goog.forwardDeclare('io.crysknife.client.BeanManager$impl');
let BeanManagerImpl = goog.forwardDeclare('io.crysknife.client.BeanManagerImpl$impl');
let Interceptor = goog.forwardDeclare('io.crysknife.client.Interceptor$impl');

/**
 * @implements {Factory<BeanManager>}
  */
class BeanManager__Factory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Interceptor}*/
  this.f_interceptor__io_crysknife_client_BeanManager_Factory_;
 }
 /** @override @return {BeanManager} */
 m_get__() {
  return BeanManagerImpl.m_get__();
 }
 /** @return {!BeanManager__Factory} */
 static $create__() {
  let $instance = new BeanManager__Factory();
  $instance.$ctor__io_crysknife_client_BeanManager_Factory__();
  return $instance;
 }
 
 $ctor__io_crysknife_client_BeanManager_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {BeanManager__Factory} */
 static m_create__() {
  BeanManager__Factory.$clinit();
  return BeanManager__Factory.$create__();
 }
 
 static $clinit() {
  BeanManager__Factory.$clinit = () =>{};
  BeanManager__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BeanManager__Factory;
 }
 
 static $loadModules() {
  BeanManagerImpl = goog.module.get('io.crysknife.client.BeanManagerImpl$impl');
 }
 
}
$Util.$setClassMetadata(BeanManager__Factory, 'io.crysknife.client.BeanManager_Factory');

Factory.$markImplementor(BeanManager__Factory);

exports = BeanManager__Factory; 
//# sourceMappingURL=BeanManager_Factory.js.map
