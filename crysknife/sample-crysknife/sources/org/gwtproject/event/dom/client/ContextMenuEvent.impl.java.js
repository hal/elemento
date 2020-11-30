goog.module('org.gwtproject.event.dom.client.ContextMenuEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let ContextMenuHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ContextMenuHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ContextMenuHandler>}
  */
class ContextMenuEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ContextMenuEvent} */
 static $create__() {
  ContextMenuEvent.$clinit();
  let $instance = new ContextMenuEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ContextMenuEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_ContextMenuEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<ContextMenuHandler>} */
 static m_getType__() {
  ContextMenuEvent.$clinit();
  return ContextMenuEvent.f_TYPE__org_gwtproject_event_dom_client_ContextMenuEvent_;
 }
 /** @override @return {Type<ContextMenuHandler>} */
 m_getAssociatedType__() {
  return ContextMenuEvent.f_TYPE__org_gwtproject_event_dom_client_ContextMenuEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_ContextMenuHandler(/** ContextMenuHandler */ handler) {
  handler.m_onContextMenu__org_gwtproject_event_dom_client_ContextMenuEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** ContextMenuHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ContextMenuHandler(/**@type {ContextMenuHandler}*/ ($Casts.$to(arg0, ContextMenuHandler)));
 }
 
 static $clinit() {
  ContextMenuEvent.$clinit = () =>{};
  ContextMenuEvent.$loadModules();
  DomEvent.$clinit();
  ContextMenuEvent.f_TYPE__org_gwtproject_event_dom_client_ContextMenuEvent_ = /**@type {!Type<ContextMenuHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_CONTEXTMENU__org_gwtproject_dom_client_BrowserEvents, ContextMenuEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContextMenuEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  ContextMenuHandler = goog.module.get('org.gwtproject.event.dom.client.ContextMenuHandler$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ContextMenuEvent, 'org.gwtproject.event.dom.client.ContextMenuEvent');

/**@type {Type<ContextMenuHandler>}*/
ContextMenuEvent.f_TYPE__org_gwtproject_event_dom_client_ContextMenuEvent_;

exports = ContextMenuEvent; 
//# sourceMappingURL=ContextMenuEvent.js.map
