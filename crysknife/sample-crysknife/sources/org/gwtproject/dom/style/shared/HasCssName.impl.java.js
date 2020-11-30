goog.module('org.gwtproject.dom.style.shared.HasCssName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasCssName {
 /** @abstract @return {?string} */
 m_getCssName__() {}
 /** @return {HasCssName} */
 static $adapt(/** ?function():?string */ fn) {
  HasCssName.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasCssName.$clinit = () =>{};
  HasCssName.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_dom_style_shared_HasCssName = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_style_shared_HasCssName;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasCssName, 'org.gwtproject.dom.style.shared.HasCssName');

HasCssName.$markImplementor(/** @type {Function} */ (HasCssName));

exports = HasCssName; 
//# sourceMappingURL=HasCssName.js.map
