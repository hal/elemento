goog.module('io.crysknife.client.internal.OnFieldAccessed$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BiFunction = goog.require('java.util.function.BiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BiFunction<*, ?string, *>}
  */
class OnFieldAccessed extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Supplier}*/
  this.f_supplier__io_crysknife_client_internal_OnFieldAccessed_;
 }
 /** @return {!OnFieldAccessed} */
 static $create__java_util_function_Supplier(/** Supplier */ supplier) {
  OnFieldAccessed.$clinit();
  let $instance = new OnFieldAccessed();
  $instance.$ctor__io_crysknife_client_internal_OnFieldAccessed__java_util_function_Supplier(supplier);
  return $instance;
 }
 
 $ctor__io_crysknife_client_internal_OnFieldAccessed__java_util_function_Supplier(/** Supplier */ supplier) {
  this.$ctor__java_lang_Object__();
  this.f_supplier__io_crysknife_client_internal_OnFieldAccessed_ = supplier;
 }
 /** @return {*} */
 m_apply__java_lang_Object__java_lang_String(/** * */ o, /** ?string */ propertyKey) {
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), propertyKey), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(o), propertyKey, this.f_supplier__io_crysknife_client_internal_OnFieldAccessed_.m_get__());
  }
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), propertyKey);
 }
 //Default method forwarding stub.
 /** @override @template V @return {BiFunction<*, ?string, V>} */
 m_andThen__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {BiFunction<*, ?string, V>}*/ (BiFunction.m_andThen__$default__java_util_function_BiFunction__java_util_function_Function(this, arg0));
 }
 //Bridge method.
 /** @override @return {*} */
 m_apply__java_lang_Object__java_lang_Object(/** * */ arg0, /** ?string */ arg1) {
  return this.m_apply__java_lang_Object__java_lang_String(arg0, /**@type {?string}*/ ($Casts.$to(arg1, j_l_String)));
 }
 
 static $clinit() {
  OnFieldAccessed.$clinit = () =>{};
  OnFieldAccessed.$loadModules();
  j_l_Object.$clinit();
  BiFunction.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OnFieldAccessed;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(OnFieldAccessed, 'io.crysknife.client.internal.OnFieldAccessed');

BiFunction.$markImplementor(OnFieldAccessed);

exports = OnFieldAccessed; 
//# sourceMappingURL=OnFieldAccessed.js.map
