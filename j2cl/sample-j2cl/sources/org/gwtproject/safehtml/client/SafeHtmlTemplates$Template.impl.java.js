goog.module('org.gwtproject.safehtml.client.SafeHtmlTemplates.Template$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Template {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates_Template;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.safehtml.client.SafeHtmlTemplates$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=SafeHtmlTemplates$Template.js.map
