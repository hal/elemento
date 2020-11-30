goog.module('org.gwtproject.safehtml.shared.UriUtils.JvmImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.UriUtils.JsImpl$impl');

class JvmImpl extends JsImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JvmImpl} */
 static $create__() {
  JvmImpl.$clinit();
  let $instance = new JvmImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_UriUtils_JvmImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_UriUtils_JvmImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_UriUtils_JsImpl__();
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
$Util.$setClassMetadata(JvmImpl, 'org.gwtproject.safehtml.shared.UriUtils$JvmImpl');

exports = JvmImpl; 
//# sourceMappingURL=UriUtils$JvmImpl.js.map
