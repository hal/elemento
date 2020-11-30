goog.module('org.gwtproject.event.dom.client.DragEndEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragEndHandler>}
  */
class DragEndEvent extends DragDropEventBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DragEndEvent} */
 static $create__() {
  DragEndEvent.$clinit();
  let $instance = new DragEndEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragEndEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DragEndEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /** @return {Type<DragEndHandler>} */
 static m_getType__() {
  DragEndEvent.$clinit();
  return DragEndEvent.f_TYPE__org_gwtproject_event_dom_client_DragEndEvent_;
 }
 /** @override @return {Type<DragEndHandler>} */
 m_getAssociatedType__() {
  return DragEndEvent.f_TYPE__org_gwtproject_event_dom_client_DragEndEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DragEndHandler(/** DragEndHandler */ handler) {
  handler.m_onDragEnd__org_gwtproject_event_dom_client_DragEndEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DragEndHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragEndHandler(/**@type {DragEndHandler}*/ ($Casts.$to(arg0, DragEndHandler)));
 }
 
 static $clinit() {
  DragEndEvent.$clinit = () =>{};
  DragEndEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragEndEvent.f_TYPE__org_gwtproject_event_dom_client_DragEndEvent_ = /**@type {!Type<DragEndHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGEND__org_gwtproject_dom_client_BrowserEvents, DragEndEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragEndEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragEndHandler = goog.module.get('org.gwtproject.event.dom.client.DragEndHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragEndEvent, 'org.gwtproject.event.dom.client.DragEndEvent');

/**@type {Type<DragEndHandler>}*/
DragEndEvent.f_TYPE__org_gwtproject_event_dom_client_DragEndEvent_;

exports = DragEndEvent; 
//# sourceMappingURL=DragEndEvent.js.map
