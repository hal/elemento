goog.module('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {HasSafeHtml}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SafeHtml):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SafeHtml):void}*/
  this.f_$$fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_client_HasSafeHtml_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_client_HasSafeHtml_$JsFunction(/** ?function(SafeHtml):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor = fn;
 }
 
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.client.HasSafeHtml$$LambdaAdaptor');

HasSafeHtml.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasSafeHtml$$LambdaAdaptor.js.map
