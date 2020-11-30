goog.module('org.gwtproject.event.dom.client.DragOverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragOverHandler>}
  */
class DragOverEvent extends DragDropEventBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DragOverEvent} */
 static $create__() {
  DragOverEvent.$clinit();
  let $instance = new DragOverEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragOverEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DragOverEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /** @return {Type<DragOverHandler>} */
 static m_getType__() {
  DragOverEvent.$clinit();
  return DragOverEvent.f_TYPE__org_gwtproject_event_dom_client_DragOverEvent_;
 }
 /** @override @return {Type<DragOverHandler>} */
 m_getAssociatedType__() {
  return DragOverEvent.f_TYPE__org_gwtproject_event_dom_client_DragOverEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DragOverHandler(/** DragOverHandler */ handler) {
  handler.m_onDragOver__org_gwtproject_event_dom_client_DragOverEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DragOverHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragOverHandler(/**@type {DragOverHandler}*/ ($Casts.$to(arg0, DragOverHandler)));
 }
 
 static $clinit() {
  DragOverEvent.$clinit = () =>{};
  DragOverEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragOverEvent.f_TYPE__org_gwtproject_event_dom_client_DragOverEvent_ = /**@type {!Type<DragOverHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGOVER__org_gwtproject_dom_client_BrowserEvents, DragOverEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragOverEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragOverHandler = goog.module.get('org.gwtproject.event.dom.client.DragOverHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragOverEvent, 'org.gwtproject.event.dom.client.DragOverEvent');

/**@type {Type<DragOverHandler>}*/
DragOverEvent.f_TYPE__org_gwtproject_event_dom_client_DragOverEvent_;

exports = DragOverEvent; 
//# sourceMappingURL=DragOverEvent.js.map
