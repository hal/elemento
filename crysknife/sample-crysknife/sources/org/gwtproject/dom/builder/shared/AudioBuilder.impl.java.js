goog.module('org.gwtproject.dom.builder.shared.AudioBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

/**
 * @interface
 * @extends {MediaBuilder<AudioBuilder>}
 */
class AudioBuilder {
 
 static $clinit() {
  AudioBuilder.$clinit = () =>{};
  AudioBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  MediaBuilder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_AudioBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_AudioBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AudioBuilder, 'org.gwtproject.dom.builder.shared.AudioBuilder');

AudioBuilder.$markImplementor(/** @type {Function} */ (AudioBuilder));

exports = AudioBuilder; 
//# sourceMappingURL=AudioBuilder.js.map
