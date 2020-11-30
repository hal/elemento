goog.module('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SafeHtmlTemplates {
 
 static $clinit() {
  SafeHtmlTemplates.$clinit = () =>{};
  SafeHtmlTemplates.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SafeHtmlTemplates, 'org.gwtproject.safehtml.client.SafeHtmlTemplates');

SafeHtmlTemplates.$markImplementor(/** @type {Function} */ (SafeHtmlTemplates));

exports = SafeHtmlTemplates; 
//# sourceMappingURL=SafeHtmlTemplates.js.map
