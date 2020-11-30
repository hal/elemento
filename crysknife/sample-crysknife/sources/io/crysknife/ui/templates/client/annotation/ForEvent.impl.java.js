goog.module('io.crysknife.ui.templates.client.annotation.ForEvent$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ForEvent {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  ForEvent.$clinit = () =>{};
  ForEvent.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_ui_templates_client_annotation_ForEvent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_ui_templates_client_annotation_ForEvent;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ForEvent, 'io.crysknife.ui.templates.client.annotation.ForEvent');

ForEvent.$markImplementor(/** @type {Function} */ (ForEvent));

exports = ForEvent; 
//# sourceMappingURL=ForEvent.js.map
