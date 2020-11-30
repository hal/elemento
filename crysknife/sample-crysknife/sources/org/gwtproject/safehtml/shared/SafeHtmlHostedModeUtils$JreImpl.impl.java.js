goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class JreImpl extends JsImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JreImpl} */
 static $create__() {
  JreImpl.$clinit();
  let $instance = new JreImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__();
 }
 
 static m_checkArgument__boolean__java_lang_String(/** boolean */ completeHtml, /** ?string */ message) {
  if (!completeHtml) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
  }
 }
 
 static $clinit() {
  JreImpl.$clinit = () =>{};
  JreImpl.$loadModules();
  JsImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JreImpl;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JreImpl');

exports = JreImpl; 
//# sourceMappingURL=SafeHtmlHostedModeUtils$JreImpl.js.map
