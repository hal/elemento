goog.module('io.crysknife.client.internal.AbstractBeanManager$impl');

const BeanManager = goog.require('io.crysknife.client.BeanManager$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Instance = goog.forwardDeclare('io.crysknife.client.Instance$impl');
let InstanceImpl = goog.forwardDeclare('io.crysknife.client.internal.InstanceImpl$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Error = goog.forwardDeclare('java.lang.Error$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Default = goog.forwardDeclare('javax.enterprise.inject.Default$impl');
let Provider = goog.forwardDeclare('javax.inject.Provider$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {BeanManager}
  */
class AbstractBeanManager extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Class, Map<Class<?>, Provider>>}*/
  this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_;
 }
 
 $ctor__io_crysknife_client_internal_AbstractBeanManager__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_io_crysknife_client_internal_AbstractBeanManager();
 }
 /** @override */
 m_destroyBean__java_lang_Object(/** * */ ref) {}
 /** @override @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class__java_lang_Class(/** Class */ type, /** Class<?> */ qualifier) {
  if (!$Equality.$same(this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.get(type), null) && /**@type {Map<Class<?>, Provider>}*/ ($Casts.$to(this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.get(type), Map)).containsKey(qualifier)) {
   return /**@type {!InstanceImpl<T>}*/ (InstanceImpl.$create__javax_inject_Provider(/**@type {Provider}*/ ($Casts.$to(/**@type {Map<Class<?>, Provider>}*/ ($Casts.$to(this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.get(type), Map)).get(qualifier), Provider))));
  }
  throw $Exceptions.toJs(Error.$create__java_lang_String("Unable to find the bean [" + j_l_String.m_valueOf__java_lang_Object(type.m_getCanonicalName__()) + "] with the qualifier [" + j_l_String.m_valueOf__java_lang_Object(qualifier.m_getCanonicalName__()) + "]"));
 }
 /** @override @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class(/** Class */ type) {
  return /**@type {Instance<T>}*/ (this.m_lookupBean__java_lang_Class__java_lang_Class(type, Class.$get(Default)));
 }
 
 m_register__java_lang_Class__javax_inject_Provider(/** Class */ type, /** Provider */ provider) {
  this.m_register__java_lang_Class__javax_inject_Provider__java_lang_Class(type, provider, Class.$get(Default));
 }
 
 m_register__java_lang_Class__javax_inject_Provider__java_lang_Class(/** Class */ type, /** Provider */ provider, /** Class<?> */ annotation) {
  if (!this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.containsKey(type)) {
   this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.put(type, /**@type {!HashMap<Class<?>, Provider>}*/ (HashMap.$create__()));
  }
  /**@type {Map<Class<?>, Provider>}*/ ($Casts.$to(this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_.get(type), Map)).put(annotation, provider);
 }
 /** @private */
 $init___$p_io_crysknife_client_internal_AbstractBeanManager() {
  this.f_beanStore__io_crysknife_client_internal_AbstractBeanManager_ = /**@type {!HashMap<Class, Map<Class<?>, Provider>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AbstractBeanManager.$clinit = () =>{};
  AbstractBeanManager.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractBeanManager;
 }
 
 static $loadModules() {
  InstanceImpl = goog.module.get('io.crysknife.client.internal.InstanceImpl$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Error = goog.module.get('java.lang.Error$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Map = goog.module.get('java.util.Map$impl');
  Default = goog.module.get('javax.enterprise.inject.Default$impl');
  Provider = goog.module.get('javax.inject.Provider$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractBeanManager, 'io.crysknife.client.internal.AbstractBeanManager');

BeanManager.$markImplementor(AbstractBeanManager);

exports = AbstractBeanManager; 
//# sourceMappingURL=AbstractBeanManager.js.map
