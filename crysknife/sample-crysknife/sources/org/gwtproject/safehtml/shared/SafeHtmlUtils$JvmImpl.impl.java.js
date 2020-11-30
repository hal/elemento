goog.module('org.gwtproject.safehtml.shared.SafeHtmlUtils.JvmImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils.JsImpl$impl');

class JvmImpl extends JsImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JvmImpl} */
 static $create__() {
  JvmImpl.$clinit();
  let $instance = new JvmImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JvmImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JvmImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl__();
 }
 
 static $clinit() {
  JvmImpl.$clinit = () =>{};
  JvmImpl.$loadModules();
  JsImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JvmImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JvmImpl, 'org.gwtproject.safehtml.shared.SafeHtmlUtils$JvmImpl');

exports = JvmImpl; 
//# sourceMappingURL=SafeHtmlUtils$JvmImpl.js.map
