goog.module('org.gwtproject.dom.style.shared.HasCssName.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

/**
 * @implements {HasCssName}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor;
  this.$ctor__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor__org_gwtproject_dom_style_shared_HasCssName_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor__org_gwtproject_dom_style_shared_HasCssName_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor = fn;
 }
 /** @return {?string} */
 m_getCssName__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_dom_style_shared_HasCssName_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.dom.style.shared.HasCssName$$LambdaAdaptor');

HasCssName.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasCssName$$LambdaAdaptor.js.map
