goog.module('org.gwtproject.safehtml.shared.UriUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class JsImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsImpl} */
 static $create__() {
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_UriUtils_JsImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safehtml_shared_UriUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_encode__java_lang_String_$pp_org_gwtproject_safehtml_shared(/** ?string */ uri) {
  uri = goog.global.encodeURI(uri);
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(uri, "%5B") != -1) {
   uri = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(uri, "%5B", "[");
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(uri, "%5D") != -1) {
   uri = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(uri, "%5D", "]");
  }
  return uri;
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
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.UriUtils$JsImpl');

exports = JsImpl; 
//# sourceMappingURL=UriUtils$JsImpl.js.map
