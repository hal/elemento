goog.module('javax.annotation.PostConstruct$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.annotation.PostConstruct.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PostConstruct {
 /** @return {PostConstruct} */
 static $adapt(/** ?function():Class<?> */ fn) {
  PostConstruct.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PostConstruct.$clinit = () =>{};
  PostConstruct.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_annotation_PostConstruct = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_annotation_PostConstruct;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.annotation.PostConstruct.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PostConstruct, 'javax.annotation.PostConstruct');

PostConstruct.$markImplementor(/** @type {Function} */ (PostConstruct));

exports = PostConstruct; 
//# sourceMappingURL=PostConstruct.js.map
