goog.module('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');

/**
 * @implements {Attachable}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(MutationRecord):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MutationRecord):void}*/
  this.f_$$fn__org_jboss_elemento_Attachable_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_Attachable_$LambdaAdaptor__org_jboss_elemento_Attachable_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_Attachable_$LambdaAdaptor__org_jboss_elemento_Attachable_$JsFunction(/** ?function(MutationRecord):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_Attachable_$LambdaAdaptor = fn;
 }
 
 m_attach__elemental2_dom_MutationRecord(/** MutationRecord */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_Attachable_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_detach__elemental2_dom_MutationRecord(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Attachable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.Attachable$$LambdaAdaptor');

Attachable.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Attachable$$LambdaAdaptor.js.map
