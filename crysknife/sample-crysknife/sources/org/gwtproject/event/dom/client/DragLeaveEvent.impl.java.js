goog.module('org.gwtproject.event.dom.client.DragLeaveEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragLeaveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragLeaveHandler>}
  */
class DragLeaveEvent extends DragDropEventBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DragLeaveEvent} */
 static $create__() {
  DragLeaveEvent.$clinit();
  let $instance = new DragLeaveEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragLeaveEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DragLeaveEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /** @return {Type<DragLeaveHandler>} */
 static m_getType__() {
  DragLeaveEvent.$clinit();
  return DragLeaveEvent.f_TYPE__org_gwtproject_event_dom_client_DragLeaveEvent_;
 }
 /** @override @return {Type<DragLeaveHandler>} */
 m_getAssociatedType__() {
  return DragLeaveEvent.f_TYPE__org_gwtproject_event_dom_client_DragLeaveEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DragLeaveHandler(/** DragLeaveHandler */ handler) {
  handler.m_onDragLeave__org_gwtproject_event_dom_client_DragLeaveEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DragLeaveHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragLeaveHandler(/**@type {DragLeaveHandler}*/ ($Casts.$to(arg0, DragLeaveHandler)));
 }
 
 static $clinit() {
  DragLeaveEvent.$clinit = () =>{};
  DragLeaveEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragLeaveEvent.f_TYPE__org_gwtproject_event_dom_client_DragLeaveEvent_ = /**@type {!Type<DragLeaveHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGLEAVE__org_gwtproject_dom_client_BrowserEvents, DragLeaveEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragLeaveEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragLeaveHandler = goog.module.get('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragLeaveEvent, 'org.gwtproject.event.dom.client.DragLeaveEvent');

/**@type {Type<DragLeaveHandler>}*/
DragLeaveEvent.f_TYPE__org_gwtproject_event_dom_client_DragLeaveEvent_;

exports = DragLeaveEvent; 
//# sourceMappingURL=DragLeaveEvent.js.map
