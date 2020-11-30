goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class JsImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsImpl} */
 static $create__() {
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_isValidUri__java_lang_String(/** ?string */ uri) {
  return true;
 }
 /** @return {boolean} */
 m_getForceCheckValieUriFromProperty__() {
  return false;
 }
 
 static $clinit() {
  JsImpl.$clinit = () =>{};
  JsImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JsImpl');

exports = JsImpl; 
//# sourceMappingURL=SafeUriHostedModeUtils$JsImpl.js.map
