goog.module('org.gwtproject.dom.builder.shared.ImageBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ImageBuilder>}
 */
class ImageBuilder {
 /** @abstract @return {ImageBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {}
 /** @abstract @return {ImageBuilder} */
 m_height__int(/** number */ height) {}
 /** @abstract @return {ImageBuilder} */
 m_isMap__() {}
 /** @abstract @return {ImageBuilder} */
 m_src__java_lang_String(/** ?string */ src) {}
 /** @abstract @return {ImageBuilder} */
 m_width__int(/** number */ width) {}
 
 static $clinit() {
  ImageBuilder.$clinit = () =>{};
  ImageBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ImageBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ImageBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageBuilder, 'org.gwtproject.dom.builder.shared.ImageBuilder');

ImageBuilder.$markImplementor(/** @type {Function} */ (ImageBuilder));

exports = ImageBuilder; 
//# sourceMappingURL=ImageBuilder.js.map
