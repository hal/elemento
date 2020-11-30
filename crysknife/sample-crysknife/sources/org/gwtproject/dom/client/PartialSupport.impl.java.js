goog.module('org.gwtproject.dom.client.PartialSupport$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.dom.client.PartialSupport.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class PartialSupport {
 /** @return {PartialSupport} */
 static $adapt(/** ?function():Class<?> */ fn) {
  PartialSupport.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PartialSupport.$clinit = () =>{};
  PartialSupport.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_client_PartialSupport = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_client_PartialSupport;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.dom.client.PartialSupport.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(PartialSupport, 'org.gwtproject.dom.client.PartialSupport');

PartialSupport.$markImplementor(/** @type {Function} */ (PartialSupport));

exports = PartialSupport; 
//# sourceMappingURL=PartialSupport.js.map
