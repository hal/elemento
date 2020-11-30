goog.module('io.crysknife.client.ProxyGetInterceptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const $JavaScriptFunction = goog.require('vmbootstrap.JavaScriptFunction$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ProxyGetInterceptor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {*}*/
  this.f_target__io_crysknife_client_ProxyGetInterceptor_;
  /**@type {Map<?string, BiFunction<*, ?string, *>>}*/
  this.f_propHolder__io_crysknife_client_ProxyGetInterceptor_;
  /**@type {Map<?string, BiFunction<*, ?string, *>>}*/
  this.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_;
 }
 /** @return {function(*, ?string, *):*} */
 static $create__java_lang_Object(/** * */ target) {
  ProxyGetInterceptor.$clinit();
  let $instance = new ProxyGetInterceptor();
  $instance.$ctor__io_crysknife_client_ProxyGetInterceptor__java_lang_Object(target);
  return $Util.$makeLambdaFunction(ProxyGetInterceptor.prototype.m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object, $instance, ProxyGetInterceptor.$copy);
 }
 /** @suppress {invalidCasts} */
 $ctor__io_crysknife_client_ProxyGetInterceptor__java_lang_Object(/** * */ target) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_io_crysknife_client_ProxyGetInterceptor();
  this.f_target__io_crysknife_client_ProxyGetInterceptor_ = target;
 }
 
 static m_addProperty__io_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction(/** function(*, ?string, *):* */ $thisArg, /** ?string */ obfuscated, /** BiFunction */ function_1) {
  ProxyGetInterceptor.$clinit();
  $thisArg.f_propHolder__io_crysknife_client_ProxyGetInterceptor_.put(obfuscated, function_1);
 }
 
 static m_addMethod__io_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction(/** function(*, ?string, *):* */ $thisArg, /** ?string */ obfuscated, /** BiFunction */ function_1) {
  ProxyGetInterceptor.$clinit();
  $thisArg.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_.put(obfuscated, function_1);
 }
 /** @this {?function(*, ?string, *):*} @return {*} */
 m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object(/** * */ object, /** ?string */ objectKey, /** * */ receiver) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(typeof($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(object), objectKey)), "function")) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(object, this.f_target__io_crysknife_client_ProxyGetInterceptor_) && this.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_.containsKey(objectKey)) {
    return /**@type {BiFunction<*, ?string, *>}*/ ($Casts.$to(this.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_.get(objectKey), BiFunction)).m_apply__java_lang_Object__java_lang_Object(object, objectKey);
   }
  } else {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(object, this.f_target__io_crysknife_client_ProxyGetInterceptor_) && this.f_propHolder__io_crysknife_client_ProxyGetInterceptor_.containsKey(objectKey)) {
    return /**@type {BiFunction<*, ?string, *>}*/ ($Casts.$to(this.f_propHolder__io_crysknife_client_ProxyGetInterceptor_.get(objectKey), BiFunction)).m_apply__java_lang_Object__java_lang_Object(object, objectKey);
   }
  }
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(object), objectKey);
 }
 /** @private @this {?function(*, ?string, *):*} */
 $init___$p_io_crysknife_client_ProxyGetInterceptor() {
  this.f_propHolder__io_crysknife_client_ProxyGetInterceptor_ = /**@type {!HashMap<?string, BiFunction<*, ?string, *>>}*/ (HashMap.$create__());
  this.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_ = /**@type {!HashMap<?string, BiFunction<*, ?string, *>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  ProxyGetInterceptor.$clinit = () =>{};
  ProxyGetInterceptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$is__io_crysknife_client_ProxyGetInterceptor;
  
 }
 static $copy(/**ProxyGetInterceptor*/ from, /** ? */ to) 
 {
  to.f_target__io_crysknife_client_ProxyGetInterceptor_ = from.f_target__io_crysknife_client_ProxyGetInterceptor_;
  to.f_propHolder__io_crysknife_client_ProxyGetInterceptor_ = from.f_propHolder__io_crysknife_client_ProxyGetInterceptor_;
  to.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_ = from.f_methodHolder__io_crysknife_client_ProxyGetInterceptor_;
  // Marks the object is an instance of this class.
  to.$is__io_crysknife_client_ProxyGetInterceptor = true;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ProxyGetInterceptor, 'io.crysknife.client.ProxyGetInterceptor');

$JavaScriptFunction.$markImplementor(ProxyGetInterceptor);

exports = ProxyGetInterceptor; 
//# sourceMappingURL=ProxyGetInterceptor.js.map
