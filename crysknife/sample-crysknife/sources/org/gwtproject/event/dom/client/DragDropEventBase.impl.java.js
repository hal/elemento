goog.module('org.gwtproject.event.dom.client.DragDropEventBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let DataTransfer_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DataTransfer.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');

/**
 * @abstract
 * @template H
 * @extends {DomEvent<H>}
  */
class DragDropEventBase extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_DragDropEventBase__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {boolean} */
 static m_isSupported__() {
  DragDropEventBase.$clinit();
  return true;
 }
 /** @return {?string} */
 m_getData__java_lang_String(/** ?string */ format) {
  let dt = this.m_getDataTransfer__();
  return this.m_getDataTransfer__().getData(format);
 }
 /** @return {Object} */
 m_getDataTransfer__() {
  return $Overlay.m_getDataTransfer__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 m_setData__java_lang_String__java_lang_String(/** ?string */ format, /** ?string */ data) {
  this.m_getDataTransfer__().setData(format, data);
 }
 
 static $clinit() {
  DragDropEventBase.$clinit = () =>{};
  DragDropEventBase.$loadModules();
  DomEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragDropEventBase;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(DragDropEventBase, 'org.gwtproject.event.dom.client.DragDropEventBase');

exports = DragDropEventBase; 
//# sourceMappingURL=DragDropEventBase.js.map
