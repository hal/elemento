goog.module('org.gwtproject.event.dom.client.DragStartEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragStartHandler>}
  */
class DragStartEvent extends DragDropEventBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DragStartEvent} */
 static $create__() {
  DragStartEvent.$clinit();
  let $instance = new DragStartEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragStartEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DragStartEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /** @return {Type<DragStartHandler>} */
 static m_getType__() {
  DragStartEvent.$clinit();
  return DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;
 }
 /** @override @return {Type<DragStartHandler>} */
 m_getAssociatedType__() {
  return DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DragStartHandler(/** DragStartHandler */ handler) {
  handler.m_onDragStart__org_gwtproject_event_dom_client_DragStartEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DragStartHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragStartHandler(/**@type {DragStartHandler}*/ ($Casts.$to(arg0, DragStartHandler)));
 }
 
 static $clinit() {
  DragStartEvent.$clinit = () =>{};
  DragStartEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_ = /**@type {!Type<DragStartHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGSTART__org_gwtproject_dom_client_BrowserEvents, DragStartEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragStartEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragStartHandler = goog.module.get('org.gwtproject.event.dom.client.DragStartHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragStartEvent, 'org.gwtproject.event.dom.client.DragStartEvent');

/**@type {Type<DragStartHandler>}*/
DragStartEvent.f_TYPE__org_gwtproject_event_dom_client_DragStartEvent_;

exports = DragStartEvent; 
//# sourceMappingURL=DragStartEvent.js.map
