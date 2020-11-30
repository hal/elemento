goog.module('io.crysknife.annotation.ComponentScan$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ComponentScan {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  ComponentScan.$clinit = () =>{};
  ComponentScan.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_annotation_ComponentScan = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_annotation_ComponentScan;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComponentScan, 'io.crysknife.annotation.ComponentScan');

ComponentScan.$markImplementor(/** @type {Function} */ (ComponentScan));

exports = ComponentScan; 
//# sourceMappingURL=ComponentScan.js.map
