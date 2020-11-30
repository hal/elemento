goog.module('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

/**
 * @interface
 * @extends {MediaBuilder<VideoBuilder>}
 */
class VideoBuilder {
 /** @abstract @return {VideoBuilder} */
 m_height__int(/** number */ height) {}
 /** @abstract @return {VideoBuilder} */
 m_poster__java_lang_String(/** ?string */ url) {}
 /** @abstract @return {VideoBuilder} */
 m_width__int(/** number */ width) {}
 
 static $clinit() {
  VideoBuilder.$clinit = () =>{};
  VideoBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  MediaBuilder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_VideoBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_VideoBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(VideoBuilder, 'org.gwtproject.dom.builder.shared.VideoBuilder');

VideoBuilder.$markImplementor(/** @type {Function} */ (VideoBuilder));

exports = VideoBuilder; 
//# sourceMappingURL=VideoBuilder.js.map
