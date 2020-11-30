goog.module('org.gwtproject.dom.builder.shared.HtmlVideoBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlMediaBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase$impl');
const VideoBuilder = goog.require('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlMediaBuilderBase<VideoBuilder>}
 * @implements {VideoBuilder}
  */
class HtmlVideoBuilder extends HtmlMediaBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlVideoBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlVideoBuilder.$clinit();
  let $instance = new HtmlVideoBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlVideoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlVideoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {VideoBuilder} */
 m_height__int(/** number */ height) {
  return /**@type {VideoBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("height", height), VideoBuilder));
 }
 /** @override @return {VideoBuilder} */
 m_poster__java_lang_String(/** ?string */ url) {
  return /**@type {VideoBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("url", url), VideoBuilder));
 }
 /** @override @return {VideoBuilder} */
 m_width__int(/** number */ width) {
  return /**@type {VideoBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("width", width), VideoBuilder));
 }
 
 static $clinit() {
  HtmlVideoBuilder.$clinit = () =>{};
  HtmlVideoBuilder.$loadModules();
  HtmlMediaBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlVideoBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlVideoBuilder, 'org.gwtproject.dom.builder.shared.HtmlVideoBuilder');

VideoBuilder.$markImplementor(HtmlVideoBuilder);

exports = HtmlVideoBuilder; 
//# sourceMappingURL=HtmlVideoBuilder.js.map
