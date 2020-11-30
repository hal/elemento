goog.module('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<IFrameBuilder>}
 */
class IFrameBuilder {
 /** @abstract @return {IFrameBuilder} */
 m_frameBorder__int(/** number */ frameBorder) {}
 /** @abstract @override @return {IFrameBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {}
 /** @abstract @return {IFrameBuilder} */
 m_marginHeight__int(/** number */ marginHeight) {}
 /** @abstract @return {IFrameBuilder} */
 m_marginWidth__int(/** number */ marginWidth) {}
 /** @abstract @return {IFrameBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {IFrameBuilder} */
 m_noResize__() {}
 /** @abstract @return {IFrameBuilder} */
 m_scrolling__java_lang_String(/** ?string */ scrolling) {}
 /** @abstract @return {IFrameBuilder} */
 m_src__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ src) {}
 /** @abstract @return {IFrameBuilder} */
 m_src__java_lang_String(/** ?string */ src) {}
 /** @abstract @override @return {IFrameBuilder} */
 m_text__java_lang_String(/** ?string */ html) {}
 
 static $clinit() {
  IFrameBuilder.$clinit = () =>{};
  IFrameBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_IFrameBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_IFrameBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IFrameBuilder, 'org.gwtproject.dom.builder.shared.IFrameBuilder');

IFrameBuilder.$markImplementor(/** @type {Function} */ (IFrameBuilder));

exports = IFrameBuilder; 
//# sourceMappingURL=IFrameBuilder.js.map
