goog.module('org.gwtproject.dom.client.TagName$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class TagName {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  TagName.$clinit = () =>{};
  TagName.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_client_TagName = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_client_TagName;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TagName, 'org.gwtproject.dom.client.TagName');

TagName.$markImplementor(/** @type {Function} */ (TagName));

exports = TagName; 
//# sourceMappingURL=TagName.js.map
