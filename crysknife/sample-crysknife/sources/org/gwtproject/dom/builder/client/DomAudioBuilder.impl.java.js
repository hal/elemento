goog.module('org.gwtproject.dom.builder.client.DomAudioBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomMediaBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomMediaBuilderBase$impl');
const AudioBuilder = goog.require('org.gwtproject.dom.builder.shared.AudioBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');

/**
 * @extends {DomMediaBuilderBase<AudioBuilder, Object>}
 * @implements {AudioBuilder}
  */
class DomAudioBuilder extends DomMediaBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomAudioBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomAudioBuilder.$clinit();
  let $instance = new DomAudioBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomAudioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomAudioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomMediaBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomAudioBuilder.$clinit = () =>{};
  DomAudioBuilder.$loadModules();
  DomMediaBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomAudioBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomAudioBuilder, 'org.gwtproject.dom.builder.client.DomAudioBuilder');

AudioBuilder.$markImplementor(DomAudioBuilder);

exports = DomAudioBuilder; 
//# sourceMappingURL=DomAudioBuilder.js.map
