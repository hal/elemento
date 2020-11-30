goog.module('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @template T
 * @extends {ElementBuilderBase<T>}
 */
class MediaBuilder {
 /** @abstract @return {T} */
 m_autoplay__() {}
 /** @abstract @return {T} */
 m_controls__() {}
 /** @abstract @return {T} */
 m_loop__() {}
 /** @abstract @return {T} */
 m_muted__() {}
 /** @abstract @return {T} */
 m_preload__java_lang_String(/** ?string */ preload) {}
 /** @abstract @return {T} */
 m_src__java_lang_String(/** ?string */ url) {}
 
 static $clinit() {
  MediaBuilder.$clinit = () =>{};
  MediaBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_MediaBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MediaBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MediaBuilder, 'org.gwtproject.dom.builder.shared.MediaBuilder');

MediaBuilder.$markImplementor(/** @type {Function} */ (MediaBuilder));

exports = MediaBuilder; 
//# sourceMappingURL=MediaBuilder.js.map
