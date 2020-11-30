goog.module('javax.enterprise.inject.Instance$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const Provider = goog.require('javax.inject.Provider$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Annotation = goog.forwardDeclare('java.lang.annotation.Annotation$impl');

/**
 * @interface
 * @template T
 * @extends {Iterable<T>}
 * @extends {Provider<T>}
 */
class Instance {
 /** @abstract @return {Instance<T>} */
 m_select__arrayOf_java_lang_annotation_Annotation(/** Array<Annotation> */ var1) {}
 /** @abstract @template U @return {Instance<U>} */
 m_select__java_lang_Class__arrayOf_java_lang_annotation_Annotation(/** Class<U> */ var1, /** Array<Annotation> */ var2) {}
 /** @abstract @return {boolean} */
 m_isUnsatisfied__() {}
 /** @abstract @return {boolean} */
 m_isAmbiguous__() {}
 /** @abstract */
 m_destroy__java_lang_Object(/** T */ var1) {}
 
 static $clinit() {
  Instance.$clinit = () =>{};
  Instance.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Iterable.$markImplementor(ctor);
  Provider.$markImplementor(ctor);
  ctor.prototype.$implements__javax_enterprise_inject_Instance = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_enterprise_inject_Instance;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Instance, 'javax.enterprise.inject.Instance');

Instance.$markImplementor(/** @type {Function} */ (Instance));

exports = Instance; 
//# sourceMappingURL=Instance.js.map
