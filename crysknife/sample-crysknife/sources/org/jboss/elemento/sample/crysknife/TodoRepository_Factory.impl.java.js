goog.module('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');

const Factory = goog.require('io.crysknife.client.internal.Factory$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Interceptor = goog.forwardDeclare('io.crysknife.client.Interceptor$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Factory<TodoRepository>}
  */
class TodoRepository__Factory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Interceptor}*/
  this.f_interceptor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
  /**@type {TodoRepository}*/
  this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
 }
 /** @override @return {TodoRepository} */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
  }
  this.f_interceptor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_ = Interceptor.$create__java_lang_Object(TodoRepository.$create__());
  this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_ = /**@type {TodoRepository}*/ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_.m_getProxy__(), TodoRepository));
  return this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
 }
 /** @return {!TodoRepository__Factory} */
 static $create__() {
  let $instance = new TodoRepository__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {TodoRepository__Factory} */
 static m_create__() {
  TodoRepository__Factory.$clinit();
  return TodoRepository__Factory.$create__();
 }
 
 static $clinit() {
  TodoRepository__Factory.$clinit = () =>{};
  TodoRepository__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TodoRepository__Factory;
 }
 
 static $loadModules() {
  Interceptor = goog.module.get('io.crysknife.client.Interceptor$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TodoRepository__Factory, 'org.jboss.elemento.sample.crysknife.TodoRepository_Factory');

Factory.$markImplementor(TodoRepository__Factory);

exports = TodoRepository__Factory; 
//# sourceMappingURL=TodoRepository_Factory.js.map
