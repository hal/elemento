goog.module('org.gwtproject.safehtml.client.HasSafeHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 */
class HasSafeHtml {
 /** @abstract */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {}
 /** @return {HasSafeHtml} */
 static $adapt(/** ?function(SafeHtml):void */ fn) {
  HasSafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasSafeHtml.$clinit = () =>{};
  HasSafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_safehtml_client_HasSafeHtml = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_HasSafeHtml;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasSafeHtml, 'org.gwtproject.safehtml.client.HasSafeHtml');

HasSafeHtml.$markImplementor(/** @type {Function} */ (HasSafeHtml));

exports = HasSafeHtml; 
//# sourceMappingURL=HasSafeHtml.js.map
