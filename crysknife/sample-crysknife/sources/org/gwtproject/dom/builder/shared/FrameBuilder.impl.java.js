goog.module('org.gwtproject.dom.builder.shared.FrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FrameBuilder>}
 */
class FrameBuilder {
 /** @abstract @return {FrameBuilder} */
 m_frameBorder__int(/** number */ frameBorder) {}
 /** @abstract @return {FrameBuilder} */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ longDesc) {}
 /** @abstract @return {FrameBuilder} */
 m_longDesc__java_lang_String(/** ?string */ longDesc) {}
 /** @abstract @return {FrameBuilder} */
 m_marginHeight__int(/** number */ marginHeight) {}
 /** @abstract @return {FrameBuilder} */
 m_marginWidth__int(/** number */ marginWidth) {}
 /** @abstract @return {FrameBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {FrameBuilder} */
 m_noResize__() {}
 /** @abstract @return {FrameBuilder} */
 m_scrolling__java_lang_String(/** ?string */ scrolling) {}
 /** @abstract @return {FrameBuilder} */
 m_src__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ src) {}
 /** @abstract @return {FrameBuilder} */
 m_src__java_lang_String(/** ?string */ src) {}
 
 static $clinit() {
  FrameBuilder.$clinit = () =>{};
  FrameBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_FrameBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FrameBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FrameBuilder, 'org.gwtproject.dom.builder.shared.FrameBuilder');

FrameBuilder.$markImplementor(/** @type {Function} */ (FrameBuilder));

exports = FrameBuilder; 
//# sourceMappingURL=FrameBuilder.js.map
