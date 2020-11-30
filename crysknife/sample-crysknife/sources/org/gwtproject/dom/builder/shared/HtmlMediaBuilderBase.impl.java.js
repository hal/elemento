goog.module('org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R
 * @extends {HtmlElementBuilderBase<R>}
 * @implements {MediaBuilder<R>}
  */
class HtmlMediaBuilderBase extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @template R @return {!HtmlMediaBuilderBase<R>} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlMediaBuilderBase.$clinit();
  let $instance = new HtmlMediaBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {R} */
 m_autoplay__() {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("autoplay", "autoplay"), MediaBuilder));
 }
 /** @override @return {R} */
 m_controls__() {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("controls", "controls"), MediaBuilder));
 }
 /** @override @return {R} */
 m_loop__() {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("loop", "loop"), MediaBuilder));
 }
 /** @override @return {R} */
 m_muted__() {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("muted", "muted"), MediaBuilder));
 }
 /** @override @return {R} */
 m_preload__java_lang_String(/** ?string */ preload) {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("preload", preload), MediaBuilder));
 }
 /** @override @return {R} */
 m_src__java_lang_String(/** ?string */ url) {
  return /**@type {R}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", url), MediaBuilder));
 }
 
 static $clinit() {
  HtmlMediaBuilderBase.$clinit = () =>{};
  HtmlMediaBuilderBase.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlMediaBuilderBase;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlMediaBuilderBase, 'org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase');

MediaBuilder.$markImplementor(HtmlMediaBuilderBase);

exports = HtmlMediaBuilderBase; 
//# sourceMappingURL=HtmlMediaBuilderBase.js.map
