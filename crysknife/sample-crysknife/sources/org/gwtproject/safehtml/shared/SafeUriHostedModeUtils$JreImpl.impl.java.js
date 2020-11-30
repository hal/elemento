goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

class JreImpl extends JsImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JreImpl} */
 static $create__() {
  JreImpl.$clinit();
  let $instance = new JreImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__();
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
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JreImpl');

exports = JreImpl; 
//# sourceMappingURL=SafeUriHostedModeUtils$JreImpl.js.map
