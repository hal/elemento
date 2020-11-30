goog.module('javax.enterprise.context.ApplicationScoped$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.context.ApplicationScoped.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ApplicationScoped {
 /** @return {ApplicationScoped} */
 static $adapt(/** ?function():Class<?> */ fn) {
  ApplicationScoped.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ApplicationScoped.$clinit = () =>{};
  ApplicationScoped.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_context_ApplicationScoped = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_ApplicationScoped;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.context.ApplicationScoped.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ApplicationScoped, 'javax.enterprise.context.ApplicationScoped');

ApplicationScoped.$markImplementor(/** @type {Function} */ (ApplicationScoped));

exports = ApplicationScoped; 
//# sourceMappingURL=ApplicationScoped.js.map
