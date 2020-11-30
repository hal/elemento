goog.module('org.gwtproject.dom.client.StyleInjector.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_client_StyleInjector_1__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_StyleInjector_1__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  if (StyleInjector.f_needsInjection__org_gwtproject_dom_client_StyleInjector_) {
   StyleInjector.m_flush__org_gwtproject_core_client_JavaScriptObject(null);
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.client.StyleInjector$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=StyleInjector$1.js.map
