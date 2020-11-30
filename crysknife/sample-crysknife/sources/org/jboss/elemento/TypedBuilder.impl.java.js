goog.module('org.jboss.elemento.TypedBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, B
 */
class TypedBuilder {
 /** @abstract @return {B} */
 m_that__() {}
 /** @template T, B @return {TypedBuilder<T, B>} */
 static $adapt(/** ?function():B */ fn) {
  TypedBuilder.$clinit();
  return /**@type {!$LambdaAdaptor<T, B>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  TypedBuilder.$clinit = () =>{};
  TypedBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_TypedBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_TypedBuilder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TypedBuilder, 'org.jboss.elemento.TypedBuilder');

TypedBuilder.$markImplementor(/** @type {Function} */ (TypedBuilder));

exports = TypedBuilder; 
//# sourceMappingURL=TypedBuilder.js.map
