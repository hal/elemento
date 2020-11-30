goog.module('javax.annotation.PostConstruct.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const PostConstruct = goog.require('javax.annotation.PostConstruct$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {PostConstruct}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor;
  this.$ctor__javax_annotation_PostConstruct_$LambdaAdaptor__javax_annotation_PostConstruct_$JsFunction(fn);
 }
 
 $ctor__javax_annotation_PostConstruct_$LambdaAdaptor__javax_annotation_PostConstruct_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__javax_annotation_PostConstruct_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'javax.annotation.PostConstruct$$LambdaAdaptor');

PostConstruct.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=PostConstruct$$LambdaAdaptor.js.map
