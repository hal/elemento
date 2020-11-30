goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

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
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_isCompleteHtml__java_lang_String(/** ?string */ html) {
  return true;
 }
 
 m_maybeCheckCompleteHtml__java_lang_String(/** ?string */ html) {}
 /** @return {boolean} */
 m_getForceCheckCompleteHtmlFromProperty__() {
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
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JsImpl');

exports = JsImpl; 
//# sourceMappingURL=SafeHtmlHostedModeUtils$JsImpl.js.map
