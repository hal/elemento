goog.module('io.crysknife.ui.templates.client.annotation.DataField$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DataField {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  DataField.$clinit = () =>{};
  DataField.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__io_crysknife_ui_templates_client_annotation_DataField = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__io_crysknife_ui_templates_client_annotation_DataField;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DataField, 'io.crysknife.ui.templates.client.annotation.DataField');

DataField.$markImplementor(/** @type {Function} */ (DataField));

exports = DataField; 
//# sourceMappingURL=DataField.js.map
