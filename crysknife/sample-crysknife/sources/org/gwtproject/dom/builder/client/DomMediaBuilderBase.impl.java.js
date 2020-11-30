goog.module('org.gwtproject.dom.builder.client.DomMediaBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MediaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R, E
 * @extends {DomElementBuilderBase<R, E>}
 * @implements {MediaBuilder<R>}
  */
class DomMediaBuilderBase extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @template R, E @return {!DomMediaBuilderBase<R, E>} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomMediaBuilderBase.$clinit();
  let $instance = new DomMediaBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomMediaBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomMediaBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {R} */
 m_autoplay__() {
  $Overlay.m_setAutoplay__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/**@type {!Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), true);
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 /** @override @return {R} */
 m_controls__() {
  $Overlay.m_setControls__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/**@type {!Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), true);
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 /** @override @return {R} */
 m_loop__() {
  $Overlay.m_setLoop__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/**@type {!Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), true);
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 /** @override @return {R} */
 m_muted__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).muted = true;
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 /** @override @return {R} */
 m_preload__java_lang_String(/** ?string */ preload) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).preload = preload;
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 /** @override @return {R} */
 m_src__java_lang_String(/** ?string */ url) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = url;
  return /**@type {R}*/ ($Casts.$to(this.m_getReturnBuilder__(), MediaBuilder));
 }
 
 static $clinit() {
  DomMediaBuilderBase.$clinit = () =>{};
  DomMediaBuilderBase.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomMediaBuilderBase;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.MediaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomMediaBuilderBase, 'org.gwtproject.dom.builder.client.DomMediaBuilderBase');

MediaBuilder.$markImplementor(DomMediaBuilderBase);

exports = DomMediaBuilderBase; 
//# sourceMappingURL=DomMediaBuilderBase.js.map
