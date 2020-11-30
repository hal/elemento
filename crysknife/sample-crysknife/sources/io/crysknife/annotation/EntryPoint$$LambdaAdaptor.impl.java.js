goog.module('io.crysknife.annotation.EntryPoint.$LambdaAdaptor$impl');

const EntryPoint = goog.require('io.crysknife.annotation.EntryPoint$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {EntryPoint}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__io_crysknife_annotation_EntryPoint_$LambdaAdaptor;
  this.$ctor__io_crysknife_annotation_EntryPoint_$LambdaAdaptor__io_crysknife_annotation_EntryPoint_$JsFunction(fn);
 }
 
 $ctor__io_crysknife_annotation_EntryPoint_$LambdaAdaptor__io_crysknife_annotation_EntryPoint_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__io_crysknife_annotation_EntryPoint_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__io_crysknife_annotation_EntryPoint_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'io.crysknife.annotation.EntryPoint$$LambdaAdaptor');

EntryPoint.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EntryPoint$$LambdaAdaptor.js.map
