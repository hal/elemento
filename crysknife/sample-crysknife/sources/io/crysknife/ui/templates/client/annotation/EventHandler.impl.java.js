goog.module('io.crysknife.ui.templates.client.annotation.EventHandler$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EventHandler {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  EventHandler.$clinit = () =>{};
  EventHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_ui_templates_client_annotation_EventHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_ui_templates_client_annotation_EventHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EventHandler, 'io.crysknife.ui.templates.client.annotation.EventHandler');

EventHandler.$markImplementor(/** @type {Function} */ (EventHandler));

exports = EventHandler; 
//# sourceMappingURL=EventHandler.js.map
