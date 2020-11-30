goog.module('org.gwtproject.dom.builder.shared.HtmlAudioBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AudioBuilder = goog.require('org.gwtproject.dom.builder.shared.AudioBuilder$impl');
const HtmlMediaBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlMediaBuilderBase<AudioBuilder>}
 * @implements {AudioBuilder}
  */
class HtmlAudioBuilder extends HtmlMediaBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlAudioBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlAudioBuilder.$clinit();
  let $instance = new HtmlAudioBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlAudioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlAudioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlAudioBuilder.$clinit = () =>{};
  HtmlAudioBuilder.$loadModules();
  HtmlMediaBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlAudioBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlAudioBuilder, 'org.gwtproject.dom.builder.shared.HtmlAudioBuilder');

AudioBuilder.$markImplementor(HtmlAudioBuilder);

exports = HtmlAudioBuilder; 
//# sourceMappingURL=HtmlAudioBuilder.js.map
