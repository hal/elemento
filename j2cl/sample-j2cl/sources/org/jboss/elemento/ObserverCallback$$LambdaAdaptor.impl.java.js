goog.module('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ObserverCallback = goog.require('org.jboss.elemento.ObserverCallback$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');

/**
 * @implements {ObserverCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MutationRecord):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MutationRecord):void}*/
  this.f_$$fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_ObserverCallback_$LambdaAdaptor__org_jboss_elemento_ObserverCallback_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_ObserverCallback_$LambdaAdaptor__org_jboss_elemento_ObserverCallback_$JsFunction(/** ?function(MutationRecord):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor = fn;
 }
 
 m_onObserved__elemental2_dom_MutationRecord(/** MutationRecord */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.ObserverCallback$$LambdaAdaptor');

ObserverCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ObserverCallback$$LambdaAdaptor.js.map
