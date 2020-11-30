goog.module('io.crysknife.client.BeanManagerImpl$impl');

const AbstractBeanManager = goog.require('io.crysknife.client.internal.AbstractBeanManager$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BeanManager = goog.forwardDeclare('io.crysknife.client.BeanManager$impl');
let BeanManager__Factory = goog.forwardDeclare('io.crysknife.client.BeanManager_Factory$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let ApplicationElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let FooterElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let TodoRepository__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');

class BeanManagerImpl extends AbstractBeanManager {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BeanManagerImpl} */
 static $create__() {
  BeanManagerImpl.$clinit();
  let $instance = new BeanManagerImpl();
  $instance.$ctor__io_crysknife_client_BeanManagerImpl__();
  return $instance;
 }
 
 $ctor__io_crysknife_client_BeanManagerImpl__() {
  this.$ctor__io_crysknife_client_internal_AbstractBeanManager__();
 }
 
 m_init___$p_io_crysknife_client_BeanManagerImpl() {
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(BeanManager), BeanManager__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(TodoRepository), TodoRepository__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(ApplicationElement), ApplicationElement__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(FooterElement), FooterElement__Factory.m_create__());
 }
 /** @return {BeanManager} */
 static m_get__() {
  BeanManagerImpl.$clinit();
  if ($Equality.$same(BeanManagerImpl.f_instance__io_crysknife_client_BeanManagerImpl_, null)) {
   BeanManagerImpl.f_instance__io_crysknife_client_BeanManagerImpl_ = BeanManagerImpl.$create__();
   BeanManagerImpl.f_instance__io_crysknife_client_BeanManagerImpl_.m_init___$p_io_crysknife_client_BeanManagerImpl();
  }
  return BeanManagerImpl.f_instance__io_crysknife_client_BeanManagerImpl_;
 }
 
 static $clinit() {
  BeanManagerImpl.$clinit = () =>{};
  BeanManagerImpl.$loadModules();
  AbstractBeanManager.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BeanManagerImpl;
 }
 
 static $loadModules() {
  BeanManager = goog.module.get('io.crysknife.client.BeanManager$impl');
  BeanManager__Factory = goog.module.get('io.crysknife.client.BeanManager_Factory$impl');
  Class = goog.module.get('java.lang.Class$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
  ApplicationElement__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement$impl');
  FooterElement__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  TodoRepository__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');
 }
 
}
$Util.$setClassMetadata(BeanManagerImpl, 'io.crysknife.client.BeanManagerImpl');

/**@type {BeanManagerImpl}*/
BeanManagerImpl.f_instance__io_crysknife_client_BeanManagerImpl_;

exports = BeanManagerImpl; 
//# sourceMappingURL=BeanManagerImpl.js.map
