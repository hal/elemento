goog.module('javax.enterprise.event.Observes$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.event.Observes.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Observes {
 /** @return {Observes} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Observes.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Observes.$clinit = () =>{};
  Observes.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_event_Observes = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_event_Observes;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.event.Observes.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Observes, 'javax.enterprise.event.Observes');

Observes.$markImplementor(/** @type {Function} */ (Observes));

exports = Observes; 
//# sourceMappingURL=Observes.js.map
