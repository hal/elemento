goog.module('org.gwtproject.dom.client.Style.HasCssName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.client.Style.HasCssName.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {HasCssName}
 * @deprecated
 */
class Style_HasCssName {
 /** @return {Style_HasCssName} */
 static $adapt(/** ?function():?string */ fn) {
  Style_HasCssName.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Style_HasCssName.$clinit = () =>{};
  Style_HasCssName.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasCssName.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_client_Style_HasCssName = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_client_Style_HasCssName;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.client.Style.HasCssName.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Style_HasCssName, 'org.gwtproject.dom.client.Style$HasCssName');

Style_HasCssName.$markImplementor(/** @type {Function} */ (Style_HasCssName));

exports = Style_HasCssName; 
//# sourceMappingURL=Style$HasCssName.js.map
