goog.module('org.gwtproject.event.dom.client.DragEnterEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DragDropEventBase = goog.require('org.gwtproject.event.dom.client.DragDropEventBase$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let DragEnterHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DragDropEventBase<DragEnterHandler>}
  */
class DragEnterEvent extends DragDropEventBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DragEnterEvent} */
 static $create__() {
  DragEnterEvent.$clinit();
  let $instance = new DragEnterEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_DragEnterEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DragEnterEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DragDropEventBase__();
 }
 /** @return {Type<DragEnterHandler>} */
 static m_getType__() {
  DragEnterEvent.$clinit();
  return DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;
 }
 /** @override @return {Type<DragEnterHandler>} */
 m_getAssociatedType__() {
  return DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_DragEnterHandler(/** DragEnterHandler */ handler) {
  handler.m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** DragEnterHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_DragEnterHandler(/**@type {DragEnterHandler}*/ ($Casts.$to(arg0, DragEnterHandler)));
 }
 
 static $clinit() {
  DragEnterEvent.$clinit = () =>{};
  DragEnterEvent.$loadModules();
  DragDropEventBase.$clinit();
  DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_ = /**@type {!Type<DragEnterHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_DRAGENTER__org_gwtproject_dom_client_BrowserEvents, DragEnterEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DragEnterEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  DragEnterHandler = goog.module.get('org.gwtproject.event.dom.client.DragEnterHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DragEnterEvent, 'org.gwtproject.event.dom.client.DragEnterEvent');

/**@type {Type<DragEnterHandler>}*/
DragEnterEvent.f_TYPE__org_gwtproject_event_dom_client_DragEnterEvent_;

exports = DragEnterEvent; 
//# sourceMappingURL=DragEnterEvent.js.map
