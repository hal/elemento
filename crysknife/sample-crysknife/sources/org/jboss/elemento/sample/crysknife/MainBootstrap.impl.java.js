goog.module('org.jboss.elemento.sample.crysknife.MainBootstrap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');
let BeanManagerImpl = goog.forwardDeclare('io.crysknife.client.BeanManagerImpl$impl');
let Instance = goog.forwardDeclare('io.crysknife.client.Instance$impl');
let Interceptor = goog.forwardDeclare('io.crysknife.client.Interceptor$impl');
let OnFieldAccessed = goog.forwardDeclare('io.crysknife.client.internal.OnFieldAccessed$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let Main = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Main$impl');
let MainInfo = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.MainInfo$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MainBootstrap extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Main}*/
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /**@type {Interceptor}*/
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /**@type {Supplier<Instance<TodoRepository>>}*/
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /**@type {Supplier<Instance<ApplicationElement>>}*/
  this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /**@type {Supplier<Instance<FooterElement>>}*/
  this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_;
 }
 /** @return {!MainBootstrap} */
 static $create__org_jboss_elemento_sample_crysknife_Main(/** Main */ application) {
  MainBootstrap.$clinit();
  let $instance = new MainBootstrap();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_MainBootstrap__org_jboss_elemento_sample_crysknife_Main(application);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_MainBootstrap__org_jboss_elemento_sample_crysknife_Main(/** Main */ application) {
  this.$ctor__java_lang_Object__();
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_ = Supplier.$adapt(() =>{
   return /**@type {Instance<TodoRepository>}*/ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(TodoRepository)));
  });
  this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_ = Supplier.$adapt(() =>{
   return /**@type {Instance<ApplicationElement>}*/ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(ApplicationElement)));
  });
  this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_ = Supplier.$adapt(() =>{
   return /**@type {Instance<FooterElement>}*/ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(FooterElement)));
  });
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_ = application;
 }
 
 m_initialize___$pp_org_jboss_elemento_sample_crysknife() {
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_ = Interceptor.$create__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_);
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_ = /**@type {Main}*/ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_getProxy__(), Main));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_repository__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return /**@type {Instance<TodoRepository>}*/ ($Casts.$to(this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__(), Instance)).m_get__();
  })));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_application__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return /**@type {Instance<ApplicationElement>}*/ ($Casts.$to(this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__(), Instance)).m_get__();
  })));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_footer__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return /**@type {Instance<FooterElement>}*/ ($Casts.$to(this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__(), Instance)).m_get__();
  })));
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_init___$pp_org_jboss_elemento_sample_crysknife();
 }
 
 static $clinit() {
  MainBootstrap.$clinit = () =>{};
  MainBootstrap.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MainBootstrap;
 }
 
 static $loadModules() {
  reflect = goog.module.get('goog.reflect');
  BeanManagerImpl = goog.module.get('io.crysknife.client.BeanManagerImpl$impl');
  Instance = goog.module.get('io.crysknife.client.Instance$impl');
  Interceptor = goog.module.get('io.crysknife.client.Interceptor$impl');
  OnFieldAccessed = goog.module.get('io.crysknife.client.internal.OnFieldAccessed$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement$impl');
  Main = goog.module.get('org.jboss.elemento.sample.crysknife.Main$impl');
  MainInfo = goog.module.get('org.jboss.elemento.sample.crysknife.MainInfo$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MainBootstrap, 'org.jboss.elemento.sample.crysknife.MainBootstrap');

exports = MainBootstrap; 
//# sourceMappingURL=MainBootstrap.js.map
